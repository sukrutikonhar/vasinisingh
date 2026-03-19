'use client';

import React from 'react';

const ImpactResults: React.FC = () => {
    const metrics = [
        {
            value: '85%',
            label: 'Improved Confidence',
            description: 'Users reported feeling more prepared after just a few sessions.'
        },
        {
            value: '40%',
            label: 'Faster Preparation',
            description: 'Structured practice reduced preparation time compared to traditional methods.'
        },
        {
            value: '95%',
            label: 'High Engagement',
            description: 'Users were willing to repeat sessions to improve performance.'
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-100">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Measurable Impact Section */}
                    <div className="mb-12 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4">
                            Measurable Impact
                        </h2>
                        <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
                        <p className="text-base sm:text-lg font-inter text-gray-700 leading-relaxed max-w-3xl mx-auto">
                            In early testing and peer reviews.
                        </p>
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
                            &quot;MockOraa helped me realise that my biggest issue was not knowledge but delivery. Practising in a realistic setup and getting clear feedback made me feel more confident and structured in my answers. I walked into my next interview feeling prepared rather than anxious.&quot;
                        </blockquote>
                        <p className="text-sm font-inter text-gray-600 text-center">
                            — Snehal, Fresher Candidate applying for job
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactResults;

