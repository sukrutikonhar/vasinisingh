'use client';

import React from 'react';

const Iterations: React.FC = () => {
    return (
        <section className="py-32 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-5xl font-bold mb-8">Iterations — Before vs After</h2>
                <p className="text-xl text-gray-300 mb-16 max-w-3xl">
                    Data-driven design changes resulting in 31% time reduction and improved user confidence.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                        <h3 className="text-xl font-semibold mb-4">Before</h3>
                        <div className="aspect-[4/3] bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                            <div className="text-center">
                                <div className="text-gray-400 mb-2">[Image Placeholder]</div>
                                <div className="text-sm text-gray-500">Before UI</div>
                            </div>
                        </div>
                        <p className="text-gray-400">Overwhelming feedback caused cognitive overload</p>
                    </div>
                    
                    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                        <h3 className="text-xl font-semibold mb-4">After</h3>
                        <div className="aspect-[4/3] bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                            <div className="text-center">
                                <div className="text-gray-400 mb-2">[Image Placeholder]</div>
                                <div className="text-sm text-gray-500">After UI</div>
                            </div>
                        </div>
                        <p className="text-gray-400">Streamlined interface with progressive disclosure</p>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
                    <h3 className="text-2xl font-bold mb-4">Key Changes & Impact</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li>• Moved detailed feedback to post-session → Reduced cognitive load</li>
                        <li>• Introduced calm color palette → Decreased anxiety levels</li>
                        <li>• Simplified real-time indicators → Improved focus on speaking</li>
                        <li>• Added supportive micro-interactions → Increased confidence</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Iterations;