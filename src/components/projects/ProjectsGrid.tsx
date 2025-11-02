'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Tag, Clock } from 'lucide-react';

const ProjectsGrid: React.FC = () => {
    const completedProjects = [
        {
            id: 1,
            title: 'ecoPRISM Tool',
            slug: 'ecoprism',
            tagline: 'ESG Compliance Made Simple',
            description: 'Simplifying ESG compliance for global enterprises through strategic UI/UX design and user-centered innovation.',
            image: '/images/projects/ecoprism/ecoprism-landing-image.webp',
            year: '2024',
            tags: ['SaaS', 'Enterprise', 'Dashboard'],
            role: 'Foundation Designer',
            tools: ['Adobe XD', 'Miro', 'Notion']
        },
        {
            id: 2,
            title: 'Arreglio',
            slug: 'arreglio',
            tagline: 'Workshop Management System',
            description: 'Streamlining service bookings and customer management for automotive workshops with an intuitive mobile-first experience.',
            image: '/images/projects/arreglio/arreglio-landing-image.webp',
            year: '2024',
            tags: ['Mobile App', 'SaaS', 'B2B'],
            role: 'Senior Product Designer',
            tools: ['Figma', 'FigJam', 'Maze']
        }
    ];

    const inProgressProjects = [
        {
            id: 3,
            title: 'MockOraa',
            tagline: 'AI Mock Interview Platform',
            description: 'Creating fearless interview experiences through design. Built a platform that enables candidates to practice interviews anytime, receive instant AI-driven feedback, and grow their confidence before the real thing.',
            image: '/images/projects/AI-powered practice interviews designed for your role, your resume, and your industry..webp',
            year: '2024',
            tags: ['AI', 'EdTech', 'Hackathon'],
            role: 'Product Designer',
            tools: ['Figma', 'FigJam', 'Notion']
        },
        {
            id: 4,
            title: 'Suana',
            tagline: 'A Nest for Independent Learning',
            description: 'An accessible, gamified, multi-task app that guides children through daily activities with step-by-step visual, audio, and animated instructions, tailored to varying abilities, while minimizing caregiver intervention.',
            image: '/images/projects/ChatGPT Image Oct 2, 2025, 07_02_56 PM.webp',
            year: '2024',
            tags: ['Mobile App', 'Accessibility', 'Passion Project'],
            role: 'Product Designer',
            tools: ['Figma', 'Illustrator', 'Protopie']
        }
    ];

    return (
        <>
            {/* Completed Projects Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="container-custom px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:gap-16">
                            {completedProjects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className="group bg-white overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 rounded-[6px]"
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                        {/* Image */}
                                        <div className={`relative h-64 sm:h-80 md:h-96 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                            <div className="relative w-full h-full bg-gray-100">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className={`p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                            {/* Tags */}
                                            <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                                                {project.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="inline-flex items-center gap-1 bg-gray-100 px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-grotesk uppercase tracking-wider rounded-[6px]"
                                                    >
                                                        <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-grotesk font-bold text-black mb-2 sm:mb-3">
                                                {project.title}
                                            </h2>

                                            <p className="text-base sm:text-lg md:text-xl font-grotesk font-medium text-gray-700 mb-4 sm:mb-6">
                                                {project.tagline}
                                            </p>

                                            {/* Description */}
                                            <p className="text-sm sm:text-base md:text-lg font-inter text-gray-600 leading-relaxed mb-6 sm:mb-8">
                                                {project.description}
                                            </p>

                                            {/* Meta Info */}
                                            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-xs sm:text-sm font-inter text-gray-500">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                                    <span>{project.year}</span>
                                                </div>
                                                <div className="border-l border-gray-300 pl-4 sm:pl-6">
                                                    <span className="font-semibold text-black">{project.role}</span>
                                                </div>
                                            </div>

                                            {/* Tools */}
                                            <div className="mb-6 sm:mb-8">
                                                <p className="text-[10px] sm:text-xs font-grotesk uppercase tracking-wider text-gray-500 mb-1 sm:mb-2">
                                                    Tools Used
                                                </p>
                                                <div className="flex flex-wrap items-center gap-2">
                                                    {project.tools.map((tool, toolIndex) => (
                                                        <span
                                                            key={toolIndex}
                                                            className="text-xs sm:text-sm font-inter text-gray-700"
                                                        >
                                                            {tool}{toolIndex < project.tools.length - 1 ? ' •' : ''}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* CTA */}
                                            <Link
                                                href={`/projects/${project.slug}`}
                                                className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 sm:px-8 sm:py-4 font-grotesk font-semibold hover:bg-gray-800 transition-all group/btn w-full sm:w-fit rounded-[12px]"
                                            >
                                                <span className="text-sm sm:text-base">View Case Study</span>
                                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* In Progress Projects Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="container-custom px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-8 sm:mb-12 md:mb-16">
                            <div className="inline-block bg-gray-100 px-4 py-2 mb-4 sm:mb-6 rounded-full">
                                <span className="text-xs sm:text-sm font-grotesk font-medium uppercase tracking-wider flex items-center gap-2">
                                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                                    In Progress
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-4">
                                Works in Development
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 font-inter max-w-2xl mx-auto">
                                Passion projects and experimental work currently in the making
                            </p>
                        </div>

                        {/* Projects Grid - 2 Blocks */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            {inProgressProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="group bg-white border-2 border-dashed border-gray-300 hover:border-black overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 rounded-[6px]"
                                >
                                    {/* Image */}
                                    <div className="relative h-56 sm:h-64 md:h-72 bg-gray-100">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

                                        {/* In Progress Badge */}
                                        <div className="absolute top-4 right-4 bg-black text-white px-3 py-1.5 rounded-full flex items-center gap-2">
                                            <Clock className="w-3 h-3" />
                                            <span className="text-xs font-grotesk font-semibold uppercase tracking-wider">
                                                In Progress
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 sm:p-8">
                                        {/* Tags */}
                                        <div className="flex flex-wrap items-center gap-2 mb-3">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="inline-flex items-center gap-1 bg-gray-100 border border-gray-300 px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-grotesk uppercase tracking-wider rounded-[6px]"
                                                >
                                                    <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-grotesk font-bold text-black mb-2">
                                            {project.title}
                                        </h3>

                                        <p className="text-sm sm:text-base font-grotesk font-medium text-gray-700 mb-4">
                                            {project.tagline}
                                        </p>

                                        {/* Description */}
                                        <p className="text-sm sm:text-base font-inter text-gray-600 leading-relaxed mb-6">
                                            {project.description}
                                        </p>

                                        {/* Meta Info */}
                                        <div className="flex flex-wrap items-center gap-4 mb-6 text-xs sm:text-sm font-inter text-gray-500">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                                <span>{project.year}</span>
                                            </div>
                                            <div className="border-l border-gray-300 pl-4">
                                                <span className="font-semibold text-black">{project.role}</span>
                                            </div>
                                        </div>

                                        {/* Tools */}
                                        <div className="mb-6">
                                            <p className="text-[10px] sm:text-xs font-grotesk uppercase tracking-wider text-gray-500 mb-2">
                                                Tools Used
                                            </p>
                                            <div className="flex flex-wrap items-center gap-2">
                                                {project.tools.map((tool, toolIndex) => (
                                                    <span
                                                        key={toolIndex}
                                                        className="text-xs sm:text-sm font-inter text-gray-700"
                                                    >
                                                        {tool}{toolIndex < project.tools.length - 1 ? ' •' : ''}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <div className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-600 px-6 py-3 sm:px-8 sm:py-4 font-grotesk font-semibold w-full rounded-[12px] border-2 border-gray-300">
                                            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                                            <span className="text-sm sm:text-base">Case Study Coming Soon</span>
                                        </div>
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
