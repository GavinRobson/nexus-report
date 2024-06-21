import { redirect } from 'next/navigation';
import { CircleUser } from 'lucide-react';

import { signOut } from '@/auth';
import { SettingsNav } from '@/components/nav/settings-nav';

type Props = {
  email: string | undefined | null;
};

export const LoggedInButton = ({ email }: Props) => {
  return (
    <div className="relative group cursor-pointer">
      <form
        action={async () => {
          'use server';

          await signOut({ redirectTo: '/auth/login', redirect: true });
        }}
      >
        <div className="text-gray-600 hover:text-gray-400 transition cursor-pointer peer">
          <CircleUser />
        </div>
        <div className="bg-[#13151b] hidden peer-hover:flex group-hover:flex absolute right-0 mt-2 shadow-lg rounded-md">
          <div className="absolute -top-[30px] -left-[30px] -right-[5px] -bottom-[30px] peer-hover:block group-hover:block z-10"></div>
          <div className="flex flex-col justify-center py-2 z-20">
            <div className="text-white">{email}</div>
            <hr className="my-2 border-t border-[#808080]" />
            <SettingsNav />
            <div className=" text-white/50 py-1 px-1 hover:text-white hover:bg-white/30 hover:outline hover:outline-1 cursor-pointer transition rounded-[0.25rem]">
              <button type="submit">Log Out</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
