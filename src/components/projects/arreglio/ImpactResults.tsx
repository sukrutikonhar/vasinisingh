'use client';

import React from 'react';

const ImpactResults: React.FC = () => {
    const metrics = [
        {
            value: '3x',
            label: 'Faster Processing',
            description: 'Average repair job completion time'
        },
        {
            value: '$50K',
            label: 'Annual Savings',
            description: 'Reduced administrative overhead'
        },
        {
            value: '98%',
            label: 'Adoption Rate',
            description: 'Within first month of launch'
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-12 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4">
                            Impact & Results
                        </h2>
                        <div className="w-24 h-1 bg-black mx-auto"></div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {metrics.map((metric, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl sm:text-6xl md:text-7xl font-grotesk font-bold text-black mb-3">
                                    {metric.value}
                                </div>
                                <div className="text-lg sm:text-xl font-grotesk font-semibold text-black mb-2">
                                    {metric.label}
                                </div>
                                <p className="text-sm font-inter text-gray-600">
                                    {metric.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-8 sm:p-12">
                        <blockquote className="text-lg sm:text-xl font-inter text-gray-800 leading-relaxed mb-4 text-center">
                            "This system transformed our entire business. What used to take hours now takes minutes, and our customers are amazed by how professional we've become."
                        </blockquote>
                        <p className="text-sm font-inter text-gray-600 text-center">
                            —Maria Rodriguez, Shop Owner
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactResults;

