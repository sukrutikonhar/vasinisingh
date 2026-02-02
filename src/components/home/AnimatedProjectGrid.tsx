'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUp, ArrowDown } from 'lucide-react';

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

    const projects = [
        {
            id: 1,
            title: 'Designing Trust in a Sustainability Platform',
            subtitle: 'Helping users believe and act',
            image: '/images/projects/ecoprism/ecoprism-landing-image.webp',
            link: '/projects/ecoprism',
            metrics: [
                { value: '52%', label: 'user confidence score', direction: 'up' as const },
                { value: '29%', label: 'decision making speed', direction: 'up' as const }
            ]
        },
        {
            id: 2,
            title: 'Powering Local Service Ecosystems',
            subtitle: 'Connecting customers and workshops',
            image: '/images/projects/arreglio1/arreglio-landing.webp',
            link: '/projects/arreglio',
            metrics: [
                { value: '40%', label: 'manual coordination effort', direction: 'down' as const },
                { value: '65%', label: 'task completion rate', direction: 'up' as const }
            ]
        },
        {
            id: 3,
            title: 'Practice Interviews That Actually Feel Real',
            subtitle: 'and measurable',
            image: '/images/projects/mockoraa/mockoraa-01.webp',
            link: '/projects/mockoraa',
            metrics: [
                { value: '2.4x', label: 'session engagement', direction: 'up' as const },
                { value: '31%', label: 'hesitation pauses', direction: 'down' as const }
            ]
        }
    ];

    return (
        <section className="py-32 bg-white">
            <div className="container-custom">
                <div className="mb-20">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-grotesk font-bold text-black mb-6">
                        Selected Work
                    </h2>
                    <p className="text-lg text-gray-600 font-inter max-w-2xl">
                        Projects that demonstrate my approach to solving complex problems
                        through thoughtful design.
                    </p>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            href={project.link}
                            className="project-item group block bg-white rounded-[6px] shadow-card overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Top Section: Title, Description, Arrow */}
                            <div className="p-4 sm:p-6">
                                <div className="flex items-start justify-between gap-0 mb-2">
                                    <div className="flex-1">
                                        <h3 className="text-xl sm:text-2xl font-grotesk font-bold text-[#202022] mb-2 leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm sm:text-base font-inter text-gray-600 leading-relaxed">
                                            {project.subtitle}
                                        </p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#202022] flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>

                            {/* Middle Section: Image */}
                            <div className="relative w-full h-48 sm:h-64 md:h-80 overflow-hidden bg-gray-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            {/* Bottom Section: Metrics */}
                            {project.metrics && project.metrics.length > 0 && (
                                <div className="p-4 sm:p-6 pt-4 border-t border-gray-200">
                                    <div className="flex justify-between gap-4">
                                        {project.metrics.map((metric, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col"
                                            >
                                                <div className="flex items-center gap-2 mb-1">
                                                    {metric.direction === 'up' ? (
                                                        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#202022] flex-shrink-0" />
                                                    ) : (
                                                        <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#202022] flex-shrink-0" />
                                                    )}
                                                    <span className="text-base sm:text-lg font-grotesk font-bold text-[#202022]">
                                                        {metric.value}
                                                    </span>
                                                </div>
                                                <span className="text-xs sm:text-sm font-inter text-gray-600">
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

                <div className="mt-16 text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-black font-medium hover:underline group"
                    >
                        <span className="mr-2">View All Projects</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AnimatedProjectGrid;

