import React from 'react';
import Image from 'next/image';

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
                                    src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=400&fit=crop&auto=format&q=80"
                                    alt="Photography equipment and creative process"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
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
