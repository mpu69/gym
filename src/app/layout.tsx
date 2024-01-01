import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '3 clicks workout app',
  description: 'very cool',
};

import Nav from '@/components/nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className='absolute inset-0 overflow-hidden bg-bg text-text'
      lang='en'
    >
      <body className={inter.className}>
        {children}
        <Nav />
      </body>
    </html>
  );
}
