'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

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
            title: 'Enterprise Dashboard',
            category: 'SaaS Platform',
            year: '2024',
            image: '/images/projects/ecoprism/Landing page.webp',
            link: '/projects/ecoprism'
        },
        {
            id: 2,
            title: 'Workshop Management',
            category: 'Mobile App',
            year: '2024',
            image: '/images/projects/Untitled design (3).webp',
            link: '/projects/arreglio'
        },
        {
            id: 3,
            title: 'Design System',
            category: 'Component Library',
            year: '2023',
            image: '/images/s_cover.svg',
            link: '/'
        },
        {
            id: 4,
            title: 'Analytics Tool',
            category: 'Data Visualization',
            year: '2023',
            image: '/images/projects/ecoprism/Landing page.webp',
            link: '/'
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

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            href={project.link}
                            className="project-item group block"
                        >
                            <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-gray-100 border-2 border-black">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
                                    <div className="transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                                        <p className="text-white/80 text-xs sm:text-sm mb-2">{project.category} • {project.year}</p>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-grotesk font-bold text-white mb-2 sm:mb-4">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center text-white/90 group-hover:translate-x-2 transition-transform duration-300">
                                            <span className="text-xs sm:text-sm font-medium mr-2">View Project</span>
                                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
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

