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
    redirect('/auth/login')
  }

  const riotAccounts = await getRiotAccountsById(session.user?.id);

  if (!riotAccounts) {
    return (
      <div className='flex flex-col'>
      <SettingsHeader />
      <span>Link Riot Account(s) here:</span>
      <DefaultSettings session={session}/>
    </div>
    )
  }

  return (
    <div className='flex flex-col'>
      <SettingsHeader />
      <div className='grid grid-cols-4'>
        {riotAccounts.map((riotAccount, i) =>
          <RiotAccountButtonMid riotAccount={riotAccount}/>
        )}
        <NewRiotAccountButton />
      </div>
    </div>
  )
};

export default SettingsPage;
