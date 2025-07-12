import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local'; // Import localFont
import './globals.css';

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'My Stories',
  description: 'A collection of parallax stories',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Add the font variable to the body's className */}
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        <main>{children}</main>
      </body>
    </html>
  );
}