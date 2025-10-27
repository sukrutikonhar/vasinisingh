'use client';

import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const ExperienceEducation: React.FC = () => {
    const timeline = [
        {
            type: 'education',
            year: '2024 - Present',
            title: 'Advanced Product Design Course',
            organization: 'Professional Training',
            description: 'Comprehensive program covering UX research, interaction design, prototyping, and design systems.'
        },
        {
            type: 'experience',
            year: '2023 - 2024',
            title: 'Product Designer',
            organization: 'Freelance Projects',
            description: 'Worked on SaaS platforms, enterprise tools, and mobile applications for various clients.'
        },
        {
            type: 'experience',
            year: '2020 - 2023',
            title: 'UI/UX Designer',
            organization: 'Digital Agency',
            description: 'Designed user interfaces and experiences for web and mobile applications across industries.'
        },
        {
            type: 'education',
            year: '2017 - 2020',
            title: 'Photography & Visual Design',
            organization: 'Self-taught',
            description: 'Developed visual storytelling skills through photography, leading to interest in digital design.'
        }
    ];

    return (
        <section className="py-32 bg-gray-50">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-grotesk font-bold text-black mb-16 text-center">
                        Experience & Education
                    </h2>

                    <div className="space-y-8">
                        {timeline.map((item, index) => (
                            <div
                                key={index}
                                className="relative pl-16 pb-8 border-l-2 border-black last:border-0"
                            >
                                {/* Icon */}
                                <div className="absolute left-0 top-0 transform -translate-x-1/2">
                                    <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center">
                                        {item.type === 'education' ? (
                                            <GraduationCap className="w-6 h-6" />
                                        ) : (
                                            <Briefcase className="w-6 h-6" />
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="bg-white border-2 border-black p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-grotesk font-medium text-gray-600">
                                            {item.year}
                                        </span>
                                        <span className="text-xs font-grotesk uppercase tracking-wider border border-black px-2 py-1">
                                            {item.type}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-grotesk font-bold text-black mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg font-inter font-semibold text-gray-700 mb-3">
                                        {item.organization}
                                    </p>
                                    <p className="font-inter text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceEducation;

