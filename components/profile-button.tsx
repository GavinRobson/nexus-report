import { auth, currentUser } from '@clerk/nextjs/server';
import { UserButton } from '@clerk/nextjs';

import { SignInButton } from '@/components/sign-in-button';

export const ProfileButton = () => {
  const { userId } = auth();

  return (
    <div className="flex items-center ml-auto px-5">
      {!userId ? 
        (
          <div className='pt-2'>
            <SignInButton />
          </div>
        )
        :
        (
          <div className='pt-2'>
            <UserButton />
          </div>
        )
      }
    </div>
  )
}