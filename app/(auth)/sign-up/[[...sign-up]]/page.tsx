import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function Page() {
  return  (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col itesm-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#e45656]">
            Welcome Back!
          </h1>
          <p className="text-base text-neutral-500">
            Log in or create account
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignUp />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className='animate-spin text-muted-foreground'/>
          </ClerkLoading>
        </div>
      </div>
      <div className='h-full hidden bg-neutral-800 lg:flex items-center justify-center'>
        <Image draggable="false" src="/logo-word.png" alt="logo" height={150} width={150} />
      </div>
    </div>
  );
}