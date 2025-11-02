'use client';

import React from 'react';
import { LayoutDashboard, Bot, DollarSign, Bell, Palette, Star } from 'lucide-react';

const DesignProcess: React.FC = () => {
    const features = [
        {
            title: 'Kanban Board Management',
            description: 'Visual task tracking dashboard allowing shop owners to drag-and-drop jobs through stages, prioritize urgent repairs, and manage workload at a glance.',
            icon: LayoutDashboard
        },
        {
            title: '24/7 AI Virtual Assistant',
            description: 'Intelligent chatbot handling common customer queries about services, pricing, and availability—reducing support burden on shop owners.',
            icon: Bot
        },
        {
            title: 'Transparent Pricing Display',
            description: 'Mandatory service pricing with rental tenure and availability information—building customer trust through transparency.',
            icon: DollarSign
        },
        {
            title: 'Real-Time Status Updates',
            description: 'Automated notifications keeping customers informed at each repair stage—eliminating the need for follow-up calls.',
            icon: Bell
        },
        {
            title: 'Website Customization',
            description: 'No-code storefront builder allowing shops to customize branding, colors, and layouts—maintaining identity while leveraging platform infrastructure.',
            icon: Palette
        },
        {
            title: 'Review & Rating System',
            description: 'Post-service review collection building shop credibility and helping customers make informed decisions based on peer experiences.',
            icon: Star
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-6">
                            <Star className="w-4 h-4" />
                            <span className="text-xs font-grotesk font-bold uppercase tracking-wider">
                                04 — Solution Architecture
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4">
                            Strategic Features Designed to Address Core Pain Points
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 leading-relaxed">
                            Each feature was strategically designed to address specific pain points for both shop owners and customers, balancing functionality with simplicity.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-200 p-6"
                            >
                                <div className="mb-4">
                                    {React.createElement(feature.icon, {
                                        className: "w-8 h-8 text-black"
                                    })}
                                </div>
                                <h3 className="text-lg sm:text-xl font-grotesk font-bold text-black mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-sm font-inter text-gray-700 leading-relaxed">
                                    {feature.description}
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
