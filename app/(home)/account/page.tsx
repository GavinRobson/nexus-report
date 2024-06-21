import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Account() {
  const session = await auth();

  if (!session) {
    redirect('/auth');
  }

  return (
    <div>
      <div>Account Page</div>
    </div>
  );
}
