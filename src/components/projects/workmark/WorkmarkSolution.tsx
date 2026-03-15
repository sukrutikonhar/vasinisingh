'use client';

import React from 'react';

export default function WorkmarkSolution() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-6">
                        The Solution
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 mb-12 max-w-3xl leading-relaxed">
                        We proposed a combination of personalized dashboards and automated progress tracking so that contributions are visible without adding heavy process.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-lg font-grotesk font-bold text-black mb-3">
                                Solution A: Personalized Dashboards
                            </h3>
                            <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                Customizable views that let individuals and managers see contributions in one place. Filters by project, time, and type of work help surface what matters most.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-lg font-grotesk font-bold text-black mb-3">
                                Solution B: Automated Progress Tracking
                            </h3>
                            <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                Lightweight integration with existing tools to capture activity without manual logging. Progress is summarized and shared in a format that supports recognition and reviews.
                            </p>
                        </div>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-gray-100 aspect-[21/9] min-h-[280px] flex items-center justify-center">
                        <p className="text-sm font-inter text-gray-500">Solution hero / main solution image — Image placeholder</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
