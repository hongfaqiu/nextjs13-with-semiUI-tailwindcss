'use client';

import React from 'react';

import { Dropdown } from '@douyinfe/semi-ui';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

import Icons from './Icons';

export default function ThemeToggle() {
	const { setTheme, theme } = useTheme();
	const t = useTranslations('theme');

	const items = [
		{
			key: 'light',
			label: (
				<div className="flex items-center">
					<Icons.SunMedium className="mr-2 h-5 w-5 text-orange-500" />
					<span>{t('light')}</span>
				</div>
			),
		},
		{
			key: 'dark',
			label: (
				<div className="flex items-center">
					<Icons.Moon className="mr-2 h-5 w-5 text-blue-500" />
					<span>{t('dark')}</span>
				</div>
			),
		},
		{
			key: 'system',
			label: (
				<div className="flex items-center">
					<Icons.Laptop className="stroke-1.5 mr-2 h-5 w-5" />
					<span>{t('system')}</span>
				</div>
			),
		},
	];

	return (
		<Dropdown
			position="bottom"
			trigger="click"
			showTick
			render={
				<Dropdown.Menu>
					{items.map((item) => (
						<Dropdown.Item
							key={item.key}
							active={theme === item.key}
							onClick={() => setTheme(item.key)}
						>
							{item.label}
						</Dropdown.Item>
					))}
				</Dropdown.Menu>
			}
		>
			<div className="btn">
				<Icons.SunMedium className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-orange-500" />
				<Icons.Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-500" />
			</div>
		</Dropdown>
	);
}
