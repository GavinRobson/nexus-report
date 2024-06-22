'use server';

import * as z from 'zod';

import { getRiotAccountByUsernameTag } from '@/data/riotAccounts';

import { RiotAccountSchema } from '@/schemas';
import { db } from '@/lib/db';
import { getPuuidUsernameTag, getSummonerByPuuid } from '@/data/riot';

export const linkRiotAccount = async (values: z.infer<typeof RiotAccountSchema>, id: string | undefined) => {
  if (id === undefined) {
    return { error: 'Invalid id' }
  }
  const validatedFields = RiotAccountSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { username, tag, region } = validatedFields.data;

  const exisitingRiotAccount = await getRiotAccountByUsernameTag(username, tag);

  if (exisitingRiotAccount) {
    return { error: "This Riot account is already linked!"}
  }

  const puuid = await getPuuidUsernameTag(username, tag);

  if (puuid.error) {
    return { error: 'Failed fetching puuid' }
  }

  const summoner = await getSummonerByPuuid(puuid);

  if (summoner.error) {
    return { error: 'Failed fetching summoner' }
  }

  await db.riotAccount.create({
    data: {
      puuid,
      username,
      tag,
      region,
      profileIconId: summoner.profileIconId.toString(),
      userId: id
    }
  });

  return { success: 'Success!' }
}