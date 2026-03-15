'use client';

import { TrendingUp, Star, Clock } from 'lucide-react';

const metrics = [
    { value: '25%', label: 'Increase in Productivity', icon: TrendingUp },
    { value: '4.5', label: 'User Satisfaction Rating', icon: Star },
    { value: '30 days', label: 'Average Project Completion Time', icon: Clock },
];

export default function MetricsImpact() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-black mb-6">Metrics & Impact</h2>
                    <p className="text-base font-inter text-gray-600 mb-10 max-w-3xl leading-relaxed">
                        Post-launch metrics showed meaningful improvements in productivity, satisfaction, and project completion times.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {metrics.map((item, i) => (
                            <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
                                <item.icon className="w-8 h-8 text-black mx-auto mb-4" />
                                <p className="text-3xl sm:text-4xl font-grotesk font-bold text-black mb-2">{item.value}</p>
                                <p className="text-sm font-inter text-gray-600">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
