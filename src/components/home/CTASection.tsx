'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
    return (
        <section className="py-16 sm:py-24 md:py-32 bg-black text-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-grotesk font-bold mb-6 sm:mb-8">
                        Let&apos;s Work Together
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 font-inter mb-8 sm:mb-12 max-w-2xl mx-auto">
                        Have a project in mind? I&apos;d love to hear about it.
                        Let&apos;s create something meaningful together.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-black px-6 py-3 sm:px-8 sm:py-4 font-medium hover:bg-gray-100 transition-all group rounded-[12px]"
                        >
                            <span className="mr-2 text-sm sm:text-base">Get in Touch</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                            href="mailto:vasinisingh@gmail.com"
                            className="inline-flex items-center justify-center w-full sm:w-auto border-2 border-white px-6 py-3 sm:px-8 sm:py-4 font-medium hover:bg-white hover:text-black transition-all group rounded-[12px]"
                        >
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            <span className="text-sm sm:text-base">vasinisingh@gmail.com</span>
                        </a>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default CTASection;

