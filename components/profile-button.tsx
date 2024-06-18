'use client';

import { signOut, useSession } from 'next-auth/react';
import { CircleUser } from 'lucide-react';

import { SignInButton } from '@/components/sign-in-button';

export const ProfileButton = () => {
  const { data: session, status } = useSession();

  const handleLogout = () => {
    signOut();
  };

  return (
    <div className="flex items-center ml-auto px-5">
      <div className="pt-2">
        {session ? (
          <div className="relative group">
            <div className="text-gray-600 hover:text-gray-400 transition cursor-pointer peer">
              <CircleUser />
            </div>
            <div className="bg-[#13151b] hidden peer-hover:flex group-hover:flex absolute right-0 mt-2 shadow-lg rounded-md">
              <div className="absolute -top-[30px] -left-[30px] -right-[5px] -bottom-[30px] peer-hover:block group-hover:block z-10"></div>
              <div className="flex flex-col justify-center py-2 z-20">
                <div className="text-white">{session?.user?.email}</div>
                <hr className="my-2 border-t border-[#808080]" />
                <div className="text-white/50 py-1 px-1 hover:bg-white/30 hover:text-white hover:outline hover:outline-1 cursor-pointer transition rounded-[0.25rem]">
                  Settings
                </div>
                <div
                  onClick={handleLogout}
                  className=" text-white/50 py-1 px-1 hover:text-white hover:bg-white/30 hover:outline hover:outline-1 cursor-pointer transition rounded-[0.25rem]"
                >
                  Log Out
                </div>
              </div>
            </div>
          </div>
        ) : (
          <SignInButton />
        )}
      </div>
    </div>
  );
};
