import { getProfileIconById } from "@/data/riot";
import { RiotAccountButton } from "./riot-account-button";

type Props = {
  riotAccount: {    
    id: string;
    puuid: string;
    username: string;
    tag: string;
    profileIconId: string;
    region: string;
    userId: string;
  };
}

export const RiotAccountButtonMid = async ({
  riotAccount,
}: Props) => {
  const profileIconUrl = await getProfileIconById(riotAccount.profileIconId);

  return (
    <RiotAccountButton riotAccount={riotAccount} profileIconUrl={profileIconUrl}/>  
  )
}