'use client';

import { Dropdown } from '@douyinfe/semi-ui';
import { Link } from 'next-intl';
import { usePathname } from 'next-intl/client';

import { languages } from '@/i18n';

import Icons from './Icons';

export default function LocaleSwitcher() {
  const pathname = usePathname();

  return (
    <Dropdown
      trigger="hover"
      render={
        <Dropdown.Menu>
          {Object.entries(languages).map(([lang, setting]) => (
            <Dropdown.Item key={lang}>
              <Link href={pathname ?? '/'} locale={lang}>
                {setting.flag}&nbsp;&nbsp;{setting.name}
              </Link>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      }
    >
      <div className="btn">
        <Icons.Languages className="h-5 w-5" />
      </div>
    </Dropdown>
  );
}
