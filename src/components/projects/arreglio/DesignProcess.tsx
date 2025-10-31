'use client';

import React from 'react';
import { LayoutDashboard, Bot, DollarSign, Bell, Palette, Star } from 'lucide-react';

const DesignProcess: React.FC = () => {
    const features = [
        {
            title: 'Kanban Board Management',
            description: 'Visual task tracking dashboard allowing shop owners to drag-and-drop jobs through stages, prioritize urgent repairs, and manage workload at a glance.',
            icon: LayoutDashboard,
            color: 'from-green-500 to-green-600'
        },
        {
            title: '24/7 AI Virtual Assistant',
            description: 'Intelligent chatbot handling common customer queries about services, pricing, and availability—reducing support burden on shop owners.',
            icon: Bot,
            color: 'from-blue-500 to-blue-600'
        },
        {
            title: 'Transparent Pricing Display',
            description: 'Mandatory service pricing with rental tenure and availability information—building customer trust through transparency.',
            icon: DollarSign,
            color: 'from-purple-500 to-purple-600'
        },
        {
            title: 'Real-Time Status Updates',
            description: 'Automated notifications keeping customers informed at each repair stage—eliminating the need for follow-up calls.',
            icon: Bell,
            color: 'from-orange-500 to-orange-600'
        },
        {
            title: 'Website Customization',
            description: 'No-code storefront builder allowing shops to customize branding, colors, and layouts—maintaining identity while leveraging platform infrastructure.',
            icon: Palette,
            color: 'from-pink-500 to-pink-600'
        },
        {
            title: 'Review & Rating System',
            description: 'Post-service review collection building shop credibility and helping customers make informed decisions based on peer experiences.',
            icon: Star,
            color: 'from-yellow-500 to-yellow-600'
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
                                06 — Key Features
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-6">
                            Solution Architecture
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 max-w-3xl leading-relaxed">
                            Strategic features designed to address specific pain points for both shop owners and customers.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-[6px] shadow-card border-t-4 border-gray-800 hover:shadow-xl transition-all group"
                            >
                                <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {React.createElement(feature.icon, {
                                        className: "w-7 h-7 sm:w-8 sm:h-8 text-white"
                                    })}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-grotesk font-bold text-black mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-base font-inter text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Compliance Note */}
                    <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-50 to-purple-50 p-8 sm:p-12 rounded-[6px] shadow-card border-l-4 border-blue-500">
                        <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-black mb-6 flex items-center gap-3">
                            <span className="text-3xl">🌍</span>
                            Multi-Region Compliance Strategy
                        </h3>
                        <p className="text-base sm:text-lg font-inter text-gray-700 leading-relaxed mb-6">
                            Designed for compliance from the ground up, not as an afterthought. The platform supports operations across European Union (GDPR), India (DPDP Act 2023), and United Arab Emirates (PDPL) with built-in consent management, data portability, and privacy safeguards.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white/70 p-4 rounded-lg">
                                <p className="text-3xl mb-2">🇪🇺</p>
                                <p className="text-sm font-grotesk font-bold text-black mb-1">GDPR (EU)</p>
                                <p className="text-xs font-inter text-gray-600">Consent management, data portability, right to erasure</p>
                            </div>
                            <div className="bg-white/70 p-4 rounded-lg">
                                <p className="text-3xl mb-2">🇮🇳</p>
                                <p className="text-sm font-grotesk font-bold text-black mb-1">DPDP Act (India)</p>
                                <p className="text-xs font-inter text-gray-600">Consent-driven processing, data localization</p>
                            </div>
                            <div className="bg-white/70 p-4 rounded-lg">
                                <p className="text-3xl mb-2">🇦🇪</p>
                                <p className="text-sm font-grotesk font-bold text-black mb-1">PDPL (UAE)</p>
                                <p className="text-xs font-inter text-gray-600">User consent, secure storage, privacy safeguards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignProcess;
