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
                                05 — Impact & Results
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-white mb-4">
                            Early MVP Validation & Measurable Impact
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-white/80 max-w-3xl mx-auto leading-relaxed">
                            The platform is currently live in MVP phase with active users. Early metrics validate our strategic approach and demonstrate strong product-market fit.
                        </p>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {metrics.map((metric, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-[6px] border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all text-center"
                            >
                                {React.createElement(metric.icon, {
                                    className: "w-10 h-10 text-white mx-auto mb-4"
                                })}
                                <div className="text-4xl font-grotesk font-bold text-white mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-base font-grotesk font-semibold text-white mb-2">
                                    {metric.label}
                                </div>
                                <p className="text-sm font-inter text-white/70">
                                    {metric.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* User Validation */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-grotesk font-bold text-white mb-8 text-center">
                            User Testimonials
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm p-6 rounded-[6px] border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all"
                                >
                                    <p className="text-base font-inter text-white/90 leading-relaxed mb-4">
                                        {testimonial.quote}
                                    </p>
                                    <div className="border-t border-white/20 pt-4">
                                        <p className="text-sm font-grotesk font-bold text-white mb-1">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-xs font-inter text-white/70">
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
