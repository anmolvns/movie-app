'use client';

import Navbar from '@/components/Navbar';
import store from '@/store';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <Navbar />
          <div className="container mx-auto">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
