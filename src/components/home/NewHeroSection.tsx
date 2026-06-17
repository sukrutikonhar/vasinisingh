'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';

const NewHeroSection: React.FC = () => {
    return (
        <section className="min-h-[85vh] flex items-center bg-white pt-24 pb-16 sm:pt-28 sm:pb-20">
            <div className="container-custom w-full px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
                    <div className="lg:col-span-7 space-y-6">
                        <div className="space-y-2">
                            <p className="text-2xl sm:text-3xl font-grotesk font-bold text-black tracking-tight">
                                Vasini Singh
                            </p>
                            <p className="text-base sm:text-lg font-inter text-gray-600">
                                Senior Product Designer
                            </p>
                        </div>

                        <p className="text-xl sm:text-2xl md:text-3xl font-grotesk font-bold text-black leading-snug max-w-xl">
                            Shaping calm, strategic product experiences for SaaS teams and ambitious digital products.
                        </p>

                        <p className="text-base sm:text-lg font-inter text-gray-700 leading-relaxed max-w-xl">
                            Eight years in product design, with eight more before that in back-office operations and community management. I help complex systems feel simple, trustworthy, and worth the user&apos;s time.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <Link
                                href="/projects"
                                className="group inline-flex items-center justify-center bg-black text-white px-7 py-3.5 font-grotesk font-medium hover:bg-gray-800 transition-all rounded-[12px]"
                            >
                                <span className="mr-2">View Work</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="/vasini-singh-resume.pdf"
                                download
                                className="group inline-flex items-center justify-center border-2 border-black px-7 py-3.5 font-grotesk font-medium hover:bg-black hover:text-white transition-all rounded-[12px]"
                            >
                                <Download className="w-4 h-4 mr-2" />
                                <span>Download Resume</span>
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-sm">
                            <div className="relative h-[360px] sm:h-[440px] w-full border border-gray-200 overflow-hidden rounded-lg bg-gray-50">
                                <Image
                                    src="/images/vasini.webp"
                                    alt="Vasini Singh, Senior Product Designer"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewHeroSection;
