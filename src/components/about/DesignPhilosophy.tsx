'use client';

import React from 'react';
import { Heart, Target, Sparkles } from 'lucide-react';

const DesignPhilosophy: React.FC = () => {
    const principles = [
        {
            icon: Heart,
            title: 'User Empathy',
            description: 'Understanding real human needs, not just assumed requirements.'
        },
        {
            icon: Target,
            title: 'Business Goals',
            description: 'Aligning design decisions with measurable objectives.'
        },
        {
            icon: Sparkles,
            title: 'Visual Harmony',
            description: 'Creating aesthetically pleasing experiences that feel effortless.'
        }
    ];

    return (
        <section className="py-32 bg-white">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    {/* Quote */}
                    <div className="text-center mb-20">
                        <blockquote className="relative">
                            <div className="text-9xl font-grotesk font-bold text-gray-200 absolute -top-12 left-1/2 transform -translate-x-1/2">
                                &ldquo;
                            </div>
                            <p className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black leading-tight relative z-10 max-w-4xl mx-auto">
                                I believe good design balances user empathy, business goals, and visual harmony.
                            </p>
                        </blockquote>
                    </div>

                    {/* Principles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {principles.map((principle, index) => (
                            <div
                                key={index}
                                className="group bg-gray-50 border-2 border-black p-8 hover:bg-black hover:text-white transition-all duration-300"
                            >
                                <div className="mb-6">
                                    {React.createElement(principle.icon, {
                                        className: "w-12 h-12 group-hover:scale-110 transition-transform"
                                    })}
                                </div>
                                <h3 className="text-2xl font-grotesk font-bold mb-4">
                                    {principle.title}
                                </h3>
                                <p className="font-inter leading-relaxed">
                                    {principle.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignPhilosophy;

