import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Layers, Wrench } from 'lucide-react';
import Button from '../ui/Button';
import { typography } from '@/lib/typography';

const FeaturedWorkSection: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "ecoPRISM - ESG SaaS Platform",
            description: "Turning fragmented compliance data into a unified, actionable system with role-based dashboards and intelligent reporting.",
            image: "/images/projects/ecoprism/Landing page.webp",
            tech: ["React", "TypeScript", "Node.js"],
            icon: Layers,
            link: "/projects/ecoprism"
        },
        {
            id: 2,
            title: "Arreglio - SaaS Workshop Management",
            description: "Reimagining how workshops manage services, bookings, and customer journeys by bringing simplicity to everyday operations.",
            image: "/images/projects/Untitled design (3).webp",
            tech: ["Next.js", "Tailwind", "PostgreSQL"],
            icon: Wrench,
            link: "/projects/arreglio"
        }
    ];

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className={`${typography.h2.section} text-gray-900 mb-6`} style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>
                        Featured Work
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <Link
                            key={project.id}
                            href={project.link}
                            className={`bg-gray-50 rounded-2xl p-8 transition-all hover:shadow-lg cursor-pointer ${index % 2 === 1 ? 'lg:mt-8' : ''
                                }`}
                        >
                            <div className="space-y-6">
                                {/* Project Image */}
                                <div className="relative w-full h-48 rounded-xl overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>

                                {/* Project Info */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                                            {React.createElement(project.icon, { className: "w-5 h-5 text-white" })}
                                        </div>
                                        <h3 className="text-3xl font-bold text-gray-900">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/projects">
                        <Button size="lg" className="group">
                            <span className="flex items-center gap-2">
                                See All Projects
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedWorkSection;
