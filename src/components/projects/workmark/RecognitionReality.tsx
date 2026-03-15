'use client';

import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

const RecognitionReality: React.FC = () => {
    const barData = [
        { label: 'Rare recognition', value: 68, shade: 'bg-gray-800' },
        { label: 'Expect frequent', value: 71, shade: 'bg-gray-500' },
        { label: 'Receive regularly', value: 32, shade: 'bg-gray-300' },
    ];

    const impactCards = [
        { title: 'Lower motivation', description: 'Effort feels detached from outcomes.', icon: 'down' as const },
        { title: 'Reduced engagement', description: 'Recognition deserts weaken discretionary effort.', icon: 'down' as const },
        { title: 'Employee turnover', description: 'High performers leave when impact goes unseen.', icon: 'up' as const },
        { title: 'Weak culture', description: 'Teams stop connecting contribution with growth.', icon: 'down' as const },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="border-t border-gray-200 pt-4 mb-2">
                        <p className="text-xs uppercase tracking-wider text-gray-500 font-grotesk font-bold mb-4">
                            03 — PROOF THE PROBLEM IS REAL
                        </p>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-grotesk font-bold text-black mb-4">
                        The Recognition Reality
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 max-w-3xl leading-relaxed mb-12">
                        Research consistently shows a large gap between how often employees want recognition and how often they actually receive it.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left: Recognition Frequency Gap bar chart */}
                        <div className="bg-gray-100 border border-gray-200 rounded-xl p-8">
                            <h3 className="text-sm uppercase tracking-wider font-grotesk font-bold text-black mb-8">
                                Recognition Frequency Gap
                            </h3>
                            <div className="flex items-end gap-6 h-48">
                                {barData.map((bar, index) => (
                                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                                        <span className="text-sm font-grotesk font-bold text-black">
                                            {bar.value}%
                                        </span>
                                        <div
                                            className={`w-full ${bar.shade} rounded-t-lg transition-all`}
                                            style={{ height: `${(bar.value / 71) * 140}px` }}
                                        />
                                        <span className="text-xs font-inter text-black text-center">
                                            {bar.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: What this gap creates */}
                        <div className="bg-gray-100 border border-gray-200 rounded-xl p-8">
                            <h3 className="text-lg font-grotesk font-bold text-black mb-6">
                                What this gap creates inside organizations
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {impactCards.map((card, index) => (
                                    <div
                                        key={index}
                                        className="bg-white border border-gray-200 rounded-lg p-4"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="flex-shrink-0 text-black mt-0.5">
                                                {card.icon === 'up' ? (
                                                    <ArrowUp className="w-5 h-5" strokeWidth={2} />
                                                ) : (
                                                    <ArrowDown className="w-5 h-5" strokeWidth={2} />
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-grotesk font-bold text-black text-sm sm:text-base mb-1">
                                                    {card.title}
                                                </p>
                                                <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                                    {card.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecognitionReality;
