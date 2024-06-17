'use client';

type Props = {
  children: React.ReactNode;
};

import { SessionProvider } from 'next-auth/react';

export const AuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};
