import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './home/(presentation)/(components)/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CMLABS Practical Test',
  description: 'Project for practical test',
  authors: [{ name: 'Thoba Zainul B' }, { url: 'https://cmlabs-frontend-internship-test-rust.vercel.app' }],
  icons: {
    icon: '/logo.png',
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed w-full z-50">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
