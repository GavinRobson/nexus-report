'use client';

import { useSession } from 'next-auth/react';

import { SignInButton } from '@/components/sign-in-button';
import { Button } from '@/components/ui/button';
import { CircleUser } from 'lucide-react';

export const ProfileButton = () => {
  const { data: session, status } = useSession();

  return (
    <div className="flex items-center ml-auto px-5">
      <div className="pt-2">
        {session ? (
          <div>
            <button className="bg-[#272a30] rounded-full">
              <CircleUser className="text-gray-600 hover:text-gray-400 transition" />
            </button>
          </div>
        ) : (
          <SignInButton />
        )}
      </div>
    </div>
  );
};
