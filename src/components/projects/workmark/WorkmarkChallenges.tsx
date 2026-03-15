'use client';

import React from 'react';
import { Search, UserCheck, Award } from 'lucide-react';

const challenges = [
    {
        icon: Search,
        title: 'DISCOVERABILITY',
        description: 'Work that happens in the background—documentation, mentoring, cross-team support—often stays invisible. Teams needed a way to surface these contributions without adding extra reporting burden.',
    },
    {
        icon: UserCheck,
        title: 'ACCOUNTABILITY',
        description: 'When contributions aren\'t visible, accountability for shared goals suffers. We needed to design for lightweight, continuous visibility that supports both individuals and managers.',
    },
    {
        icon: Award,
        title: 'VALIDATION',
        description: 'Employees wanted their efforts recognized in a way that felt fair and tied to real impact. The solution had to support recognition that aligns with organizational values and goals.',
    },
];

export default function WorkmarkChallenges() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-6">
                        Challenges & Opportunities
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 mb-12 max-w-3xl leading-relaxed">
                        We identified three core opportunity areas that would allow workmark to make invisible work visible while keeping the experience simple and actionable.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {challenges.map((item, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                                <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center mb-4">
                                    <item.icon className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-sm font-grotesk font-bold uppercase tracking-wider text-black mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
