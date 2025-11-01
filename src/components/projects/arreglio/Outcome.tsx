'use client';

import React from 'react';
import { Clock, Users, DollarSign, Heart, Rocket } from 'lucide-react';

const Outcome: React.FC = () => {
    const metrics = [
        { icon: Clock, value: '70%', label: 'Faster Turnaround', description: 'Digitization eliminated paperwork bottlenecks' },
        { icon: Users, value: '80%', label: 'Customer Satisfaction', description: 'Transparency built trust and loyalty' },
        { icon: DollarSign, value: '40%', label: 'Cost Savings', description: 'Reduced admin time and operational waste' },
        { icon: Heart, value: '60%', label: 'Owner Satisfaction', description: 'Streamlined operations improved work-life balance' }
    ];

    const testimonials = [
        {
            quote: 'Now I never lose track of jobs. Everything is organized, customers are happy, and I can focus on what I do best—fixing things.',
            author: 'Workshop Owner',
            role: 'Using Arreglio for 4 months'
        },
        {
            quote: 'I get instant updates and never have to call again. I can see photos of the work and know exactly when to pick up my bike.',
            author: 'Customer',
            role: 'Repeat user'
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="container-custom px-4 sm:px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-8">
                            <Rocket className="w-4 h-4" />
                            <span className="text-xs font-grotesk font-bold uppercase tracking-wider">
                                05 — Impact & Results
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-6 max-w-4xl mx-auto">
                            Early MVP Validation & Measurable Impact
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            The platform is currently live in MVP phase with active users. Early metrics validate our strategic approach and demonstrate strong product-market fit.
                        </p>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {metrics.map((metric, index) => (
                            <div
                                key={index}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-black transform rotate-1 group-hover:rotate-2 transition-transform duration-300 rounded-[6px]"></div>
                                <div className="relative bg-white border-2 border-black p-8 text-center hover:bg-black transition-all duration-300 rounded-[6px] h-full">
                                    {React.createElement(metric.icon, {
                                        className: "w-12 h-12 text-black mx-auto mb-6 group-hover:text-white transition-colors"
                                    })}
                                    <div className="text-5xl sm:text-6xl font-grotesk font-bold text-black mb-3 group-hover:text-white transition-colors">
                                        {metric.value}
                                    </div>
                                    <div className="text-base sm:text-lg font-grotesk font-semibold text-black mb-3 group-hover:text-white transition-colors">
                                        {metric.label}
                                    </div>
                                    <p className="text-sm font-inter text-gray-600 group-hover:text-white/80 transition-colors">
                                        {metric.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* MVP Phase Focus */}
                    <div className="bg-black p-12 sm:p-16 border-2 border-black relative mb-20">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 via-white to-gray-400"></div>
                        <div className="max-w-5xl">
                            <h3 className="text-3xl sm:text-4xl font-grotesk font-bold text-white mb-8 flex items-center gap-4">
                                <Rocket className="w-10 h-10 text-white" />
                                Current MVP Phase Focus
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="border-l-4 border-white pl-6">
                                    <p className="text-xs font-grotesk font-bold text-white/60 uppercase tracking-wider mb-2">Gathering feedback</p>
                                    <p className="text-base font-inter text-white/90 leading-relaxed">Iterating features based on real-world usage patterns</p>
                                </div>
                                <div className="border-l-4 border-white pl-6">
                                    <p className="text-xs font-grotesk font-bold text-white/60 uppercase tracking-wider mb-2">Validating assumptions</p>
                                    <p className="text-base font-inter text-white/90 leading-relaxed">Testing core value propositions with early adopters</p>
                                </div>
                                <div className="border-l-4 border-white pl-6">
                                    <p className="text-xs font-grotesk font-bold text-white/60 uppercase tracking-wider mb-2">Scaling preparation</p>
                                    <p className="text-base font-inter text-white/90 leading-relaxed">Refining onboarding and feature prioritization</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* User Validation */}
                    <div>
                        <h3 className="text-3xl sm:text-4xl font-grotesk font-bold text-black mb-12 text-center">
                            What Users Say
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white border-2 border-black p-10 relative group hover:shadow-2xl transition-all"
                                >
                                    <div className="text-6xl text-black/5 mb-6">&quot;</div>
                                    <p className="text-lg font-inter text-gray-700 leading-relaxed mb-8">
                                        {testimonial.quote}
                                    </p>
                                    <div className="border-t border-gray-200 pt-6">
                                        <p className="text-base font-grotesk font-bold text-black mb-1">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-sm font-inter text-gray-600">
                                            {testimonial.role}
                                        </p>
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

export default Outcome;
