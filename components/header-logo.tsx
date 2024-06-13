'use client';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export const HeaderLogo = () => {
  const pathname = usePathname();
  const isActive = pathname === '/';

  return (
    <Link href="/">
      <div className={cn(
        'h-full flex items-center px-5',
        isActive ? 'bg-[#13151b]' : 'bg-[#0e1015]'
      )}>
        <Image src="/logo.svg" alt="logo" height={15} width={15} />
        <p className="font-semibold text-white text-xs ml-2">REPORT</p>
      </div>
    </Link>
  );
};
