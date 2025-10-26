import React from 'react';
import Image from 'next/image';
import { typography, spacing, containers } from '@/lib/typography';

const MountainPathSection: React.FC = () => {
    return (
        <section className={`bg-white ${spacing.section}`}>
            <div className={containers.main}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <div className="space-y-8">
                        <h2 className={`${typography.h2.section} text-gray-900`} style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>
                            The Mountain Path Begins
                        </h2>

                        <p className={`${typography.body.large} text-gray-700`} style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                            Design is a journey of climbs, milestones and discoveries. I blend product design, UI UX design, photography and exploration to create meaningful digital products and visual stories.
                        </p>
                    </div>

                    {/* Right - Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md">
                            <div className="relative w-full h-96 overflow-hidden">
                                <Image
                                    src="/images/About us/about-01.webp"
                                    alt="Mountain landscape representing design journey"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MountainPathSection;
