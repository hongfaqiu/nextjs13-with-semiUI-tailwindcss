import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getLocale, getTranslations } from 'next-intl/server';

import LocaleProvider from '@/components/LocaleProvider';
import SiteHeader from '@/components/SiteHeader';
import ThemeProvider from '@/components/ThemeProvider';
import '@/styles/globals.scss';

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: Record<string, any>;
}) {
  let messages;
  try {
    messages = (await import(`@/locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <LocaleProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <SiteHeader />
            <main>{children}</main>
            {/* <div className='bg-gradient-to-b from-[#e8bb92] to-white h-screen w-screen z-[-1] absolute top-0'></div> */}
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('site');
  const locale = getLocale();
  const title = t('title');
  const description = t('desc');

  return {
    title,
    description,
    icons: {
      icon: '/favicon.ico',
    },
    openGraph: {
      title,
      description,
      url: 'https://nextjs.org',
      siteName: title,
      images: [
        {
          url: 'https://nextjs.org/og.png',
          width: 800,
          height: 600,
        },
        {
          url: 'https://nextjs.org/og-alt.png',
          width: 1800,
          height: 1600,
          alt: 'My custom alt',
        },
      ],
      locale,
      type: 'website',
    },
  };
}
