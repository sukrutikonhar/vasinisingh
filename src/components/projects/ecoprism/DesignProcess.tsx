'use client';

import React from 'react';
import { Palette, Users2, ShieldCheck, Layers } from 'lucide-react';

const DesignProcess: React.FC = () => {
    const responsibilities = [
        {
            icon: Palette,
            title: 'End-to-End UI/UX Design',
            description: 'Led complete design lifecycle including user flows, wireframes, prototypes, high-fidelity interfaces, and established comprehensive design system with reusable components.'
        },
        {
            icon: Users2,
            title: 'Cross-Functional Collaboration',
            description: 'Partnered with research team to translate insights into design, worked with compliance specialists for regulatory accuracy, and collaborated with engineering for seamless implementation.'
        },
        {
            icon: ShieldCheck,
            title: 'Domain Expertise Development',
            description: 'Rapidly acquired ESG domain knowledge (EU CSRD, India BRSR frameworks) through collaboration with sustainability experts, enabling informed design decisions.'
        },
        {
            icon: Layers,
            title: 'Strategic Problem Solving',
            description: 'Translated complex regulatory requirements into scalable, modular interfaces accommodating diverse users—from ESG experts to suppliers with limited compliance experience.'
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-12 sm:mb-16">
                        <div className="inline-block bg-gray-100 rounded-full px-4 py-2 mb-6">
                            <span className="text-xs sm:text-sm font-grotesk font-bold text-[#202022] uppercase tracking-wider">
                                04 — My Contribution
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-6">
                            UI/UX Design Leadership
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 max-w-3xl leading-relaxed">
                            Led end-to-end UI/UX design while collaborating with research, compliance, and engineering teams to transform complex ESG regulations into intuitive experiences.
                        </p>
                    </div>

                    {/* Highlight Box */}
                    <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 sm:p-8 rounded-[6px] shadow-card mb-12 sm:mb-16">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">✨</span>
                            <h3 className="text-lg sm:text-xl font-grotesk font-bold">
                                Foundation Designer
                            </h3>
                        </div>
                        <p className="text-base sm:text-lg font-inter opacity-90">
                            First designer on the product • Built design foundation from scratch • Established scalable design systems for a live enterprise product
                        </p>
                    </div>

                    {/* Responsibilities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {responsibilities.map((resp, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-[6px] shadow-card border-2 border-gray-100 hover:border-gray-800 hover:shadow-xl transition-all"
                            >
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#202022] rounded-lg flex items-center justify-center mb-6">
                                    {React.createElement(resp.icon, {
                                        className: "w-7 h-7 sm:w-8 sm:h-8 text-white"
                                    })}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-grotesk font-bold text-black mb-4">
                                    {resp.title}
                                </h3>
                                <p className="text-base font-inter text-gray-600 leading-relaxed">
                                    {resp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignProcess;
