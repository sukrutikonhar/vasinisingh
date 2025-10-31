'use client';

import React from 'react';
import { Clock, Users, DollarSign, Heart } from 'lucide-react';

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
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-800 to-gray-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="container-custom px-4 sm:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                            <span className="text-xs sm:text-sm font-grotesk font-bold text-white uppercase tracking-wider">
                                04 — Impact & Results
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-white mb-6">
                            Early MVP Validation & Metrics
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-white/80 max-w-3xl mx-auto leading-relaxed">
                            The platform is currently live in MVP phase with active users. Early metrics validate our strategic approach and demonstrate strong product-market fit.
                        </p>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
                        {metrics.map((metric, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-[6px] border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all text-center"
                            >
                                <div className="flex justify-center mb-4">
                                    {React.createElement(metric.icon, {
                                        className: "w-10 h-10 sm:w-12 sm:h-12 text-white"
                                    })}
                                </div>
                                <div className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-3">
                                    {metric.value}
                                </div>
                                <div className="text-base sm:text-lg font-grotesk font-semibold text-white mb-2">
                                    {metric.label}
                                </div>
                                <p className="text-sm font-inter text-white/70">
                                    {metric.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* MVP Phase Focus */}
                    <div className="bg-white/10 backdrop-blur-sm p-8 sm:p-12 rounded-[6px] border-2 border-white/20 mb-12 sm:mb-16">
                        <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-3xl">🚀</span>
                            Current MVP Phase Focus
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <p className="text-sm font-inter text-white/70 mb-2">Gathering user feedback</p>
                                <p className="text-base font-inter text-white">Iterating features based on real-world usage patterns</p>
                            </div>
                            <div>
                                <p className="text-sm font-inter text-white/70 mb-2">Validating assumptions</p>
                                <p className="text-base font-inter text-white">Testing core value propositions with early adopters</p>
                            </div>
                            <div>
                                <p className="text-sm font-inter text-white/70 mb-2">Scaling preparation</p>
                                <p className="text-base font-inter text-white">Refining onboarding and feature prioritization</p>
                            </div>
                        </div>
                    </div>

                    {/* User Validation */}
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-white mb-8 text-center">
                            What Users Say
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-[6px] border-2 border-white/20"
                                >
                                    <div className="text-5xl text-white/20 mb-4">&quot;</div>
                                    <p className="text-lg font-inter text-white leading-relaxed mb-6">
                                        {testimonial.quote}
                                    </p>
                                    <p className="text-base font-grotesk font-semibold text-white">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-sm font-inter text-white/70">
                                        {testimonial.role}
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

export default Outcome;
