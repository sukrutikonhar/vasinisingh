'use client';

import React from 'react';
import { TrendingUp, Clock, Star, Phone } from 'lucide-react';

const Outcome: React.FC = () => {
    const metrics = [
        { icon: TrendingUp, label: 'Efficiency', value: '+150%', description: 'More jobs handled per day' },
        { icon: Clock, label: 'Time Saved', value: '3+ hrs', description: 'Daily time saved on paperwork' },
        { icon: Star, label: 'Satisfaction', value: '4.8/5', description: 'Customer satisfaction score' },
        { icon: Phone, label: 'Calls Reduced', value: '-60%', description: 'Fewer status inquiry calls' }
    ];

    return (
        <section className="py-20 bg-black text-white">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-grotesk font-bold mb-16 text-center">
                        Measurable Impact
                    </h2>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {metrics.map((metric, index) => (
                            <div
                                key={index}
                                className="border-2 border-white p-8 text-center hover:bg-white hover:text-black transition-all group"
                            >
                                <div className="flex justify-center mb-4">
                                    {React.createElement(metric.icon, {
                                        className: "w-10 h-10"
                                    })}
                                </div>
                                <div className="text-4xl font-grotesk font-bold mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-sm font-grotesk font-semibold uppercase tracking-wider mb-2">
                                    {metric.label}
                                </div>
                                <p className="text-sm font-inter opacity-80">
                                    {metric.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Key Results */}
                    <div className="border-2 border-white p-10">
                        <h3 className="text-2xl font-grotesk font-bold mb-6">
                            Business Outcomes
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-inter text-lg">
                            <div>
                                <p className="mb-2">✓ Shop owners handle 50% more jobs</p>
                                <p className="mb-2">✓ 90% reduction in missed appointments</p>
                                <p className="mb-2">✓ Digital records improve compliance</p>
                            </div>
                            <div>
                                <p className="mb-2">✓ Customers get updates automatically</p>
                                <p className="mb-2">✓ Revenue increased by 35% on average</p>
                                <p className="mb-2">✓ 85% customer retention rate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Outcome;

