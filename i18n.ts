import { Locale } from '@douyinfe/semi-ui/lib/es/locale/interface';
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US';
import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN';
import { getRequestConfig } from 'next-intl/server';

export const defaultLocale = 'zh-CN';

export const languages: {
  [key: string]: {
    name: string;
    flag: string;
    unicode: string;
    semi: Locale;
  };
} = {
  'zh-CN': {
    name: '简体中文',
    flag: '🇨🇳',
    unicode: '1f1e8-1f1f3',
    semi: zh_CN,
  },
  'en-US': { name: 'English', flag: '🇺🇸', unicode: '1f1fa-1f1f8', semi: en_US },
};

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./locales/${locale}.json`)).default,
}));
