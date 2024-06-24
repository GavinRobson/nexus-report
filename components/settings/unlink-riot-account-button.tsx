'use client';

import { X } from "lucide-react"
import { useRouter } from "next/navigation";

import { unlinkRiotAccount } from "@/actions/unlinkRiotAccount";

type Props = {
  id: string
}

export const UnlinkRiotAccountButton = ({
  id
}: Props) => {
  const router = useRouter();

  const onClick = async () => {
    await unlinkRiotAccount(id);
    router.refresh();
  }

  return (
    <div 
      onClick={onClick}
      className="w-full h-full bg-neutral-500/80 rounded-bl-[0.5rem] rounded-tr-[0.5rem] hover:bg-neutral-400/90"
    >
      <X size={21}/>
    </div>
  )
}