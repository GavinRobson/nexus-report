import { getProfileIconById } from '@/data/riot';
import { RiotAccountButton } from './riot-account-button';

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
};

export const RiotAccountButtonMid = async ({ riotAccount }: Props) => {
  const profileIconUrl = await getProfileIconById(riotAccount.profileIconId);

  return (
    <div className="w-full flex flex-col">
      <RiotAccountButton
        riotAccount={riotAccount}
        profileIconUrl={profileIconUrl}
      />
      <div className="flex flex-row -space-x-2 mt-2">
        <span className="px-2 text-sm">{riotAccount.username}</span>
        <span className="text-sm text-neutral-400">#{riotAccount.tag}</span>
      </div>
    </div>
  );
};
