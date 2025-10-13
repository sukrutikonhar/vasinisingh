import React from 'react';
import { ArrowRight, Layers, Wrench } from 'lucide-react';
import Button from '../ui/Button';

const FeaturedWorkSection: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "Ecoprism - ESG SaaS Platform",
            description: "Turning fragmented compliance data into a unified, actionable system with role-based dashboards and intelligent reporting.",
            image: "/api/placeholder/400/300",
            tech: ["React", "TypeScript", "Node.js"],
            icon: Layers
        },
        {
            id: 2,
            title: "Arreglio - SaaS Workshop Management",
            description: "Reimagining how workshops manage services, bookings, and customer journeys by bringing simplicity to everyday operations.",
            image: "/api/placeholder/400/300",
            tech: ["Next.js", "Tailwind", "PostgreSQL"],
            icon: Wrench
        }
    ];

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        Featured Work
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow ${index % 2 === 1 ? 'lg:mt-8' : ''
                                }`}
                        >
                            <div className="space-y-6">
                                {/* Project Image */}
                                <div className="relative w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden">
                                    {index === 0 ? (
                                        // Ecoprism mockup
                                        <div className="w-full h-full bg-teal-600 flex items-center justify-center relative">
                                            <div className="absolute top-4 left-4 text-white text-sm font-bold">
                                                ECOPRISM
                                            </div>
                                            <div className="text-center text-white">
                                                <h3 className="text-xl font-bold mb-4">Sustainability Simplified</h3>
                                                <div className="flex items-center justify-center space-x-4">
                                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                                        <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                                                    </div>
                                                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                                                        <div className="w-6 h-6 bg-white rounded-full"></div>
                                                    </div>
                                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                                        <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        // Arreglio mockup
                                        <div className="w-full h-full bg-white border border-gray-200 flex items-center justify-center">
                                            <div className="w-3/4 h-3/4 bg-gray-100 rounded-lg border-2 border-gray-300 flex items-center justify-center">
                                                <div className="text-center text-gray-600">
                                                    <div className="w-16 h-16 bg-gray-400 rounded-lg mx-auto mb-4"></div>
                                                    <p className="text-sm font-medium">Dashboard Interface</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Project Info */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                                            {React.createElement(project.icon, { className: "w-5 h-5 text-white" })}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button size="lg" className="group">
                        <span className="flex items-center gap-2">
                            See All Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedWorkSection;
