'use client';

import { useRouter } from "next/navigation"

import { Plus } from "lucide-react"

export const NewRiotAccountButton = () => {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.push('link')}
      className="max-w-[200px] bg-black opacity-90 h-32 flex items-center justify-center rounded-[0.25rem] hover:outline hover:outline-2 hover:outline-neutral-400">
      <Plus />
    </button>
  )
}