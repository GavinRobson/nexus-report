'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Session } from 'next-auth';
import { useRouter } from 'next/navigation';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

import { linkRiotAccount } from '@/actions/linkRiotAccount';

import { RiotAccountSchema } from '@/schemas';
type Props = {
  session: Session;
};

export const LinkRiotAccount = ({ session }: Props) => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const form = useForm<z.infer<typeof RiotAccountSchema>>({
    resolver: zodResolver(RiotAccountSchema),
    mode: 'onTouched',
    defaultValues: {
      username: '',
      tag: '',
      region: '',
    },
  });

  const onSubmit = (values: z.infer<typeof RiotAccountSchema>) => {
    setError('');
    setSuccess('');
    startTransition(() => {
      linkRiotAccount(values, session.user?.id).then((data) => {
        setError(data?.error);
        if (!data?.error) {
          router.push('/settings');
        }
      });
    });
  };

  return (
    <div className="flex justify-center mt-36">
      <div className="bg-[#0e1015] px-16 py-8 self-center mt-2 h-2/5 max-w-md rounded-md w-full">
        <h2 className="text-white text-2xl font-semibold justify-center mb-8 flex w-full">
          Link a Riot Account
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <input
                          {...field}
                          autoComplete="off"
                          className={cn(
                            'block rounded-md px-6 pt-6 pb-1 w-full text-md text-white focus:outline-none focus:ring-0 peer outline-t',
                            form.getFieldState('username').error
                              ? 'bg-[#FF003D]/15 outline outline-1 outline-red-800'
                              : 'bg-neutral-800'
                          )}
                          disabled={isPending}
                          placeholder=" "
                        />
                        <label className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                          Username
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-800" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tag"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <input
                          {...field}
                          autoComplete="off"
                          className={cn(
                            'block rounded-md px-6 pt-6 pb-1 w-full text-md text-white focus:outline-none focus:ring-0 peer outline-t',
                            form.getFieldState('tag').error
                              ? 'bg-[#FF003D]/15 outline outline-1 outline-red-800'
                              : 'bg-neutral-800'
                          )}
                          disabled={isPending}
                          placeholder=" "
                        />
                        <label className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                          Tag
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-800" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="region"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <input
                          {...field}
                          autoComplete="off"
                          className={cn(
                            'block rounded-md px-6 pt-6 pb-1 w-full text-md text-white focus:outline-none focus:ring-0 peer outline-t',
                            form.getFieldState('region').error
                              ? 'bg-[#FF003D]/15 outline outline-1 outline-red-800'
                              : 'bg-neutral-800'
                          )}
                          disabled={isPending}
                          placeholder=" "
                        />
                        <label className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                          Region
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-800" />
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button disabled={isPending} type="submit" className="w-full">
              Link Account
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
