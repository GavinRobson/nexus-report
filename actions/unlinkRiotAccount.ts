'use server';

import { getRiotAccountById } from "@/data/riotAccounts";
import { db } from "@/lib/db";

export const unlinkRiotAccount = async (
  id: string
) => {
  
  const riotAccount = await getRiotAccountById(id);

  if (!riotAccount) {
    return { error: "Riot account is not stored in database" }
  }
  
  await db.riotAccount.update({
    where: {
      id
    },
    data: {
      userId: null,
    }
  })

  return { success: "Success!" }
};
