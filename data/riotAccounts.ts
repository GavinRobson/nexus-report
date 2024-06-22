import { db } from '@/lib/db';

export const getRiotAccountsById = async (id: string | undefined) => {
  try {
    const riotAccounts = await db.riotAccount.findMany({  
      where: { 
        userId: id
      }
    });

    if (riotAccounts.length > 0) {
      return riotAccounts;
    }

    return undefined
  } catch (error) {
    return null;
  }
}

export const getRiotAccountByUsernameTag = async (username: string, tag: string) => {
  try {
    const riotAccount = await db.riotAccount.findUnique({
      where: {
        username_tag: {
          username,
          tag
        }
      }
    });

    return riotAccount;
  } catch (error) {
    return null;
  }
}

