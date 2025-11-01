'use client';

import React, { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

const SkillsSection: React.FC = () => {
    const skillsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const tools = [
        { name: 'Figma', icon: 'simple-icons:figma' },
        { name: 'FigJam', icon: 'simple-icons:figma' },
        { name: 'Adobe XD', icon: 'simple-icons:adobexd' },
        { name: 'Notion', icon: 'simple-icons:notion' },
        { name: 'Miro', icon: 'simple-icons:miro' },
        { name: 'Maze', icon: 'simple-icons:maze' },
        { name: 'AI tools', icon: 'simple-icons:openai' }
    ];

    const uxSkills = [
        'User Research',
        'Wireframing',
        'Prototyping',
        'UI/Interaction Design',
        'Usability Testing',
        'Design Systems & Component Libraries',
        'Website Design',
        'UX Audits',
        'Information Architecture'
    ];

    return (
        <section className="py-16 sm:py-24 md:py-32 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div ref={skillsRef} className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 sm:mb-16 md:mb-20">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-grotesk font-bold text-black mb-4 sm:mb-6">
                            Skills & Tools
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 font-inter max-w-2xl mx-auto px-4">
                            The toolkit that brings ideas to life
                        </p>
                    </div>

                    {/* Tools Grid */}
                    <div className="mb-12 sm:mb-16 md:mb-20">
                        <h3 className="text-xl sm:text-2xl font-grotesk font-semibold text-black mb-6 sm:mb-8 text-center">
                            Design Tools
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
                            {tools.map((tool, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col items-center justify-center p-4 sm:p-6 shadow-card hover:bg-black hover:text-white transition-all duration-300 rounded-[6px]"
                                >
                                    <Icon
                                        icon={tool.icon}
                                        className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3"
                                    />
                                    <span className="text-xs sm:text-sm font-grotesk font-medium text-center">
                                        {tool.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* UX Skills */}
                    <div className="bg-gray-50 p-6 sm:p-8 md:p-12 rounded-[6px] shadow-card">
                        <h3 className="text-xl sm:text-2xl font-grotesk font-semibold text-black mb-6 sm:mb-8 text-center">
                            UX Capabilities
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {uxSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 border-2 border-black flex items-center justify-center group-hover:bg-black transition-colors flex-shrink-0">
                                        <span className="text-[10px] sm:text-xs font-grotesk font-bold group-hover:text-white">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <span className="text-sm sm:text-base font-inter text-gray-800 group-hover:font-semibold transition-all">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
