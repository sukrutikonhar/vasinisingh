'use client';

import React from 'react';
import { Check } from 'lucide-react';

const WhatCouldChange: React.FC = () => {
    const beforeItems = [
        {
            title: 'Contribution is hard to prove',
            description: 'Employees struggle to show impact outside visible deliverables.',
        },
        {
            title: 'Managers rely on memory',
            description: 'Review preparation is subjective, slow, and vulnerable to bias.',
        },
        {
            title: 'Recognition is infrequent',
            description: 'Acknowledgment happens too late to support motivation.',
        },
        {
            title: 'Organizations lack visibility',
            description: 'Leaders cannot see contribution patterns in real time.',
        },
    ];

    const withItems = [
        {
            title: 'Living impact record',
            description: 'Employees maintain a continuous record of meaningful work.',
        },
        {
            title: 'Structured evaluation',
            description: 'Managers access evidence they can trust before making decisions.',
        },
        {
            title: 'Continuous recognition',
            description: 'Feedback loops support motivation throughout the cycle.',
        },
        {
            title: 'Organizational visibility',
            description: 'Leadership gains insight into real work patterns and team health.',
        },
    ];

    const metrics = [
        {
            value: '25%',
            title: 'Potential retention lift',
            description:
                'Frequent recognition improves motivation and reduces attrition risk.',
        },
        {
            value: '30%',
            title: 'Projected engagement gain',
            description:
                'Continuous acknowledgment strengthens employee engagement signals.',
        },
        {
            value: '18%',
            title: 'Estimated productivity improvement',
            description:
                'Better visibility into contribution increases ownership and accountability.',
        },
        {
            value: '60%',
            title: 'Review prep time reduction',
            description:
                'Managers spend less time collecting evidence and more time coaching.',
        },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="border-t border-gray-200 pt-4 mb-2">
                        <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-medium mb-4">
                            13 — OUTCOMES
                        </p>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-grotesk font-bold text-black mb-6">
                        What Could Change with WorkMark
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl leading-relaxed mb-12">
                        Projections based on research insights and behavioral studies for the platform&apos;s potential impact.
                    </p>

                    {/* Before vs With WorkMark */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                            <p className="text-xs uppercase tracking-wider text-gray-600 font-grotesk font-bold mb-6">
                                BEFORE WORKMARK
                            </p>
                            <ul className="space-y-6">
                                {beforeItems.map((item, index) => (
                                    <li key={index} className="flex gap-3">
                                        <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
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
                                ))}
                            </ul>
                        </div>
                        <div className="bg-black text-white rounded-xl p-8">
                            <p className="text-xs uppercase tracking-wider text-gray-300 font-grotesk font-bold mb-6">
                                WITH WORKMARK
                            </p>
                            <ul className="space-y-6">
                                {withItems.map((item, index) => (
                                    <li key={index} className="flex gap-3">
                                        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-black" strokeWidth={3} />
                                        </div>
                                        <div>
                                            <p className="font-grotesk font-bold text-white mb-1">
                                                {item.title}
                                            </p>
                                            <p className="text-sm font-inter text-gray-300 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Impact metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {metrics.map((metric, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm"
                            >
                                <div className="text-4xl sm:text-5xl font-grotesk font-bold text-black mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-lg font-grotesk font-bold text-black mb-2">
                                    {metric.title}
                                </div>
                                <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                    {metric.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatCouldChange;
