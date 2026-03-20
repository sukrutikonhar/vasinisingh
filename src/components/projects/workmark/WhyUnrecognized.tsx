'use client';

import React from 'react';
import { Layers, UserCog, RefreshCw, MessageCircleOff } from 'lucide-react';

const WhyUnrecognized: React.FC = () => {
    const barData = [
        { label: 'Tools', value: 28 },
        { label: 'Manager overload', value: 22 },
        { label: 'Memory reviews', value: 18 },
        { label: 'No system', value: 17 },
        { label: 'Bias', value: 10 },
        { label: 'Silence', value: 5 },
    ];

    const maxValue = Math.max(...barData.map((d) => d.value));
    const barShades = [
        'bg-gray-800',
        'bg-gray-700',
        'bg-gray-600',
        'bg-gray-500',
        'bg-gray-400',
        'bg-gray-300',
    ];

    const rootCauses = [
        {
            icon: Layers,
            title: 'Tool fragmentation:',
            description:
                'Work is distributed across Slack, Jira, email, docs, and meetings: so evidence never accumulates in one place.',
        },
        {
            icon: UserCog,
            title: 'Manager overload:',
            description:
                'Leads cannot realistically reconstruct every micro contribution across a team at review time.',
        },
        {
            icon: RefreshCw,
            title: 'Memory based reviews:',
            description:
                'Evaluation defaults to recall, which amplifies recency bias and undercounts invisible support work.',
        },
        {
            icon: MessageCircleOff,
            title: 'Bias and cultural silence:',
            description:
                'Without structured evidence, proximity, confidence, and communication style influence outcomes more than impact.',
        },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold mb-4">
                        04 - ROOT CAUSES
                    </p>
                    <h2 className="text-3xl lg:text-4xl font-grotesk font-bold text-black mb-4">
                        Why Contributions Go Unrecognized
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl leading-relaxed mb-12">
                        The issue is not a lack of effort. It is a systemic breakdown in how organizations capture, remember, and evaluate day to day work.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left: Root Cause Breakdown - horizontal bar chart (x-axis) */}
                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                            <h3 className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold mb-8">
                                Root Cause Breakdown
                            </h3>
                            <div className="space-y-5">
                                {barData.map((bar, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <span className="text-sm font-inter text-black w-32 flex-shrink-0">
                                            {bar.label}
                                        </span>
                                        <div className="flex-1 h-10 bg-gray-100 rounded-r overflow-hidden min-w-0">
                                            <div
                                                className={`h-full ${barShades[index]} rounded-r min-w-[2rem]`}
                                                style={{ width: `${(bar.value / maxValue) * 100}%` }}
                                            />
                                        </div>
                                        <span className="text-sm font-grotesk font-bold text-black w-10 flex-shrink-0 text-right">
                                            {bar.value}%
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Detailed root causes with icons */}
                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                            <ul className="space-y-6">
                                {rootCauses.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <li key={index} className="flex gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-black">
                                                <Icon className="w-5 h-5" strokeWidth={2} />
                                            </div>
                                            <div>
                                                <p className="font-grotesk font-bold text-black mb-1">
                                                    {item.title}
                                                </p>
                                                <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUnrecognized;
