import './globals.css';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import LenisWrapper from '@/components/LenisWrapper';

export const metadata: Metadata = {
  title: 'Crypto SaaS AI',
  description: 'AI-powered trading assistant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <SessionProvider>
          <LenisWrapper>{children}</LenisWrapper>
        </SessionProvider>
      </body>
    </html>
  );
}
