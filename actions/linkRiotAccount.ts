'use server';

import * as z from 'zod';
import { revalidatePath } from 'next/cache';

import { getRiotAccountByPuuid } from '@/data/riotAccounts';
import { getPuuidUsernameTag } from '@/data/riot';

import { RiotAccountSchema } from '@/schemas';

import { db } from '@/lib/db';

import { createRiotAccount } from '@/actions/createRiotAccount';


export const linkRiotAccount = async (
  values: z.infer<typeof RiotAccountSchema>,
  id: string | undefined
) => {

  // Validate user exists
  if (id === undefined) {
    return { error: 'Invalid id' };
  }

  // Validate correct fields
  const validatedFields = RiotAccountSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { username, tag } = validatedFields.data;

  // Get puuid based on username and tag
  const puuid = await getPuuidUsernameTag(username, tag);

  /*
    If riot api returns an error, the riot account does not exist,
    therefore information was entered incorrectly.
  */
  if (puuid === undefined) {
    return { error: 'Invalid Riot account' };
  }

  // Get a possible riot account based on puuid.
  const existingRiotAccount = await getRiotAccountByPuuid(puuid);

  // If there is not an existing riot account, create one.
  if (!existingRiotAccount) {
    const riotAccount = await createRiotAccount(values, puuid)
    if (riotAccount.error) {
      return { error: riotAccount.error };
    }
  }

  // After creating the riot account, update the userId to the user who submitted.
  await db.riotAccount.update({
    where: {
      puuid,
    },
    data: {
      userId: id
    }
  });

  revalidatePath('/settings')

  return { success: 'Success!'}
};
