'use client';

import { h2Page } from '@/lib/typography';
import React, { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

type Tool = {
    name: string;
    description: string;
    icon: string;
    isText?: boolean;
};

type ToolGroup = {
    label: string;
    tools: Tool[];
};

const leftColumnGroups: ToolGroup[] = [
    {
        label: 'Design & Prototyping',
        tools: [
            { name: 'Figma', description: 'UI design, prototyping, and dev handoff', icon: 'simple-icons:figma' },
            { name: 'Lovable', description: 'Rapid AI-assisted prototypes', icon: 'lovable', isText: true },
        ],
    },
    {
        label: 'Strategy & Structure',
        tools: [
            { name: 'Miro', description: 'Journey mapping and workshops', icon: 'simple-icons:miro' },
            { name: 'Notion', description: 'Documentation and project structure', icon: 'simple-icons:notion' },
        ],
    },
    {
        label: 'Content',
        tools: [
            { name: 'Veed', description: 'Case study video edits', icon: 'simple-icons:veed' },
        ],
    },
];

const rightColumnGroups: ToolGroup[] = [
    {
        label: 'Research & Testing',
        tools: [
            { name: 'Maze', description: 'Unmoderated usability tests', icon: 'simple-icons:maze' },
            { name: 'SurveyMonkey', description: 'Quick surveys', icon: 'simple-icons:surveymonkey' },
        ],
    },
    {
        label: 'AI Workflow',
        tools: [
            { name: 'Claude', description: 'Long-form reasoning and synthesis', icon: 'simple-icons:claude' },
            { name: 'Perplexity', description: 'Cited research', icon: 'simple-icons:perplexity' },
            { name: 'ChatGPT', description: 'Prompt crafting for image and mockup tools', icon: 'simple-icons:openai' },
        ],
    },
];

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

    const renderIcon = (tool: Tool) => {
        if (tool.isText) {
            return (
                <div className="w-8 h-8 flex items-center justify-center text-[8px] bg-gray-100 rounded-md font-grotesk font-bold flex-shrink-0">
                    Lovable
                </div>
            );
        }
        return (
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <Icon icon={tool.icon} className="w-4 h-4 text-black" />
            </div>
        );
    };

    const renderGroup = (group: ToolGroup, index: number, total: number) => (
        <div
            key={group.label}
            className={`grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-3 sm:gap-6 py-5 ${
                index < total - 1 ? 'border-b border-gray-100' : ''
            }`}
        >
            <h3 className="text-[10px] sm:text-xs font-grotesk font-bold uppercase tracking-wider text-gray-500 sm:pt-1">
                {group.label}
            </h3>
            <div className="space-y-3">
                {group.tools.map((tool) => (
                    <div key={tool.name} className="flex items-start gap-3">
                        {renderIcon(tool)}
                        <p className="text-sm font-inter text-gray-700 leading-snug pt-1">
                            <span className="font-grotesk font-bold text-black">{tool.name}.</span>{' '}
                            {tool.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="py-12 sm:py-16 bg-white border-t border-gray-100">
            <div className="container-custom">
                <div ref={skillsRef}>
                    <div className="text-center mb-8 sm:mb-10">
                        <h2 className={`${h2Page} mb-3`}>
                            Tools I Use
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 font-inter max-w-xl mx-auto">
                            How I take projects from idea to ship.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 xl:gap-x-16">
                        <div>
                            {leftColumnGroups.map((group, index) =>
                                renderGroup(group, index, leftColumnGroups.length)
                            )}
                        </div>
                        <div>
                            {rightColumnGroups.map((group, index) =>
                                renderGroup(group, index, rightColumnGroups.length)
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
