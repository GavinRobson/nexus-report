import { getMatchIdsByPuuid, getProfileIconById } from "@/data/riot";
import { getRiotAccountById } from "@/data/riotAccounts";
import Image from "next/image";

interface AccountPageProps {
  params: {
    riotAccountId: string;
  }
}

const AccountPage = async ({params}: AccountPageProps) => {
  const { riotAccountId } = params;
  const riotAccount = await getRiotAccountById(riotAccountId);

  if (!riotAccount) return null;

  const matchIds = await getMatchIdsByPuuid(riotAccount.puuid)
  const profileIcon = await getProfileIconById(riotAccount.profileIconId);
  return ( 
     <div className="flex flex-row justify-between p-10 w-full space-x-2">
      {matchIds.map((matchId: string) => {
        return <p>{matchId}</p>
      })} 
    </div>
   );
}
 
export default AccountPage;