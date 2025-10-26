import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const MainProjectsSection: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "ecoPRISM - ESG SaaS Platform",
            description: "Turning fragmented compliance data into a unified and actionable system with role-based dashboards and intelligent reporting.",
            image: "/images/ecoprism/Landing page.webp",
            buttonText: "View Project",
            href: "/projects/ecoprism"
        },
        {
            id: 2,
            title: "Arreglio - Simplifying Workshop Management",
            description: "Reimagining how workshops manage services, bookings, and customer journeys by bringing simplicity to everyday operations.",
            image: "/images/projects/Untitled design (3).webp",
            buttonText: "View Details",
            href: "/projects/arreglio"
        }
    ];

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                            }`}>
                            {/* Content */}
                            <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                                    {project.title}
                                </h2>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {project.description}
                                </p>

                                <div>
                                    <Link href={project.href}>
                                        <Button size="lg" className="group">
                                            <span className="flex items-center gap-2">
                                                {project.buttonText}
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                            </span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Image */}
                            <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div className="relative w-full max-w-lg h-80 rounded-2xl overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainProjectsSection;
