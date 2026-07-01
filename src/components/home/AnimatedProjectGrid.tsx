'use client';

import { h2Page } from '@/lib/typography';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUp, ArrowDown } from 'lucide-react';
import ProjectEyebrow from '@/components/ui/ProjectEyebrow';
import { selectedWorkProjects } from '@/data/projects';

const homepageCaseNumbers = ['01', '02', '03'];

const AnimatedProjectGrid: React.FC = () => {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('slide-up');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (gridRef.current) {
            const items = gridRef.current.querySelectorAll('.project-item');
            items.forEach((item) => observer.observe(item));
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="mb-12 sm:mb-16 max-w-2xl">
                    <h2 className={`${h2Page} mb-4`}>
                        Selected Work
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 font-inter leading-relaxed">
                        Three projects where the design had to earn the user&apos;s trust before it earned their action.
                    </p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {selectedWorkProjects.map((project, index) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.slug}`}
                            className="project-item group block bg-white rounded-[6px] shadow-card overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="p-4 sm:p-6">
                                <ProjectEyebrow
                                    label={project.eyebrow}
                                    caseNumber={homepageCaseNumbers[index]}
                                />
                                <div className="flex items-start justify-between gap-2 mb-2">
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-xl sm:text-2xl font-grotesk font-bold text-[#202022] mb-2 leading-tight">
                                            {project.hook}
                                        </h3>
                                        <p className="text-sm sm:text-base font-inter text-gray-600 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-[#202022] flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>

                            <div className="relative w-full h-48 sm:h-64 md:h-72 overflow-hidden bg-gray-100">
                                <Image
                                    src={project.image}
                                    alt={project.hook}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            {project.metrics.length > 0 && (
                                <div className="p-4 sm:p-6 pt-4 border-t border-gray-200">
                                    <div className="flex justify-between gap-3">
                                        {project.metrics.map((metric, metricIndex) => (
                                            <div key={metricIndex} className="flex flex-col min-w-0">
                                                <div className="flex items-center gap-1.5 mb-1">
                                                    {metric.direction === 'up' ? (
                                                        <ArrowUp className="w-3.5 h-3.5 text-[#202022] flex-shrink-0" />
                                                    ) : (
                                                        <ArrowDown className="w-3.5 h-3.5 text-[#202022] flex-shrink-0" />
                                                    )}
                                                    <span className="text-sm sm:text-base font-grotesk font-bold text-[#202022] tabular-nums">
                                                        {metric.value}
                                                    </span>
                                                </div>
                                                <span className="text-[10px] sm:text-xs font-inter text-gray-600 leading-tight">
                                                    {metric.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-black font-grotesk font-medium hover:underline group"
                    >
                        <span className="mr-2">See all six projects</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AnimatedProjectGrid;
