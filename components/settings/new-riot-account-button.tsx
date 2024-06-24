'use client';

import { useRouter } from 'next/navigation';

import { Plus } from 'lucide-react';

export const NewRiotAccountButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('link')}
      className="w-full md:max-w-[200px] bg-[#13151b] h-32 flex flex-col items-center justify-center rounded-[0.5rem] hover:outline hover:outline-2 outline-offset-2 hover:outline-neutral-400"
    >
      <span>Link new</span>
      <span>Riot Account</span>
      <Plus className="mt-2" />
    </button>
  );
};
