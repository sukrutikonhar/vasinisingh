'use client';

import { h2Page } from '@/lib/typography';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';

const AboutCTA: React.FC = () => {
    return (
        <section className="py-24 sm:py-32 bg-white border-t border-gray-200">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className={`${h2Page} mb-5 sm:mb-6`}>
                        Let&apos;s design something calm and useful.
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 mb-8 sm:mb-10 leading-relaxed">
                        I&apos;m looking for senior product design work on complex SaaS products and enterprise tools where the design has to earn the user&apos;s trust before it earns their action. If that sounds like the kind of project on your roadmap, I&apos;d love to talk.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center bg-black text-white px-8 py-4 font-grotesk font-semibold hover:bg-gray-800 transition-all group rounded-[12px]"
                        >
                            <span className="mr-2">Contact Me</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                            href="/vasini-singh-resume.pdf"
                            download
                            className="inline-flex items-center border-2 border-black px-8 py-4 font-grotesk font-semibold hover:bg-black hover:text-white transition-all group rounded-[12px]"
                        >
                            <Download className="w-5 h-5 mr-2" />
                            <span>Download Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCTA;
