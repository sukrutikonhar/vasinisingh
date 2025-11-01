'use client';

import React from 'react';
import { Icon } from '@iconify/react';

const SkillsTools: React.FC = () => {
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
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-12 sm:mb-16 text-center">
                        Skills & Tools
                    </h2>

                    {/* Tools */}
                    <div className="mb-12 sm:mb-16">
                        <h3 className="text-xl sm:text-2xl font-grotesk font-semibold text-black mb-6 sm:mb-8">
                            Tools I Use
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
                    <div>
                        <h3 className="text-xl sm:text-2xl font-grotesk font-semibold text-black mb-6 sm:mb-8">
                            UX Capabilities
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                            {uxSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 sm:gap-3 bg-gray-50 border-2 border-black p-3 sm:p-4 hover:bg-black hover:text-white transition-all group"
                                >
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black group-hover:bg-white flex items-center justify-center flex-shrink-0">
                                        <span className="text-[10px] sm:text-xs font-grotesk font-bold text-white group-hover:text-black">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <span className="text-xs sm:text-sm font-inter font-medium">
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

export default SkillsTools;

