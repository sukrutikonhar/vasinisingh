import React from 'react';
import Button from '../ui/Button';

const OtherProjectsSection: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "MockOraa - AI Mock Interview Platform",
            subtitle: "(Hackathon Project)",
            description: "Creating fearless interview experiences through design. Built a platform that enables candidates to practice interviews anytime, receive instant AI-driven feedback, and grow their confidence before the real thing.",
            buttonText: "In progress"
        },
        {
            id: 2,
            title: "Suana - A Nest for Independent Learning",
            subtitle: "(Passion Project)",
            description: "An accessible, gamified, multi-task app that guides children through daily activities with step-by-step visual, audio, and animated instructions, tailored to varying abilities, while minimizing caregiver intervention.",
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
                                    <Button size="lg" variant="secondary">
                                        {project.buttonText}
                                    </Button>
                                </div>
                            </div>

                            {/* Image */}
                            <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div className="relative w-full max-w-lg">
                                    {project.title.includes('MockOraa') ? (
                                        // MockOraa mockup - two phones
                                        <div className="flex space-x-4">
                                            <div className="w-32 h-64 bg-gray-800 rounded-2xl p-2 shadow-xl">
                                                <div className="w-full h-full bg-white rounded-xl p-4 flex flex-col items-center justify-center">
                                                    <div className="w-12 h-12 bg-blue-500 rounded-full mb-4 flex items-center justify-center">
                                                        <span className="text-white text-xs font-bold">MO</span>
                                                    </div>
                                                    <p className="text-xs font-bold text-gray-900 mb-2">MockOraa</p>
                                                    <Button size="sm" className="text-xs px-3 py-1">Let&apos;s go</Button>
                                                </div>
                                            </div>
                                            <div className="w-32 h-64 bg-gray-800 rounded-2xl p-2 shadow-xl">
                                                <div className="w-full h-full bg-white rounded-xl p-4 flex flex-col">
                                                    <h4 className="text-xs font-bold mb-2">Your Strengths</h4>
                                                    <div className="space-y-2">
                                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                            <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                                            <div className="bg-blue-500 h-2 rounded-full w-1/2"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        // Suana placeholder
                                        <div className="relative w-full h-64 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-xl flex items-center justify-center">
                                            <div className="text-center text-gray-600">
                                                <div className="w-16 h-16 bg-purple-400 rounded-xl mx-auto mb-4 flex items-center justify-center">
                                                    <span className="text-white text-2xl">🎮</span>
                                                </div>
                                                <p className="text-sm font-medium">Learning App</p>
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

export default OtherProjectsSection;
