import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';

export const metadata = {
  title: 'Author Site',
  description: 'Personal website for writing and podcasts',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteHeader />
          <main className="min-h-screen p-4 max-w-4xl mx-auto">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
