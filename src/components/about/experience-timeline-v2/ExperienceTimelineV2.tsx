'use client';

import React from 'react';
import { h2Page } from '@/lib/typography';
import { experienceCompanies } from '@/data/experience-timeline';
import CompanyList from './CompanyList';
import ExperienceDetails from './ExperienceDetails';

const initialProjectSelections = Object.fromEntries(
    experienceCompanies.map((c) => [c.id, c.projects[0].id]),
) as Record<string, string>;

const ExperienceTimelineV2: React.FC = () => {
    const [activeCompanyId, setActiveCompanyId] = React.useState(experienceCompanies[0].id);
    const [selectedProjects, setSelectedProjects] =
        React.useState<Record<string, string>>(initialProjectSelections);
    const [reduceMotion, setReduceMotion] = React.useState(false);
    const detailsRef = React.useRef<HTMLDivElement>(null);
    const shouldScrollToDetailsRef = React.useRef(false);

    React.useEffect(() => {
        if (typeof window === 'undefined') return;
        const media = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => setReduceMotion(media.matches);
        update();
        media.addEventListener?.('change', update);
        media.addListener?.(update);
        return () => {
            media.removeEventListener?.('change', update);
            media.removeListener?.(update);
        };
    }, []);

    React.useEffect(() => {
        if (!shouldScrollToDetailsRef.current) return;
        shouldScrollToDetailsRef.current = false;
        detailsRef.current?.scrollIntoView({
            behavior: reduceMotion ? 'auto' : 'smooth',
            block: 'start',
        });
    }, [activeCompanyId, reduceMotion]);

    const activeCompany =
        experienceCompanies.find((c) => c.id === activeCompanyId) ?? experienceCompanies[0];
    const selectedProjectId = selectedProjects[activeCompany.id] ?? activeCompany.projects[0].id;

    const handleSelectCompany = (id: string) => {
        if (id !== activeCompanyId) {
            shouldScrollToDetailsRef.current = true;
        }
        setActiveCompanyId(id);
    };

    const handleSelectProject = (projectId: string) => {
        setSelectedProjects((prev) => ({ ...prev, [activeCompany.id]: projectId }));
    };

    return (
        <section
            className="experience-timeline-v2 bg-[linear-gradient(180deg,_#f8f9fa_0%,_#ffffff_100%)] py-16 sm:py-24"
            aria-labelledby="experience-timeline-v2-heading"
        >
            <div className="container-custom px-4 sm:px-6">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
                        <div>
                            <div className="mb-4 font-inter text-xs uppercase tracking-[0.22em] text-gray-500 sm:text-sm">
                                EXPERIENCE
                            </div>
                            <h2
                                id="experience-timeline-v2-heading"
                                className={`${h2Page} text-black`}
                            >
                                A timeline of craft, leadership, and product thinking
                            </h2>
                        </div>
                        <p className="pt-2 font-inter text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                            Every role has added a new layer to how I work. I have grown from designing
                            clearer interfaces to shaping product direction, building systems, and creating
                            experiences that support both users and teams.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-[minmax(240px,280px)_1fr] lg:gap-10 xl:gap-14">
                        <div className="lg:sticky lg:top-24 lg:self-start">
                            <CompanyList
                                companies={experienceCompanies}
                                activeId={activeCompanyId}
                                onSelect={handleSelectCompany}
                                reduceMotion={reduceMotion}
                            />
                        </div>
                        <div ref={detailsRef} className="scroll-mt-24 lg:scroll-mt-28">
                            <ExperienceDetails
                                company={activeCompany}
                                selectedProjectId={selectedProjectId}
                                onSelectProject={handleSelectProject}
                                reduceMotion={reduceMotion}
                                contentKey={activeCompanyId}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimelineV2;
