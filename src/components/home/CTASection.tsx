'use client';

import { h2Page } from '@/lib/typography';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';

const CTASection: React.FC = () => {
    return (
        <section className="py-16 sm:py-24 bg-black text-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className={`${h2Page} mb-5 sm:mb-6`}>
                        Let&apos;s design something calm and useful.
                    </h2>
                    <p className="text-base sm:text-lg text-gray-300 font-inter mb-8 sm:mb-10 leading-relaxed">
                        I work with SaaS and enterprise teams on products that have to earn the user&apos;s trust before they earn their action. If that sounds like the kind of project on your roadmap, get in touch.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-black px-7 py-3.5 font-grotesk font-medium hover:bg-gray-100 transition-all group rounded-[12px]"
                        >
                            <span className="mr-2">Contact Me</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                            href="/vasini-singh-resume.pdf"
                            download
                            className="inline-flex items-center justify-center w-full sm:w-auto border-2 border-white px-7 py-3.5 font-grotesk font-medium hover:bg-white hover:text-black transition-all group rounded-[12px]"
                        >
                            <Download className="w-4 h-4 mr-2" />
                            <span>Download Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
