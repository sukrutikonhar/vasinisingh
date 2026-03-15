'use client';

import React from 'react';

const items = [
    { label: 'Component Library' },
    { label: 'User Flow' },
    { label: 'Dark Mode' },
];

export default function WorkmarkVisualDesign() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-6">
                        Visual Design
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 mb-12 max-w-3xl leading-relaxed">
                        Final visual design included a component library, clear user flows, and support for dark mode to suit different working contexts.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {items.map((item, index) => (
                            <div key={index}>
                                <div className="aspect-[4/3] bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                                    <p className="text-sm font-inter text-gray-400 text-center px-4">{item.label} — Image placeholder</p>
                                </div>
                                <p className="text-xs font-inter text-gray-500 mt-2 text-center">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
