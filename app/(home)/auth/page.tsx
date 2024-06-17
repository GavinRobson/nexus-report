'use client';

import { Input } from '@/components/input';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react';

const Auth = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (session) {
    router.push('/account');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validSubmit, setValidSubmit] = useState(false);
  const [invalidSubmit, setInvalidSubmit] = useState('');

  const [variant, setVariant] = useState('login');

  useEffect(() => {
    email.includes('@') && password.length > 5
      ? setValidSubmit(true)
      : setValidSubmit(false);
    setInvalidSubmit('');
  }, [email, password]);

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login'
    );
  }, []);

  const login = useCallback(async () => {
    try {
      const user = await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/',
      });
      console.log(user);

      if (user?.error) {
        setInvalidSubmit('Invalid email or password');
      } else {
        setInvalidSubmit('');
        router.push('/account');
      }
    } catch (error: any) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        password,
      });

      login();
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        setInvalidSubmit('Email taken. Try again.');
      } else {
        console.log(error);
      }
    }
  }, [email, password, login]);

  return (
    <div className="flex justify-center mt-36">
      <div className="bg-[#0e1015] px-16 py-8 self-center mt-2 h-2/5 max-w-md rounded-md w-full">
        <h2 className="text-white text-2xl font-semibold justify-center mb-8 flex w-full">
          Welcome to Nexus
        </h2>
        <div className="flex flex-col gap-4">
          <Input
            label="Email"
            onChange={(ev: any) => setEmail(ev.target.value)}
            id="email"
            type="email"
            value={email}
          />
          <Input
            label="Password"
            onChange={(ev: any) => setPassword(ev.target.value)}
            id="password"
            type="password"
            value={password}
          />
        </div>
        <div className="flex items-center justify-center text-red-600 mt-2 -mb-8 transition">
          {invalidSubmit}
        </div>
        <button
          onClick={variant === 'login' ? login : register}
          disabled={!validSubmit}
          className={cn(
            'py-3 text-white rounded-lg w-full mt-10 transition',
            validSubmit
              ? 'bg-[#FF003D] border-none hover:bg-neutral-600'
              : 'bg-neutral-600'
          )}
        >
          {variant === 'login' ? 'Login' : 'Sign up'}
        </button>
        <p className="text-neutral-500 mt-12 flex justify-center">
          {variant === 'login' ? 'First time?' : 'Already have an account?'}
          <span
            onClick={toggleVariant}
            className="text-white ml-1 hover:underline cursor-pointer"
          >
            {variant === 'login' ? 'Create an account' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
