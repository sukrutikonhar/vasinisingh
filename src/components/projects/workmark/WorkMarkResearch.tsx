'use client';

import React from 'react';

export default function WorkMarkResearch() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-grotesk font-bold mb-4">RESEARCH & DISCOVERY</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-6">
                        Research & Discovery
                    </h2>
                    <p className="text-base font-inter text-gray-600 mb-12 max-w-3xl leading-relaxed">
                        Descriptive text for the research and discovery phase goes here.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div>
                            <h3 className="text-sm font-grotesk font-bold uppercase tracking-wider text-black mb-3">USER INTERVIEWS</h3>
                            <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                User interviews content and findings go here.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm font-grotesk font-bold uppercase tracking-wider text-black mb-3">COMPETITIVE ANALYSIS</h3>
                            <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                Competitive analysis content and findings go here.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm font-grotesk font-bold uppercase tracking-wider text-black mb-3">SURVEYS</h3>
                            <p className="text-sm font-inter text-gray-600 leading-relaxed">
                                Survey content and findings go here.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        <div className="bg-gray-100 rounded-lg flex items-center justify-center min-h-[280px]">
                            <p className="text-gray-400 text-sm font-inter">Image placeholder</p>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-grotesk font-bold uppercase tracking-wider text-black mb-2">Goals</h4>
                                <ul className="space-y-1 text-sm font-inter text-gray-600">
                                    <li>• Goal item one</li>
                                    <li>• Goal item two</li>
                                    <li>• Goal item three</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-grotesk font-bold uppercase tracking-wider text-black mb-2">Key Metrics</h4>
                                <ul className="space-y-1 text-sm font-inter text-gray-600">
                                    <li>• Metric one</li>
                                    <li>• Metric two</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-grotesk font-bold uppercase tracking-wider text-black mb-2">Target Audience</h4>
                                <ul className="space-y-1 text-sm font-inter text-gray-600">
                                    <li>• Audience segment one</li>
                                    <li>• Audience segment two</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
