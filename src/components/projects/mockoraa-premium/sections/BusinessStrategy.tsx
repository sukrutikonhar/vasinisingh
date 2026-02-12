'use client';

import React from 'react';

const BusinessStrategy: React.FC = () => {
    return (
        <section className="py-32 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-5xl font-bold mb-8">From Product to Platform</h2>
                <p className="text-xl text-gray-300 mb-16 max-w-3xl">
                    Scalability logic and long-term viability through strategic business model design.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                        <h3 className="text-xl font-semibold mb-4">Revenue Projection</h3>
                        <div className="aspect-[4/3] bg-gray-800 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-gray-400 mb-2">[Chart Placeholder]</div>
                                <div className="text-sm text-gray-500">Revenue Growth</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                        <h3 className="text-xl font-semibold mb-6">Subscription Tiers</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                                <span>Individual</span>
                                <span className="text-gray-400">$29/month</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                                <span>Professional</span>
                                <span className="text-gray-400">$79/month</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                                <span>Enterprise</span>
                                <span className="text-gray-400">Custom</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
                    <h3 className="text-2xl font-bold mb-4">Platform Scalability</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Corporate packages enable bulk licensing for universities and enterprises, 
                        while API access allows integration with existing HR systems and LMS platforms.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BusinessStrategy;