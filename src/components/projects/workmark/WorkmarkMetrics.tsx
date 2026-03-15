'use client';

import React from 'react';
import { TrendingUp } from 'lucide-react';

const metrics = [
    { value: '34%', label: 'Increase in internal collaboration' },
    { value: '21%', label: 'Reduction in project delays' },
    { value: '18%', label: 'Increase in employee recognition' },
    { value: '15%', label: 'Increase in user satisfaction' },
];

export default function WorkmarkMetrics() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-6">
                        Key Metrics & Impact
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 mb-12 max-w-3xl leading-relaxed">
                        Early indicators from research and concept testing suggested strong potential for impact on collaboration, delays, recognition, and satisfaction.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {metrics.map((m, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
                                <div className="flex items-center gap-2 mb-2">
                                    <TrendingUp className="w-5 h-5 text-black" />
                                    <span className="text-2xl font-grotesk font-bold text-black">{m.value}</span>
                                </div>
                                <p className="text-sm font-inter text-gray-600">{m.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
