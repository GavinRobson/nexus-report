import { currentUser } from '@clerk/nextjs/server';
import { NavButton } from '@/components/nav-button';
import { AccountNavButton } from '@/components/account-nav-button';

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
  return (
    <nav className="flex items-center">
      <AccountNavButton />
      {routes.map((route) => (
        <NavButton key={route.href} href={route.href} label={route.label} />
      ))}
    </nav>
  );
};
