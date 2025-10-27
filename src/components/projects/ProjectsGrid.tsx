'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const ProjectsGrid: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: 'EcoPRISM',
            slug: 'ecoprism',
            tagline: 'ESG Compliance Platform',
            description: 'Transforming complex ESG compliance data into intuitive dashboards for enterprise sustainability teams.',
            image: '/images/ecoprism/Landing page.webp',
            year: '2024',
            tags: ['SaaS', 'Enterprise', 'Dashboard'],
            role: 'Lead Product Designer',
            tools: ['Figma', 'Miro', 'Notion']
        },
        {
            id: 2,
            title: 'Arreglio',
            slug: 'arreglio',
            tagline: 'Workshop Management System',
            description: 'Streamlining service bookings and customer management for automotive workshops with an intuitive mobile-first experience.',
            image: '/images/projects/Untitled design (3).webp',
            year: '2024',
            tags: ['Mobile App', 'SaaS', 'B2B'],
            role: 'Product Designer',
            tools: ['Figma', 'Protopie', 'Maze']
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 gap-16">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="group bg-white border-2 border-black overflow-hidden hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                    {/* Image */}
                                    <div className={`relative h-96 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
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
                                    <div className={`p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                        {/* Tags */}
                                        <div className="flex items-center gap-2 mb-4">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="inline-flex items-center gap-1 border border-black px-3 py-1 text-xs font-grotesk uppercase tracking-wider"
                                                >
                                                    <Tag className="w-3 h-3" />
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-4xl sm:text-5xl font-grotesk font-bold text-black mb-3">
                                            {project.title}
                                        </h2>

                                        <p className="text-xl font-grotesk font-medium text-gray-700 mb-6">
                                            {project.tagline}
                                        </p>

                                        {/* Description */}
                                        <p className="text-lg font-inter text-gray-600 leading-relaxed mb-8">
                                            {project.description}
                                        </p>

                                        {/* Meta Info */}
                                        <div className="flex items-center gap-6 mb-8 text-sm font-inter text-gray-500">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                <span>{project.year}</span>
                                            </div>
                                            <div className="border-l border-gray-300 pl-6">
                                                <span className="font-semibold text-black">{project.role}</span>
                                            </div>
                                        </div>

                                        {/* Tools */}
                                        <div className="mb-8">
                                            <p className="text-xs font-grotesk uppercase tracking-wider text-gray-500 mb-2">
                                                Tools Used
                                            </p>
                                            <div className="flex items-center gap-2">
                                                {project.tools.map((tool, toolIndex) => (
                                                    <span
                                                        key={toolIndex}
                                                        className="text-sm font-inter text-gray-700"
                                                    >
                                                        {tool}{toolIndex < project.tools.length - 1 ? ' •' : ''}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-grotesk font-semibold hover:bg-gray-800 transition-all group/btn w-fit"
                                        >
                                            <span>View Case Study</span>
                                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsGrid;

