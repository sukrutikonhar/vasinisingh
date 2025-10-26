import React from 'react';
import Image from 'next/image';
import { typography, spacing, containers } from '@/lib/typography';

const PhilosophySection: React.FC = () => {
    return (
        <section className={`bg-white ${spacing.section}`}>
            <div className={containers.main}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left - Illustration */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="w-full max-w-md">
                            <div className="relative w-full h-80 sm:h-96 overflow-hidden">
                                <Image
                                    src="/images/s_image_text.svg"
                                    alt="Design philosophy illustration"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right - Quote */}
                    <div className="space-y-6">
                        <blockquote className={`${typography.quote.large} text-gray-900`}>
                            &ldquo;I believe design is not just about pixels, it is about shaping journeys, empowering people, and creating products that leave a lasting impact.&rdquo;
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
