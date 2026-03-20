'use client';

import React from 'react';

const WorkmarkOverview: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 bg-black text-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        <div className="bg-white text-black p-6 sm:p-8 rounded-lg">
                            <div className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-grotesk font-bold">
                                Role
                            </div>
                            <div className="text-sm sm:text-base font-semibold mb-2">
                                Senior Product Designer
                            </div>
                            <div className="text-xs sm:text-sm font-inter text-gray-600 leading-relaxed">
                                End-to-end UX, Strategy, AI Experience
                            </div>
                        </div>

                        <div className="bg-white text-black p-6 sm:p-8 rounded-lg">
                            <div className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-grotesk font-bold">
                                Product
                            </div>
                            <div className="text-sm sm:text-base font-semibold">
                                AI-powered B2B SaaS
                                <br />
                                <span>HR Tech | 0 → 1 MVP</span>
                            </div>
                        </div>

                        <div className="bg-white text-black p-6 sm:p-8 rounded-lg">
                            <div className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-grotesk font-bold">
                                Scope
                            </div>
                            <div className="text-sm sm:text-base font-semibold">
                                End-to-end ownership
                                <br />
                                <span>3 user roles</span>
                                <br />
                                <span>AI-driven evidence design</span>
                            </div>
                        </div>

                        <div className="bg-white text-black p-6 sm:p-8 rounded-lg">
                            <div className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-grotesk font-bold">
                                Outcomes
                            </div>
                            <div className="space-y-1">
                                <div className="text-sm font-semibold">+30% recognition frequency</div>
                                <div className="text-sm font-semibold">−60% review prep time</div>
                                <div className="text-sm font-semibold">+18% productivity</div>
                                <div className="text-sm font-semibold">+25% retention</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkmarkOverview;
