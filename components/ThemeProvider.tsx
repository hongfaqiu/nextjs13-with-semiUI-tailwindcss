'use client';

import { PropsWithChildren, useEffect } from 'react';

import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

import '@douyinfe/semi-ui/dist/css/semi.min.css';

function syncSystemTheme() {
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  function matchMode(e: MediaQueryList) {
    if (e.matches) {
      document.body.setAttribute('theme-mode', 'dark');
    } else {
      document.body.setAttribute('theme-mode', 'light');
    }
  }
  matchMode(mql);
}

function SemiThemeWrapper({ children }: PropsWithChildren) {
  const { theme } = useTheme();

  useEffect(() => {
    const body = document.body;

    switch (theme) {
      case 'light':
        body.setAttribute('theme-mode', 'light');
        return;

      case 'dark':
        body.setAttribute('theme-mode', 'dark');
        return;

      case 'system':
      default:
        syncSystemTheme();
        return;
    }
  }, [theme]);

  return <>{children}</>;
}

export default function ThemeProvider({
  children,
}: PropsWithChildren<ThemeProviderProps>) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SemiThemeWrapper>{children}</SemiThemeWrapper>
    </NextThemeProvider>
  );
}
