import localfont from 'next/font/local';
import { Suspense } from 'react';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Storiette App',
  description:
    'Challenge your closest friends are the art of suspenseful storiette writing',
};

const customFont = localfont({
  src: [
    {
      path: '../public/PTSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/PTSans-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/PTSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/PTSans-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-pt',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${customFont.variable} font-sans`}>
        <Suspense fallback={null}>
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
