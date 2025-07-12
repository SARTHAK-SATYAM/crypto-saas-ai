'use client';

import AuthButton from '@/components/AuthButton';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [status, router]);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <AuthButton />
        <h1 className="text-4xl font-bold mt-8">
          Welcome to Crypto SaaS AI
        </h1>
        <p className="text-lg mt-2 text-zinc-400">
          Sign in to access your crypto trading assistant dashboard.
        </p>
      </section>
    </main>
  );
}
