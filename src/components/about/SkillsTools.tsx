'use client';

import React from 'react';
import { Figma, Box, Layers, Users, Palette, Code2 } from 'lucide-react';

const SkillsTools: React.FC = () => {
    const tools = [
        { name: 'Figma', icon: Figma },
        { name: 'Adobe XD', icon: Palette },
        { name: 'Sketch', icon: Box },
        { name: 'Miro', icon: Users },
        { name: 'Notion', icon: Layers },
        { name: 'Webflow', icon: Code2 }
    ];

    const uxSkills = [
        'User Research',
        'Personas & Journey Maps',
        'Wireframing',
        'Prototyping',
        'UI Design',
        'Interaction Design',
        'Usability Testing',
        'Design Systems'
    ];

    return (
        <section className="py-32 bg-white">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-grotesk font-bold text-black mb-16 text-center">
                        Skills & Tools
                    </h2>

                    {/* Tools */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-grotesk font-semibold text-black mb-8">
                            Tools I Use
                        </h3>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                            {tools.map((tool, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col items-center justify-center p-6 border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
                                >
                                    {React.createElement(tool.icon, {
                                        className: "w-10 h-10 mb-3 group-hover:scale-110 transition-transform"
                                    })}
                                    <span className="text-sm font-grotesk font-medium text-center">
                                        {tool.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* UX Skills */}
                    <div>
                        <h3 className="text-2xl font-grotesk font-semibold text-black mb-8">
                            UX Capabilities
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {uxSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 bg-gray-50 border-2 border-black p-4 hover:bg-black hover:text-white transition-all group"
                                >
                                    <div className="w-8 h-8 bg-black group-hover:bg-white flex items-center justify-center flex-shrink-0">
                                        <span className="text-xs font-grotesk font-bold text-white group-hover:text-black">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <span className="text-sm font-inter font-medium">
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

