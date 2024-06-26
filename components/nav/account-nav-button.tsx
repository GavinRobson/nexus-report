'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronsDown } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

type Props = {
  accounts:
    | {
        id: string;
        puuid: string;
        username: string;
        tag: string;
        profileIconId: string;
        region: string;
        userId: string | null;
      }[]
    | null
    | undefined;

  profileIcon: string | undefined;
};

type Info = {
  href: string;
  label: string;
};

export const AccountNavButton = ({ accounts, profileIcon }: Props) => {
  const pathname = usePathname();
  const isActive = pathname.includes('/account');

  let info: Info;

  info = { href: '/account', label: 'Account' };

  if (!accounts) {
    return (
      <Button
        asChild
        size="sm"
        variant="outline"
        className={cn(
          'w-48 bg-[#0e1015] border-t-0 border-l-0 hover:text-white border-neutral-700 hover:border-b-0 transition',
          isActive ? 'bg-[#13151b] text-white border-b-0' : 'text-[#45484e]'
        )}
      >
        <Link href={info.href}>{info.label}</Link>
      </Button>
    );
  }

  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        'group w-48 bg-[#0e1015] border-t-0 border-l-0 hover:text-white border-neutral-700 hover:border-b-0 transition',
        isActive ? 'bg-[#13151b] text-white border-b-0' : 'text-[#45484e]'
      )}
    >
      <Link
        className="relative flex flex-row w-full"
        href={`${info.href}/${accounts[0].id}`}
      >
        <div
          style={{
            backgroundImage: `url('${profileIcon}')`,
          }}
          className={cn(
            'absolute h-5 w-5 bg-cover rounded-full left-2 opacity-60 group-hover:opacity-90 transition',
            isActive && 'opacity-90'
          )}
        />
        <div>{accounts[0].username}</div>
        {accounts.length > 1 && (
          <ChevronsDown
            className="absolute right-2 hover:opacity-60 transition"
            size={20}
          />
        )}
      </Link>
    </Button>
  );
};
