'use client';

import React from 'react';
import { LayoutDashboard, Bot, DollarSign, Bell, Palette, Star, Globe } from 'lucide-react';

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
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, black 2px, black 4px)'
                }}></div>
            </div>

            <div className="container-custom px-4 sm:px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-20">
                        <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-8">
                            <Star className="w-4 h-4" />
                            <span className="text-xs font-grotesk font-bold uppercase tracking-wider">
                                04 — Solution Architecture
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-6 max-w-4xl">
                            Strategic Features Designed to Address Core Pain Points
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 max-w-3xl leading-relaxed">
                            Each feature was strategically designed to address specific pain points for both shop owners and customers, balancing functionality with simplicity.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative bg-white border-2 border-black hover:shadow-2xl transition-all"
                            >
                                <div className="p-8">
                                    <div className="mb-6">
                                        {React.createElement(feature.icon, {
                                            className: "w-8 h-8 text-black"
                                        })}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-grotesk font-bold text-black mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-base font-inter text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Compliance Note */}
                    <div className="bg-black p-12 sm:p-16 border-2 border-black relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 via-white to-gray-400"></div>
                        <div className="flex items-start gap-6 mb-8">
                            <Globe className="w-12 h-12 text-white flex-shrink-0" />
                            <div>
                                <h3 className="text-3xl sm:text-4xl font-grotesk font-bold text-white mb-6">
                                    Multi-Region Compliance Strategy
                                </h3>
                                <p className="text-lg font-inter text-white/90 leading-relaxed mb-8 max-w-4xl">
                                    Designed for compliance from the ground up, not as an afterthought. The platform supports operations across European Union (GDPR), India (DPDP Act 2023), and United Arab Emirates (PDPL) with built-in consent management, data portability, and privacy safeguards.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6">
                                        <p className="text-4xl mb-3">🇪🇺</p>
                                        <p className="text-base font-grotesk font-bold text-white mb-2">GDPR (EU)</p>
                                        <p className="text-sm font-inter text-white/70">Consent management, data portability, right to erasure</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6">
                                        <p className="text-4xl mb-3">🇮🇳</p>
                                        <p className="text-base font-grotesk font-bold text-white mb-2">DPDP Act (India)</p>
                                        <p className="text-sm font-inter text-white/70">Consent-driven processing, data localization</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6">
                                        <p className="text-4xl mb-3">🇦🇪</p>
                                        <p className="text-base font-grotesk font-bold text-white mb-2">PDPL (UAE)</p>
                                        <p className="text-sm font-inter text-white/70">User consent, secure storage, privacy safeguards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignProcess;
