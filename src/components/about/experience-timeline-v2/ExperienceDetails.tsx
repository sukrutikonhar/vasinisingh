'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import type { ExperienceCompany } from '@/data/experience-timeline';
import { getProjectLiveStatus } from '@/data/experience-timeline';
import ProjectCard from './ProjectCard';
import LiveStatusTag from './LiveStatusTag';

type ExperienceDetailsProps = {
    company: ExperienceCompany;
    selectedProjectId: string;
    onSelectProject: (projectId: string) => void;
    reduceMotion: boolean;
    contentKey: string;
};

const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({
    company,
    selectedProjectId,
    onSelectProject,
    reduceMotion,
    contentKey,
}) => {
    const project =
        company.projects.find((p) => p.id === selectedProjectId) ?? company.projects[0];
    const useThreeColumnGrid = company.id === 'ac' || company.projects.length <= 4;
    const projectLiveStatus = getProjectLiveStatus(company.id, project.id);

    return (
        <article
            key={contentKey}
            className={cn(
                'rounded-2xl border border-black/10 bg-white p-5 shadow-card sm:p-7',
                !reduceMotion && 'fade-in',
            )}
        >
            <header className="border-b border-black/10 pb-5 sm:pb-6">
                <span className="inline-block rounded-full border border-black/10 bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-800">
                    {company.name}
                </span>
                <h3 className="mt-3 font-grotesk text-xl font-bold text-black sm:text-2xl">
                    {company.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-gray-600">
                    {company.period}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-[15px]">
                    {company.summary}
                </p>
            </header>

            <div className="mt-6">
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-gray-500">
                    Projects
                </p>
                <div
                    className={cn(
                        'grid grid-cols-1 gap-2 sm:grid-cols-2',
                        useThreeColumnGrid && 'md:grid-cols-3',
                    )}
                >
                    {company.projects.map((proj) => (
                        <ProjectCard
                            key={proj.id}
                            project={proj}
                            companyId={company.id}
                            isActive={proj.id === project.id}
                            onSelect={() => onSelectProject(proj.id)}
                            reduceMotion={reduceMotion}
                        />
                    ))}
                </div>
            </div>

            <div
                key={`${contentKey}-${project.id}`}
                className={cn(
                    'mt-6 border-t border-black/10 pt-6',
                    !reduceMotion && 'fade-in',
                )}
            >
                <div className="flex items-start justify-between gap-4">
                    <h4 className="font-grotesk text-base font-semibold text-black sm:text-lg min-w-0">
                        {project.name}
                        <span className="font-normal text-gray-500"> · {project.type}</span>
                    </h4>
                    {projectLiveStatus ? (
                        <LiveStatusTag status={projectLiveStatus} size="md" className="flex-shrink-0" />
                    ) : null}
                </div>
                {project.description ? (
                    <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-[15px]">
                        {project.description}
                    </p>
                ) : null}
                {project.chips.length > 0 ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.chips.map((chip) => (
                            <span
                                key={chip}
                                className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] text-gray-600 transition-colors duration-200 hover:border-gray-300 hover:text-gray-800"
                            >
                                {chip}
                            </span>
                        ))}
                    </div>
                ) : null}
            </div>
        </article>
    );
};

export default ExperienceDetails;
