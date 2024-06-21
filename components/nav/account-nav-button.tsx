'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

type Info = {
  href: string;
  label: string;
};

export const AccountNavButton = () => {
  const pathname = usePathname();
  const isActive = pathname === '/account';

  let info: Info;

  info = { href: '/account', label: 'Account' };

  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        'min-w-36 bg-[#0e1015] border-t-0 border-l-0 hover:text-white border-neutral-700 hover:border-b-0 transition',
        isActive ? 'bg-[#13151b] text-white border-b-0' : 'text-[#45484e]'
      )}
    >
      <Link href={info.href}>{info.label}</Link>
    </Button>
  );
};
