import React from 'react';
import Image from 'next/image';
import { typography } from '@/lib/typography';

const BeyondDesignSection: React.FC = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-md">
                            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/About us/WhatsApp Image 2025-09-28 at 6.26.00 PM.webp"
                                    alt="Photography equipment and creative process"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-6">
                        <h2 className={`${typography.h2.section} text-gray-900`} style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>
                            Beyond Design
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            When I&apos;m not designing, I&apos;m behind the lens. Photography is where I train my eye to{' '}
                            <span className="text-red-500 font-semibold">notice</span>{' '}
                            the unnoticed light, detail, emotion. It deeply influences how I craft digital experiences: attentive, immersive, and story driven.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeyondDesignSection;
