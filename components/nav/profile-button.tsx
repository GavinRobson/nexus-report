import { signOut } from 'next-auth/react';

import { auth } from '@/auth';

import { LoggedInButton } from '@/components/nav/logged-in-button';
import { SignInButton } from '@/components/nav/sign-in-button';

export const ProfileButton = async () => {
  const session = await auth();
  const handleLogout = () => {
    signOut();
  };

  console.log(session);

  return (
    <div className="flex items-center ml-auto px-5">
      <div className="pt-2">
        {session ? (
          <LoggedInButton username={session.user?.name} />
        ) : (
          <SignInButton />
        )}
      </div>
    </div>
  );
};
