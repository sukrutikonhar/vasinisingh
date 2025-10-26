import React from 'react';
import Image from 'next/image';
import { typography, spacing, containers } from '@/lib/typography';

const WandererDesignerSection: React.FC = () => {
    return (
        <section className={`bg-white ${spacing.section}`}>
            <div className={containers.main}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-md">
                            <div className="relative w-full h-96 overflow-hidden">
                                <Image
                                    src="/images/About us/about-02.webp"
                                    alt="Forest bridge representing exploration and design journey"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-6">
                        <h2 className={`${typography.h2.section} text-gray-900`} style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>
                            The Wanderer & The Designer
                        </h2>

                        <p className={`${typography.body.large} text-gray-700`} style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                            I&apos;m Vasini Singh, a Product Designer and Photographer with more than seven years of experience in SaaS platforms and intuitive digital products. My journey started in biotechnology, but I found my true calling in design, focusing on clarity, usability, creativity and empathy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WandererDesignerSection;
