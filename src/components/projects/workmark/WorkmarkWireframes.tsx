'use client';

import React from 'react';

export default function WorkmarkWireframes() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-6">
                        Wireframes & Iterations
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 mb-12 max-w-3xl leading-relaxed">
                        We iterated from low-fidelity wireframes to higher-fidelity screens, testing structure and flows before applying the full design system.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                                <p className="text-sm font-inter text-gray-400">Wireframe Iteration 1 — Image placeholder</p>
                            </div>
                            <p className="text-xs font-inter text-gray-500 mt-2 text-center">Wireframe Iteration 1</p>
                        </div>
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                                <p className="text-sm font-inter text-gray-400">Wireframe Iteration 2 — Image placeholder</p>
                            </div>
                            <p className="text-xs font-inter text-gray-500 mt-2 text-center">Wireframe Iteration 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
