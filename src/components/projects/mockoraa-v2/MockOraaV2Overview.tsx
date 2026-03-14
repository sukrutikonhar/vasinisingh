'use client';

import React from 'react';

const MockOraaV2Overview: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 bg-black text-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Project Details Grid - same design as before, updated content */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white text-black p-6">
                            <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-grotesk font-bold">
                                My Role
                            </div>
                            <div className="text-lg font-grotesk font-bold leading-relaxed">
                                Senior Product Designer
                            </div>
                            <div className="text-sm font-inter text-gray-600 mt-1 leading-relaxed">
                                End-to-end UX/UI, Research, Strategy
                            </div>
                        </div>

                        <div className="bg-white text-black p-6">
                            <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-grotesk font-bold">
                                Timeline & Team
                            </div>
                            <div className="text-lg font-grotesk font-bold">
                                6 Weeks
                            </div>
                            <div className="text-sm font-inter text-gray-600 mt-1 leading-relaxed">
                                8 Cross-functional members
                            </div>
                        </div>

                        <div className="bg-white text-black p-6">
                            <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-grotesk font-bold">
                                Key Tools
                            </div>
                            <div className="text-lg font-grotesk font-bold leading-relaxed">
                                Figma, Maze, Dovetail
                            </div>
                            <div className="text-sm font-inter text-gray-600 mt-1 leading-relaxed">
                                WebRTC, LLM Integration
                            </div>
                        </div>

                        <div className="bg-white text-black p-6">
                            <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-grotesk font-bold">
                                Business Outcome
                            </div>
                            <div className="text-lg font-grotesk font-bold">
                                81 SUS Score
                            </div>
                            <div className="text-sm font-inter text-gray-600 mt-1 leading-relaxed">
                                31% faster task completion
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MockOraaV2Overview;