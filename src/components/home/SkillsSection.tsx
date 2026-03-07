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
        { name: 'Figma', description: 'UI UX Design & prototyping', icon: 'simple-icons:figma' },
        { name: 'Survey Monkey', description: 'Quick Surveys', icon: 'simple-icons:surveymonkey' },
        { name: 'Maze', description: 'Usability tests', icon: 'simple-icons:maze' },
        { name: 'Miro', description: 'Journey mapping', icon: 'simple-icons:miro' },
        { name: 'Claude', description: 'Long form reasoning', icon: 'simple-icons:claude' },
        { name: 'Figma', description: 'Brainstorming', icon: 'simple-icons:figma' },
        { name: 'Lovable', description: 'Visual Ideation', icon: 'lovable', isText: true },
        { name: 'Chatgpt', description: 'UX Research', icon: 'simple-icons:openai' },
        { name: 'Veed', description: 'Quick edits for case study', icon: 'simple-icons:veed' },
        { name: 'Stitch', description: 'Visual Ideation', icon: 'stitch', isText: true },
        { name: 'Perplexity', description: 'AI Research and insights', icon: 'simple-icons:perplexity' },
        { name: 'Notion', description: 'Docs, Structuring', icon: 'simple-icons:notion' }
    ];

    const renderIcon = (tool: { name: string; description: string; icon: string; isText?: boolean }) => {
        if (tool.isText) {
            return (
                <div className="sm:w-14 sm:h-14 flex items-center justify-center text-black text-xs bg-gray-200 rounded-md font-grotesk font-bold group-hover:scale-110 transition-transform">
                    {tool.icon === 'lovable' ? 'Lovable' : tool.icon === 'stitch' ? 'Stitch' : ''}
                </div>
            );
        }
        return (
            <Icon
                icon={tool.icon}
                className="w-6 h-6 sm:w-8 sm:h-8 text-black group-hover:scale-110 transition-transform"
            />
        );
    };

    return (
        <section className="py-16 sm:py-24 md:py-32 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div ref={skillsRef} className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 sm:mb-16 md:mb-20">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-grotesk font-bold text-black mb-4 sm:mb-6">
                            Tools I Use
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 font-inter max-w-2xl mx-auto px-4">
                            The tools I use to bring ideas to life
                        </p>
                    </div>

                    {/* Tools Grid - Card Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {tools.map((tool, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-gray-200 p-5 sm:p-6 rounded-lg shadow-subtle hover:shadow-lg transition-all duration-300 hover:border-black"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        {renderIcon(tool)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm sm:text-base font-grotesk font-bold text-black mb-1">
                                            {tool.name}
                                        </h3>
                                        <p className="text-xs sm:text-sm font-inter text-gray-600">
                                            {tool.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
