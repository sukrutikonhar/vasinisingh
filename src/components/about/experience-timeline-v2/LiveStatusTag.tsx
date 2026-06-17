'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import {
    projectLiveStatusLabel,
    type ProjectLiveStatus,
} from '@/data/experience-timeline';

const statusStyles: Record<
    ProjectLiveStatus,
    { tag: string; dot: string }
> = {
    'live-product': {
        tag: 'border-emerald-200 bg-emerald-50 text-emerald-800',
        dot: 'bg-emerald-500',
    },
    'live-mvp': {
        tag: 'border-amber-200 bg-amber-50 text-amber-800',
        dot: 'bg-amber-500',
    },
};

type LiveStatusDotProps = {
    status: ProjectLiveStatus;
    className?: string;
    title?: string;
};

export const LiveStatusDot: React.FC<LiveStatusDotProps> = ({
    status,
    className,
    title,
}) => (
    <span
        className={cn('inline-block h-2 w-2 rounded-full', statusStyles[status].dot, className)}
        title={title ?? projectLiveStatusLabel[status]}
        aria-label={projectLiveStatusLabel[status]}
    />
);

type LiveStatusTagProps = {
    status: ProjectLiveStatus;
    size?: 'sm' | 'md';
    className?: string;
};

const LiveStatusTag: React.FC<LiveStatusTagProps> = ({
    status,
    size = 'md',
    className,
}) => {
    const styles = statusStyles[status];

    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full border font-grotesk font-semibold uppercase tracking-wide',
                size === 'sm' ? 'gap-1 px-1.5 py-0.5 text-[9px]' : 'gap-1.5 px-2.5 py-1 text-[10px]',
                styles.tag,
                className,
            )}
        >
            <span
                className={cn('rounded-full', size === 'sm' ? 'h-1.5 w-1.5' : 'h-2 w-2', styles.dot)}
                aria-hidden
            />
            {projectLiveStatusLabel[status]}
        </span>
    );
};

export default LiveStatusTag;
