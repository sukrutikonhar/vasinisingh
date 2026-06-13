'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import type { ExperienceProject } from '@/data/experience-timeline';

type ProjectCardProps = {
    project: ExperienceProject;
    isActive: boolean;
    onSelect: () => void;
    reduceMotion: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
    project,
    isActive,
    onSelect,
    reduceMotion,
}) => {
    return (
        <button
            type="button"
            onClick={onSelect}
            className={cn(
                'group w-full rounded-xl border px-3.5 py-2.5 text-left',
                'bg-[#f5f5f3] transition-[border-color,box-shadow,transform,background-color] duration-300 ease-out',
                !reduceMotion && 'hover:scale-[1.02] hover:bg-gray-100',
                isActive
                    ? 'border-[1.5px] border-black bg-white shadow-[0_0_24px_-8px_rgba(0,0,0,0.15)]'
                    : 'border-black/10 hover:border-black/20',
            )}
            aria-pressed={isActive}
        >
            <div className="text-[13px] font-medium text-black transition-colors group-hover:text-black">
                {project.name}
            </div>
            <div className="mt-0.5 text-[11px] leading-snug text-gray-500">{project.type}</div>
        </button>
    );
};

export default ProjectCard;
