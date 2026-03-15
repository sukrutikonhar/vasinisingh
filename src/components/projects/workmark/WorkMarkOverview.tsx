'use client';

import React from 'react';

const WorkmarkOverview: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 bg-black text-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white text-black p-6">
                            <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-grotesk font-bold">
                                Region
                            </div>
                            <div className="text-lg font-grotesk font-bold leading-relaxed">
                                Hyderabad, India
                            </div>
                        </div>

                        <div className="bg-white text-black p-6">
                            <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-grotesk font-bold">
                                Year
                            </div>
                            <div className="text-lg font-grotesk font-bold leading-relaxed">
                                2026
                            </div>
                        </div>

                        <div className="bg-white text-black p-6">
                            <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-grotesk font-bold">
                                Role
                            </div>
                            <div className="text-lg font-grotesk font-bold leading-relaxed">
                                Senior Product Designer
                            </div>
                        </div>

                        <div className="bg-white text-black p-6">
                            <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-grotesk font-bold">
                                Timeline
                            </div>
                            <div className="text-lg font-grotesk font-bold leading-relaxed">
                                1 week concept sprint
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkmarkOverview;
