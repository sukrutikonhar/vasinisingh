import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const OtherProjectsSection: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "MockOraa - AI Mock Interview Platform",
            subtitle: "(Hackathon Project)",
            description: "Creating fearless interview experiences through design. Built a platform that enables candidates to practice interviews anytime, receive instant AI-driven feedback, and grow their confidence before the real thing.",
            image: "/images/projects/AI-powered practice interviews designed for your role, your resume, and your industry..webp",
            buttonText: "In progress"
        },
        {
            id: 2,
            title: "Suana - A Nest for Independent Learning",
            subtitle: "(Passion Project)",
            description: "An accessible, gamified, multi-task app that guides children through daily activities with step-by-step visual, audio, and animated instructions, tailored to varying abilities, while minimizing caregiver intervention.",
            image: "/images/projects/ChatGPT Image Oct 2, 2025, 07_02_56 PM.webp",
            buttonText: "In progress"
        }
    ];

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        Other Projects
                    </h2>
                </div>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                            }`}>
                            {/* Content */}
                            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-4">
                                        {project.subtitle}
                                    </p>
                                </div>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {project.description}
                                </p>

                                <div>
                                    <Button size="lg" variant="secondary" className="group">
                                        <span className="flex items-center gap-2">
                                            {project.buttonText}
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        </span>
                                    </Button>
                                </div>
                            </div>

                            {/* Image */}
                            <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div className="relative w-full max-w-lg h-64 rounded-2xl overflow-hidden">
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

export default OtherProjectsSection;
