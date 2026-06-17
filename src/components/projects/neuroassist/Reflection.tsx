'use client';

import { h2Section } from '@/lib/typography';
import React from 'react';

const reflections = [
    {
        title: 'Simplicity is a safety feature',
        body: 'Every field I cut, every label I shortened: not aesthetic choices. Cognitive load reduction maps directly to error reduction in time-pressured environments.'
    },
    {
        title: 'The hardest problems are IA problems',
        body: 'Deciding what lives at what moment in the flow was more impactful than any visual decision. Sequencing is the design.'
    },
    {
        title: 'Institutional products are two products',
        body: 'The clinical workflow and the admin layer serve completely different users. Letting one subsume the other would have broken both.'
    },
    {
        title: 'Error messages are strategy',
        body: '"Escalate to neurology" over "error" was a positioning choice. The product needed to feel like a colleague who knows its limits.'
    }
];

const stats = [
    { value: '8', label: 'stages designed end-to-end' },
    { value: '4', label: 'clinical pathways from one entry' },
    { value: '0', label: 'dead-end failure states' },
    { value: '1×', label: 'data entered, used everywhere' }
];

const Reflection: React.FC = () => {
    return (
        <section className="py-14 sm:py-16 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-10">
                        <div>
                            <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-400 mb-3">
                                Reflection
                            </p>
                            <h2 className={`${h2Section}`}>
                                What I took away
                            </h2>
                        </div>
                    </div>

                    {/* Reflections 2×2 grid + image side by side */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">

                        {/* Left: 2×2 reflection cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {reflections.map((r, idx) => (
                                <div key={idx} className="bg-white border border-gray-200 rounded-[6px] p-5 hover:border-black transition-colors">
                                    <p className="text-sm font-grotesk font-semibold text-black mb-2 leading-snug">
                                        {r.title}
                                    </p>
                                    <p className="text-xs font-inter text-gray-600 leading-relaxed">
                                        {r.body}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Stats strip */}
                    <div>
                        <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-400 mb-4">
                            At a glance — the shape of this project
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200 rounded-[6px] overflow-hidden">
                            {stats.map((s, idx) => (
                                <div key={idx} className="bg-white px-5 py-6">
                                    <p className="text-3xl sm:text-4xl font-grotesk font-bold text-black mb-2 leading-none">
                                        {s.value}
                                    </p>
                                    <p className="text-xs font-inter text-gray-500 leading-snug">
                                        {s.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reflection;
