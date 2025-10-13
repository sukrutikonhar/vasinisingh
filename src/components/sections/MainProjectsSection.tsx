import React from 'react';
import Button from '../ui/Button';

const MainProjectsSection: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "Ecoprism - ESG SaaS Platform",
            description: "Turning fragmented compliance data into a unified and actionable system with role-based dashboards and intelligent reporting.",
            image: "ecoprism",
            buttonText: "View Project"
        },
        {
            id: 2,
            title: "Arreglio - Simplifying Workshop Management",
            description: "Reimagining how workshops manage services, bookings, and customer journeys by bringing simplicity to everyday operations.",
            image: "arreglio",
            buttonText: "View Details"
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
                                    <Button size="lg">
                                        {project.buttonText}
                                    </Button>
                                </div>
                            </div>

                            {/* Image */}
                            <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div className="relative w-full max-w-lg">
                                    {project.image === 'ecoprism' ? (
                                        // Ecoprism mockup
                                        <div className="relative w-full h-80 bg-teal-600 rounded-2xl p-8 shadow-xl">
                                            <div className="absolute top-6 left-6 text-white text-sm font-bold">
                                                ECOPRISM
                                            </div>
                                            <div className="text-center text-white h-full flex flex-col justify-center">
                                                <h3 className="text-2xl font-bold mb-8">Sustainability Simplified</h3>
                                                <div className="flex items-center justify-center space-x-6">
                                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                                        <div className="w-12 h-12 bg-yellow-400 rounded-full"></div>
                                                    </div>
                                                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                                                        <div className="w-8 h-8 bg-white rounded-full"></div>
                                                    </div>
                                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                                        <div className="w-12 h-12 bg-yellow-400 rounded-full"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        // Arreglio mockup
                                        <div className="relative w-full h-80 bg-white border-2 border-gray-200 rounded-2xl shadow-xl overflow-hidden">
                                            <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                                                <div className="text-center text-gray-600">
                                                    <div className="w-20 h-20 bg-gray-400 rounded-xl mx-auto mb-6 flex items-center justify-center">
                                                        <span className="text-white text-2xl">📱</span>
                                                    </div>
                                                    <p className="text-lg font-medium">Dashboard Interface</p>
                                                    <div className="w-24 h-2 bg-gray-300 rounded-full mx-auto mt-4"></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
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
