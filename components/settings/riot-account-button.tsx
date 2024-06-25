'use client';

import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { UnlinkRiotAccountButton } from '@/components/settings/unlink-riot-account-button';
import { useState } from 'react';

type Props = {
  riotAccount: {
    id: string;
    puuid: string;
    username: string;
    tag: string;
    profileIconId: string;
    region: string;
    userId: string | null;
  };
  profileIconUrl: string;
};

export const RiotAccountButton = ({ riotAccount, profileIconUrl }: Props) => {
  const router = useRouter();

  const [top, setTop] = useState(false);

  const handleMouseEnter = () => {
    top ? null : setTop(true);
  };

  const handleMouseLeave = () => {
    top ? setTop(false) : null;
  };

  const handleClick = () => {
    if (!top) {
      router.push(`/account/${riotAccount.id}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundImage: `url('${profileIconUrl}')`,
      }}
      className="group relative bg-center bg-no-repeat bg-cover md:max-w-[200px] w-full opacity-60 h-32 flex flex-col items-center justify-center rounded-[0.5rem] hover:outline hover:outline-2 outline-offset-2 hover:outline-neutral-400 hover:opacity-90"
    >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute text-black right-0 top-0 hidden group-hover:flex z-50 transition"
      >
        <UnlinkRiotAccountButton id={riotAccount.id} />
      </div>
    </button>
  );
};
