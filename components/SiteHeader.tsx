'use client';

import Link from 'next/link';

import { useTranslations } from 'next-intl';

import useScroll from '@/hooks/use-scroll';

import Icons from './Icons';
import LocaleSwitcher from './LocaleSwitcher';
import ThemeToggle from './ThemeToggle';

export default function SiteHeader() {
  const t = useTranslations('header');

  const scroll = useScroll(
    (typeof window === 'object' ? document : undefined) as any,
  );

  const classNames1 =
    'bg-white/60 sticky top-0 z-[1031] w-full flex-none backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent lg:border-b lg:border-slate-900/10';
  const classNames2 =
    'bg-white/95 sticky top-0 z-[1031] w-full flex-none backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-slate-900/75 lg:border-b lg:border-slate-900/10';

  return (
    <header className={!!scroll && scroll.top > 60 ? classNames2 : classNames1}>
      <div className="container mx-auto flex h-16 items-center justify-center space-x-4 sm:justify-between sm:space-x-0">
        <Link
          className="cursor-pointer justify-start"
          title={t('gohome')}
          href="/"
        >
          <Icons.logo className="h-10 w-10" />
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={
                'https://github.com/hongfaqiu/nextjs13-with-semiUI-tailwindcss'
              }
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <Icons.Github className="h-5 w-5" />
            </Link>
            <LocaleSwitcher />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
