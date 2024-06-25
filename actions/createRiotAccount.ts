'use server';

import * as z from 'zod';

import { getRiotAccountByPuuid } from '@/data/riotAccounts';

import { RiotAccountSchema } from '@/schemas';
import { db } from '@/lib/db';
import { getSummonerByPuuid } from '@/data/riot';

export const createRiotAccount = async (
  values: z.infer<typeof RiotAccountSchema>,
  puuid: string
) => {
  const validatedFields = RiotAccountSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { username, tag, region } = validatedFields.data;

  const existingRiotAccount = await getRiotAccountByPuuid(puuid);

  if (existingRiotAccount) {
    return { error: 'Riot Account already created!' };
  }

  const summoner = await getSummonerByPuuid(puuid);

  if (summoner.error) {
    return { error: summoner.error };
  }

  await db.riotAccount.create({
    data: {
      puuid,
      username,
      tag,
      profileIconId: summoner.profileIconId.toString(),
      region,
    },
  });

  return { success: 'Riot Account Created!' };
};
