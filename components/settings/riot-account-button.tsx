'use client';

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

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
  profileIconUrl: string;
}

export const RiotAccountButton = ({
  riotAccount,
  profileIconUrl
}: Props) => {
  const router = useRouter();
  
  return (
    <button 
      onClick={() => router.push(`/account/${riotAccount.id}`)}
      style={{
        backgroundImage: `url('${profileIconUrl}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="max-w-[200px] opacity-60 h-32 flex items-center justify-center rounded-[0.25rem] hover:outline hover:outline-2 hover:outline-neutral-400">
      <Plus />
    </button>
  )
}