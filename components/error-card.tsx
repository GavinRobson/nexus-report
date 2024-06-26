'use client';

import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

export const ErrorCard = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full items-center justify-center mt-6 space-y-6">
      <span>Something went wrong!</span>
      <Button onClick={() => router.push('/auth/login')}>Go Back</Button>
    </div>
  );
};
