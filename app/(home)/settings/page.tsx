import { auth } from '@/auth';
import { DefaultSettings } from '@/components/settings/default-settings';
import { NewRiotAccountButton } from '@/components/settings/new-riot-account-button';
import { RiotAccountButtonMid } from '@/components/settings/riot-account-button-mid';
import { SettingsHeader } from '@/components/settings/settings-header';
import { getRiotAccountsById } from '@/data/riotAccounts';
import { redirect } from 'next/navigation';

const SettingsPage = async () => {
  const session = await auth();

  if (!session) {
    redirect('/auth/login');
  }

  const riotAccounts = await getRiotAccountsById(session.user?.id);

  if (!riotAccounts) {
    return (
      <div className="flex flex-col">
        <SettingsHeader />
          <span className='text-center md:text-left'>
            Link Riot Account(s) here:
          </span>
        <DefaultSettings session={session} />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      <SettingsHeader />
      <span className='text-center md:text-left'>Linked Riot Account(s):</span>
      <div className="flex flex-col md:grid md:grid-cols-auto-fill md:gap-4 mt-6">
        {riotAccounts.map((riotAccount) => (
          <RiotAccountButtonMid key={riotAccount.id} riotAccount={riotAccount} />
        ))}
        <NewRiotAccountButton />
      </div>
    </div>
  );
};

export default SettingsPage;
