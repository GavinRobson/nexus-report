import { NavButton } from '@/components/nav/nav-button';
import { AccountNavButton } from '@/components/nav/account-nav-button';
import { auth } from '@/auth';
import { getRiotAccountsById } from '@/data/riotAccounts';
import { getProfileIconById } from '@/data/riot';

const routes = [
  {
    href: '/champions',
    label: 'Champions',
  },
  {
    href: '/leaderboard',
    label: 'Leaderboard',
  },
  {
    href: '/items',
    label: 'Items',
  },
];

export const Navigation = async () => {
  const session = await auth();

  const riotAccounts = await getRiotAccountsById(session?.user?.id);

  let profileIconUrls;

  if (riotAccounts) {
    profileIconUrls = await Promise.all(
      riotAccounts.map(async (account) => {
        return await getProfileIconById(account.profileIconId);
      })
    );
  } else {
    profileIconUrls = [''];
  }
  return (
    <nav className="flex items-center">
      <AccountNavButton
        accounts={riotAccounts}
        profileIcons={profileIconUrls}
      />
      {routes.map((route) => (
        <NavButton key={route.href} href={route.href} label={route.label} />
      ))}
    </nav>
  );
};
