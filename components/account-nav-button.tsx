import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  isActive?: boolean
}

export const AccountNavButton = ({
  isActive
}: Props) => {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        'min-w-36 bg-[#0e1015] border-t-0 border-l-0 hover:text-white border-neutral-700 hover:border-b-0 transition',
        isActive ? 'bg-[#13151b] text-white border-b-0' : 'text-[#45484e]',
      )}
    >
      <Link href='/account'>Account</Link>
    </Button>
  );
}