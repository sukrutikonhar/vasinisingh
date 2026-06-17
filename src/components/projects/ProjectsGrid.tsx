'use client';

import { h2Section } from '@/lib/typography';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUp, ArrowDown, Clock } from 'lucide-react';
import ProjectEyebrow from '@/components/ui/ProjectEyebrow';
import { completedProjects, inProgressProjects } from '@/data/projects';

const ProjectsGrid: React.FC = () => {
    return (
        <>
            <section className="py-10 sm:py-14 bg-gray-50">
                <div className="container-custom px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col gap-4 sm:gap-5">
                            {completedProjects.map((project) => (
                                <Link
                                    key={project.id}
                                    href={`/projects/${project.slug}`}
                                    className="group flex flex-col sm:flex-row bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300"
                                >
                                    <div className="relative w-full sm:w-44 md:w-52 h-40 sm:h-auto sm:min-h-[140px] flex-shrink-0 bg-gray-100">
                                        <Image
                                            src={project.image}
                                            alt={project.hook}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                        {project.statusBadge && (
                                            <span className="absolute top-2 left-2 bg-black/75 text-white text-[9px] font-grotesk uppercase tracking-wider px-2 py-0.5 rounded">
                                                {project.statusBadge}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center min-w-0">
                                        <ProjectEyebrow
                                            label={project.eyebrow}
                                            caseNumber={project.caseNumber}
                                        />

                                        <h2 className="text-lg sm:text-xl font-grotesk font-bold text-black mt-1 mb-1.5 leading-tight group-hover:text-gray-800">
                                            {project.hook}
                                        </h2>

                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-inter text-gray-500 mb-3">
                                            <span>{project.tags[0]}</span>
                                            {project.tags[1] && (
                                                <>
                                                    <span className="text-gray-300">·</span>
                                                    <span>{project.tags[1]}</span>
                                                </>
                                            )}
                                            <span className="text-gray-300">·</span>
                                            <span>{project.year}</span>
                                        </div>

                                        {project.metrics.length > 0 && (
                                            <div className="flex flex-wrap gap-x-4 gap-y-1">
                                                {project.metrics.map((metric, metricIndex) => (
                                                    <div key={metricIndex} className="flex items-center gap-1">
                                                        {metric.direction === 'up' ? (
                                                            <ArrowUp className="w-3 h-3 text-gray-400 flex-shrink-0" />
                                                        ) : (
                                                            <ArrowDown className="w-3 h-3 text-gray-400 flex-shrink-0" />
                                                        )}
                                                        <span className="text-sm font-grotesk font-bold text-black">
                                                            {metric.value}
                                                        </span>
                                                        <span className="text-xs font-inter text-gray-500">
                                                            {metric.label}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="hidden sm:flex items-center pr-5 text-gray-300 group-hover:text-black transition-colors">
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 sm:py-14 bg-white">
                <div className="container-custom px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-1.5 bg-gray-100 px-3 py-1 mb-3 rounded-full">
                                <Clock className="w-3 h-3" />
                                <span className="text-[10px] sm:text-xs font-grotesk font-medium uppercase tracking-wider">
                                    In Progress
                                </span>
                            </div>
                            <h2 className={`${h2Section} mb-2`}>
                                Works in Development
                            </h2>
                            <p className="text-sm text-gray-600 font-inter">
                                Passion projects currently in the making
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {inProgressProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="bg-white border border-dashed border-gray-200 rounded-lg overflow-hidden"
                                >
                                    <div className="relative h-36 bg-gray-100">
                                        <Image
                                            src={project.image}
                                            alt={project.hook}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute top-2 right-2 bg-black text-white px-2 py-0.5 rounded-full flex items-center gap-1">
                                            <Clock className="w-2.5 h-2.5" />
                                            <span className="text-[9px] font-grotesk font-semibold uppercase tracking-wider">
                                                In Progress
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <h3 className="text-base font-grotesk font-bold text-black mb-1">
                                            {project.hook}
                                        </h3>
                                        <p className="text-xs font-inter text-gray-500">
                                            {project.tags.slice(0, 2).join(' · ')}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectsGrid;
