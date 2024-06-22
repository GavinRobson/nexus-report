import * as z from 'zod';

const validRegions = [
  'NA', 'EUW', 'EUNE', 'KR', 'OCE', 'LAN', 'LAS', 'BR', 'JP', 'RU', 'TR', 'PBE', // Added 'PBE' as it's also a known region for testing
];

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: 'Password too short',
  }),
  username: z.string().min(1, {
    message: 'Minimum 1 character required',
  }),
});

export const RiotAccountSchema = z.object({
  username: z.string().min(1, {
    message: 'Minimum 1 character required',
  }),
  tag: z.string().min(1, {
    message: 'Minimum 1 character required',
  }),
  region: z.string()
    .transform(value => value.toUpperCase())
    .refine(value => validRegions.includes(value), {
      message: 'Region must be one of NA, EUW, EUNE, KR, OCE, LAN, LAS, BR, JP, RU, TR, PBE',
    }),
});

