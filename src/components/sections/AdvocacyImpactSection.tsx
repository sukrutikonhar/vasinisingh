import React from 'react';
import Image from 'next/image';

const AdvocacyImpactSection: React.FC = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <div className="space-y-8">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
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
                            <Image
                                src="/images/advocacy-impact.jpg"
                                alt="Advocacy and Impact work"
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvocacyImpactSection;
