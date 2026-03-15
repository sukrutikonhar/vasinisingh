'use client';

import React from 'react';

const insights = [
    '76% of users don\'t share their contributions with their manager.',
    'Employees feel their behind-the-scenes work goes unrecognized in reviews.',
    'Lack of visibility leads to missed recognition and career growth opportunities.',
];

export default function WorkmarkUserResearch() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-6">
                        User Research
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 mb-12 max-w-3xl leading-relaxed">
                        We conducted interviews and surveys to understand how employees track and communicate their work. Key findings revealed a significant gap between work done and work recognized.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        <div>
                            <p className="text-4xl sm:text-5xl font-grotesk font-bold text-black mb-2">76%</p>
                            <p className="text-sm font-inter text-gray-600 mb-6">
                                of users don&apos;t share their contributions with their manager.
                            </p>
                            <div className="bg-black text-white p-6 rounded-lg inline-block">
                                <p className="text-2xl font-grotesk font-bold">NPS 23</p>
                                <p className="text-xs font-inter text-gray-400 mt-1">Industry Average</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-500 mb-4">
                                User Insights
                            </h3>
                            <ol className="space-y-3">
                                {insights.map((item, i) => (
                                    <li key={i} className="flex gap-2 text-sm font-inter text-gray-700">
                                        <span className="font-grotesk font-bold text-black">{i + 1}.</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
