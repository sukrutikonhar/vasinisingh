'use client';

import React from 'react';
import Image from 'next/image';

const DesignProcess: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-grotesk font-bold text-black mb-8">
                        Design & Visual System
                    </h2>

                    <p className="text-xl font-inter text-gray-700 leading-relaxed mb-12">
                        Created a mobile-first design system with a friendly, approachable aesthetic that
                        reduces the intimidation factor for non-tech-savvy workshop owners.
                    </p>

                    {/* Design Screens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="border-2 border-black overflow-hidden bg-white p-8">
                            <Image
                                src="/images/projects/Arreglio/Phone Mock.webp"
                                alt="Mobile mockup"
                                width={400}
                                height={800}
                                className="w-full h-auto mx-auto"
                            />
                        </div>
                        <div className="border-2 border-black overflow-hidden bg-gray-100">
                            <Image
                                src="/images/projects/Arreglio/arreglio-UI-01.webp"
                                alt="UI design system"
                                width={600}
                                height={800}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Design Principles */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white border-2 border-black p-6">
                            <h3 className="text-xl font-grotesk font-bold text-black mb-3">
                                Mobile First
                            </h3>
                            <p className="font-inter text-gray-700">
                                Designed for on-the-go use by both customers and shop owners
                            </p>
                        </div>
                        <div className="bg-white border-2 border-black p-6">
                            <h3 className="text-xl font-grotesk font-bold text-black mb-3">
                                Simple & Clear
                            </h3>
                            <p className="font-inter text-gray-700">
                                Reduced cognitive load with clear labels and intuitive navigation
                            </p>
                        </div>
                        <div className="bg-white border-2 border-black p-6">
                            <h3 className="text-xl font-grotesk font-bold text-black mb-3">
                                Trust Building
                            </h3>
                            <p className="font-inter text-gray-700">
                                Professional design that builds confidence in the platform
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignProcess;

