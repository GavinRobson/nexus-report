'use client';

import { usePathname } from 'next/navigation';

import { NavButton } from '@/components/nav-button';
import { AccountNavButton } from '@/components/account-nav-button';

const routes = [
  {
    href: '/champions',
    label: 'Champions',
  },
  {
    href: '/matches',
    label: 'Matches',
  },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center">
      <AccountNavButton 
        isActive={pathname==='/account'}
      />
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  );
};
