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
        <SettingsHeader userId={session.user?.id}/>
          <span className='text-center md:text-left flex flex-col w-[100%] max-w-[50%] m-auto pt-4'>
            Link Riot Account(s) here:
          </span>
        <DefaultSettings session={session} />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      <SettingsHeader userId={session.user?.id}/>
      <span className='text-center md:text-left'>Linked Riot Account(s):</span>
      <div className="flex flex-col md:grid md:grid-cols-auto-fill md:gap-4 mt-6 w-[100%] max-w-[50%] m-auto">
        {riotAccounts.map((riotAccount) => (
          <RiotAccountButtonMid key={riotAccount.id} riotAccount={riotAccount} />
        ))}
        <NewRiotAccountButton />
      </div>
    </div>
  );
};

export default SettingsPage;
