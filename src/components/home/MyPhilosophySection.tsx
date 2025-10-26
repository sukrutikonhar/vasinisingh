import React from 'react';
import Image from 'next/image';
import { typography } from '@/lib/typography';

const MyPhilosophySection: React.FC = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left - Content */}
                    <div className="space-y-8">
                        <h2 className={`${typography.h2.section} text-gray-900`} style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>
                            My Philosophy
                        </h2>

                        <div className="space-y-6">
                            <p className="text-lg text-gray-700">
                                At the heart of my design journey lies one principle:{' '}
                                <span className="text-red-500 font-semibold">
                                    design is a conversation between people and technology.
                                </span>
                            </p>

                            <div className="space-y-4">
                                <p className="text-lg text-gray-700">
                                    I approach every project by asking:
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start space-x-3">
                                        <span className="text-red-500 font-bold mt-1">•</span>
                                        <span className="text-lg text-gray-700">
                                            <span className="text-red-500 font-semibold">What problem are we truly solving?</span>
                                        </span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <span className="text-red-500 font-bold mt-1">•</span>
                                        <span className="text-lg text-gray-700">
                                            <span className="text-red-500 font-semibold">How can this solution make life simpler, meaningful, and empowering?</span>
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-lg text-gray-700">
                                I thrive on translating research, data, and business needs into human-centered design systems that are not only functional but also engaging and emotionally resonant.
                            </p>
                        </div>
                    </div>

                    {/* Right - Illustration */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-md">
                            <div className="relative w-full h-96 overflow-hidden">
                                <Image
                                    src="/images/s_text_image.svg"
                                    alt="Design philosophy illustration"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyPhilosophySection;
