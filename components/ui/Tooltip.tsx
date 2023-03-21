'use client';

import React from 'react';

import { Tooltip as SemiTooltip } from '@douyinfe/semi-ui';
import { Position } from '@douyinfe/semi-ui/lib/es/tooltip';

import { useToggle } from '@/hooks/use-toggle';

interface TooltipProps {
	content: React.ReactNode;
	hideOnClick?: boolean;
	position?: Position;
	children?: React.ReactNode;
}

export default function Tooltip({
	content,
	hideOnClick = false,
	position = 'top',
	children,
}: TooltipProps) {
	const [visible, toggleVisible] = useToggle(false);

	return (
		<SemiTooltip
			visible={visible}
			content={content}
			zIndex={10000}
			trigger={'custom'}
			position={position}
		>
			<span
				onMouseEnter={() => {
					toggleVisible(true);
				}}
				onMouseLeave={() => {
					toggleVisible(false);
				}}
				onMouseDown={() => {
					hideOnClick && toggleVisible(false);
				}}
			>
				{children}
			</span>
		</SemiTooltip>
	);
}
