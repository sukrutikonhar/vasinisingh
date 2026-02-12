'use client';

import React from 'react';

const DesignSystem: React.FC = () => {
    return (
        <section className="py-32 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-5xl font-bold mb-8">Designing for Calm, Clarity and Confidence</h2>
                <p className="text-xl text-gray-300 mb-16 max-w-3xl">
                    Systematic approach to consistency, accessibility, and hierarchy logic across all touchpoints.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                        <h3 className="text-xl font-semibold mb-4">Design System Board</h3>
                        <div className="aspect-[4/3] bg-gray-800 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-gray-400 mb-2">[Image Placeholder]</div>
                                <div className="text-sm text-gray-500">Design System Board</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                        <h3 className="text-xl font-semibold mb-4">Component Library</h3>
                        <div className="aspect-[4/3] bg-gray-800 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-gray-400 mb-2">[Image Placeholder]</div>
                                <div className="text-sm text-gray-500">Component Library</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignSystem;