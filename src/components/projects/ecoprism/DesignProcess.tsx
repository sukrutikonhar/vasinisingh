'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Palette, Users2, ShieldCheck, Layers } from 'lucide-react';

const DesignProcess: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const container = containerRef.current;
            const cards = container.querySelectorAll('[data-responsibility-card]');

            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const cardCenter = rect.top + rect.height / 2;

                // Check if card is in the center third of viewport
                if (cardCenter > windowHeight * 0.3 && cardCenter < windowHeight * 0.7) {
                    setActiveIndex(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-7xl mx-auto" ref={containerRef}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Side - Fixed Title & Highlight */}
                        <div className="sticky top-32 h-fit">
                            <div className="inline-block bg-gray-100 rounded-full px-4 py-2 mb-6">
                                <span className="text-xs sm:text-sm font-grotesk font-bold text-[#202022] uppercase tracking-wider">
                                    04 — My Contribution
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-grotesk font-bold text-black mb-6 leading-tight">
                                UI/UX Design<br />Leadership
                            </h2>
                            <p className="text-base sm:text-lg font-inter text-gray-600 leading-relaxed mb-8">
                                Led end-to-end UI/UX design while collaborating with research, compliance, and engineering teams to transform complex ESG regulations into intuitive experiences.
                            </p>

                            {/* Highlight Box */}
                            <div className="bg-[#202022] text-white p-6 sm:p-8 rounded-[6px] shadow-card">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-2xl">✨</span>
                                    <h3 className="text-lg sm:text-xl font-grotesk font-bold">
                                        Foundation Designer
                                    </h3>
                                </div>
                                <p className="text-sm sm:text-base font-inter text-gray-300 leading-relaxed">
                                    First designer on the product • Built design foundation from scratch • Established scalable design systems for a live enterprise product
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Scrollable Cards */}
                        <div className="space-y-6">
                            {responsibilities.map((resp, index) => (
                                <div
                                    key={index}
                                    data-responsibility-card
                                    className={`bg-white rounded-[6px] shadow-card p-6 sm:p-8 transition-all duration-500 ${activeIndex === index
                                        ? 'border-2 border-gray-800 scale-[1.02]'
                                        : 'border border-gray-200 opacity-60'
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#202022] flex items-center justify-center flex-shrink-0">
                                            {React.createElement(resp.icon, {
                                                className: "w-6 h-6 sm:w-7 sm:h-7 text-white"
                                            })}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl sm:text-2xl font-grotesk font-bold text-[#202022] mb-3">
                                                {resp.title}
                                            </h3>
                                            <p className="text-sm sm:text-base font-inter text-gray-600 leading-relaxed">
                                                {resp.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignProcess;
