'use server';

import * as z from 'zod';

import { getRiotAccountByPuuid } from '@/data/riotAccounts';
import { getSummonerByPuuid, getMatchIdsByPuuid, getMatchByMatchId } from '@/data/riot';

import { db } from '@/lib/db';
import { RiotAccountSchema } from '@/schemas';

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

  const riotAccount = await db.riotAccount.create({
    data: {
      puuid,
      username,
      tag,
      profileIconId: summoner.profileIconId.toString(),
      region,
    },
  });

  const matchIds = await getMatchIdsByPuuid(puuid);
  await matchIds.map(async (matchId: string) => {
    const matchData = await getMatchByMatchId(matchId);
    console.log(matchData.info);
    await db.match.create({
      data: {
        matchId: matchId,
        matchData: matchData.info,
        participants: matchData.metadata.participants,
        riotAccountId: riotAccount.id
      }
    })
  })

  return { success: 'Riot Account Created!' };
};
