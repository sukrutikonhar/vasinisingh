'use client';

import React from 'react';
import Image from 'next/image';

const DesignProcess: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-6 sm:mb-8">
                        Design & Visual System
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl font-inter text-gray-700 leading-relaxed mb-8 sm:mb-12">
                        I developed a clean, professional visual system focused on data clarity and usability.
                        The design prioritizes information hierarchy and makes complex ESG data digestible.
                    </p>

                    {/* Main Design Image */}
                    <div className="overflow-hidden mb-8 sm:mb-12 rounded-[6px] shadow-card">
                        <Image
                            src="/images/projects/ecoprism/Landing page.webp"
                            alt="ecoPRISM Dashboard"
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                            priority
                        />
                    </div>

                    {/* Design Principles */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-[6px] shadow-card">
                            <h3 className="text-xl font-grotesk font-bold text-black mb-3">
                                Clear Hierarchy
                            </h3>
                            <p className="font-inter text-gray-700">
                                Organized information with visual weight to guide users through complex data
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-[6px] shadow-card">
                            <h3 className="text-xl font-grotesk font-bold text-black mb-3">
                                Consistent Patterns
                            </h3>
                            <p className="font-inter text-gray-700">
                                Established design patterns for predictable and intuitive interactions
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-[6px] shadow-card">
                            <h3 className="text-xl font-grotesk font-bold text-black mb-3">
                                Accessibility First
                            </h3>
                            <p className="font-inter text-gray-700">
                                Ensured WCAG compliance and readable contrast ratios throughout
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignProcess;

