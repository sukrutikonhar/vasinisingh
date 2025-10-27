'use client';

import React, { useEffect, useRef } from 'react';
import { Figma, Palette, Box, Layers, Users, Code2 } from 'lucide-react';

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
        { name: 'Figma', icon: Figma },
        { name: 'Adobe XD', icon: Palette },
        { name: 'Sketch', icon: Box },
        { name: 'Notion', icon: Layers },
        { name: 'Webflow', icon: Code2 },
        { name: 'Miro', icon: Users }
    ];

    const uxSkills = [
        'User Research',
        'Wireframing',
        'Prototyping',
        'UI Design',
        'Interaction Design',
        'Usability Testing',
        'Design Systems',
        'Information Architecture'
    ];

    return (
        <section className="py-32 bg-white">
            <div className="container-custom">
                <div ref={skillsRef} className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <h2 className="text-5xl sm:text-6xl md:text-7xl font-grotesk font-bold text-black mb-6">
                            Skills & Tools
                        </h2>
                        <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
                            The toolkit that brings ideas to life
                        </p>
                    </div>

                    {/* Tools Grid */}
                    <div className="mb-20">
                        <h3 className="text-2xl font-grotesk font-semibold text-black mb-8 text-center">
                            Design Tools
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {tools.map((tool, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col items-center justify-center p-8 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                                >
                                    {React.createElement(tool.icon, {
                                        className: "w-12 h-12 mb-4 group-hover:scale-110 transition-transform"
                                    })}
                                    <span className="text-sm font-grotesk font-medium text-center">
                                        {tool.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* UX Skills */}
                    <div className="bg-gray-50 border-2 border-black p-12">
                        <h3 className="text-2xl font-grotesk font-semibold text-black mb-8 text-center">
                            UX Capabilities
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {uxSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="w-8 h-8 border-2 border-black flex items-center justify-center group-hover:bg-black transition-colors flex-shrink-0">
                                        <span className="text-xs font-grotesk font-bold group-hover:text-white">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <span className="text-base font-inter text-gray-800 group-hover:font-semibold transition-all">
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
