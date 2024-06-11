'use client';

import { usePathname } from 'next/navigation';

import { NavButton } from '@/components/nav-button';

const routes = [
  {
    href: '/account',
    label: 'Account',
  },
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
