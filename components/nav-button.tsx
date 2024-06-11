import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type Props = {
  href: string;
  label: string;
  isActive?: boolean;
};

export const NavButton = ({ href, label, isActive }: Props) => {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        'w-auto justify-between font-normal bg-[#121319] hover:text-white border-gray-900 border-t-0 focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white transition',
        isActive ? 'bg-[#1c1e27] text-white' : 'bg-[#121319]'
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
