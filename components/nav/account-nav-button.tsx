'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronsDown } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';
import { useState } from 'react';

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

  profileIcons: string[] | undefined;
};

type Info = {
  href: string;
  label: string;
};

export const AccountNavButton = ({ accounts, profileIcons }: Props) => {
  const [top, setTop] = useState(false);
  const [show, setShow] = useState(false);

  const router = useRouter();

  const pathname = usePathname();
  const isActive = pathname.includes('/account');

  let info: Info;

  info = { href: '/account', label: 'Account' };

  if (!accounts || !profileIcons) {
    return (
      <Button
        asChild
        size="sm"
        variant="outline"
        className={cn(
          'w-[200px] bg-[#0e1015] border-t-0 border-l-0 hover:text-white border-neutral-700 hover:border-b-0 transition',
          isActive ? 'bg-[#13151b] text-white border-b-0' : 'text-[#45484e]'
        )}
      >
        <Link href={info.href}>{info.label}</Link>
      </Button>
    );
  }

  const handleClick = (id: string) => {
    !top && setShow(false);
    !top && router.push(`${info.href}/${id}`);
  };

  return (
    <div className="relative flex flex-col h-full">
      <Button
        asChild
        onClick={() => handleClick(accounts[0].id)}
        size="sm"
        variant="outline"
        className={cn(
          'group w-48 bg-[#0e1015] border-t-0 border-l-0 hover:text-white border-neutral-700 hover:border-b-0 transition',
          isActive ? 'bg-[#13151b] text-white border-b-0' : 'text-[#45484e]'
        )}
      >
        <div className="relative flex flex-row justify-between w-full cursor-default">
          <div
            style={{
              backgroundImage: `url('${profileIcons[0]}')`,
            }}
            className={cn(
              'h-5 w-5 bg-cover rounded-full left-2 opacity-60 group-hover:opacity-90 transition',
              isActive && 'opacity-90'
            )}
          />
          <div>{accounts[0].username}</div>
          {accounts.length > 1 && (
            <ChevronsDown
              onMouseEnter={() => !top && setTop(true)}
              onMouseLeave={() => top && setTop(false)}
              onClick={() => setShow(!show)}
              className="hover:opacity-60 transition cursor-pointer"
              size={20}
            />
          )}
        </div>
      </Button>
      {show &&
        accounts.slice(1).map((account, i) => {
          return (
            <Button
              asChild
              onClick={() => handleClick(account.id)}
              size="sm"
              variant="outline"
              className={cn(
                'absolute group w-48 bg-[#0e1015] border-t-0 border-l-0 hover:text-white border-neutral-700 hover:border-b-0 transition',
                isActive
                  ? 'bg-[#13151b] text-white border-b-0'
                  : 'text-[#45484e]'
              )}
            >
              <div className="relative flex flex-row justify-start   space-x-6 w-full cursor-default">
                <div
                  style={{
                    backgroundImage: `url('${profileIcons[i + 1]}')`,
                  }}
                  className={cn(
                    'h-5 w-5 bg-cover rounded-full left-2 opacity-60 group-hover:opacity-90 transition',
                    isActive && 'opacity-90'
                  )}
                />
                <div>{account.username}</div>
              </div>
            </Button>
          );
        })}
    </div>
  );
};
