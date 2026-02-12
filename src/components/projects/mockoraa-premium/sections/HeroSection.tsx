'use client';

import React, { useEffect, useState } from 'react';
import { Play, ExternalLink, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="min-h-screen flex items-center pt-20 pb-20">
            <div className="max-w-7xl mx-auto px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                            Designing Confidence
                            <span className="block text-gray-300">at Scale</span>
                        </h1>
                        
                        <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-lg">
                            Transforming interview anxiety into measurable performance outcomes through AI-powered simulation.
                        </p>

                        {/* Meta Details */}
                        <div className="grid grid-cols-2 gap-6 mb-12 text-sm">
                            <div>
                                <div className="text-gray-500 uppercase tracking-wider mb-2">Role</div>
                                <div className="text-white">Design Research & Product Ideation Specialist</div>
                            </div>
                            <div>
                                <div className="text-gray-500 uppercase tracking-wider mb-2">Timeline</div>
                                <div className="text-white">6 Weeks</div>
                            </div>
                            <div>
                                <div className="text-gray-500 uppercase tracking-wider mb-2">Team</div>
                                <div className="text-white">Cross-functional team of 8</div>
                            </div>
                            <div>
                                <div className="text-gray-500 uppercase tracking-wider mb-2">Industry</div>
                                <div className="text-white">AI × HR Tech × EdTech</div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors group">
                                <Play className="w-5 h-5" />
                                View Product Walkthrough
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="flex items-center gap-3 border border-gray-600 text-white px-8 py-4 rounded-lg hover:border-white transition-colors group">
                                <ExternalLink className="w-5 h-5" />
                                View Prototype
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="relative">
                            {/* Image Placeholder */}
                            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                                <div className="aspect-[4/3] bg-gray-800 rounded-lg flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-gray-400 mb-2">[Image Placeholder]</div>
                                        <div className="text-sm text-gray-500">AI Avatar Interview Interface</div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Floating Animation */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;