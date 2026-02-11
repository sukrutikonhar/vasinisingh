'use client';

import React from 'react';

const MockOraaV2Overview: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-900 text-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Project Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white text-black p-6 rounded-lg">
                            <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-grotesk font-bold">
                                ROLE
                            </div>
                            <div className="text-lg font-grotesk font-bold leading-relaxed">
                                Design Research & Product Ideation Specialist
                            </div>
                        </div>
                        
                        <div className="bg-white text-black p-6 rounded-lg">
                            <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-grotesk font-bold">
                                TIMELINE
                            </div>
                            <div className="text-lg font-grotesk font-bold">
                                6 Weeks
                            </div>
                        </div>
                        
                        <div className="bg-white text-black p-6 rounded-lg">
                            <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-grotesk font-bold">
                                TEAM
                            </div>
                            <div className="text-lg font-grotesk font-bold leading-relaxed">
                                Cross functional team of 8
                            </div>
                        </div>
                        
                        <div className="bg-white text-black p-6 rounded-lg">
                            <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-grotesk font-bold">
                                INDUSTRY
                            </div>
                            <div className="text-lg font-grotesk font-bold leading-relaxed">
                                AI × HR Tech × EdTech
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MockOraaV2Overview;