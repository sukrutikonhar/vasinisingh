import React from 'react';
import Image from 'next/image';
import { typography } from '@/lib/typography';

const AdvocacyImpactSection: React.FC = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <div className="space-y-8">
                        <h2 className={`${typography.h2.section} text-gray-900`} style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>
                            Beyond Design: Advocacy & Impact
                        </h2>

                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                I&apos;m an active POSH Committee Member with Chhanv Foundation, a non-profit supporting acid attack survivors, focusing on rehabilitation, advocacy and awareness.
                            </p>

                            <p>
                                This work deepens my understanding of resilience, empathy and dignity. It reminds me that design is about shaping lives, voices and communities with purpose.
                            </p>
                        </div>
                    </div>

                    {/* Right - Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md h-80 lg:h-96">
                            <div className="relative w-full h-full overflow-hidden">
                                <Image
                                    src="/images/About us/about-04.webp"
                                    alt="Advocacy and Impact work"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto text-center mt-5">
                    <h2 className={`${typography.h2.section} text-gray-900`} style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>
                        Let&apos;s Climb Together
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default AdvocacyImpactSection;
