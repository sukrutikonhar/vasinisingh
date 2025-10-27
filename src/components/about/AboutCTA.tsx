'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';

const AboutCTA: React.FC = () => {
    return (
        <section className="py-32 bg-white border-t-2 border-gray-200">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-grotesk font-bold text-black mb-8">
                        Let&apos;s Collaborate
                    </h2>
                    <p className="text-xl font-inter text-gray-600 mb-12 max-w-2xl mx-auto">
                        I&apos;m always excited to work on meaningful projects with passionate teams.
                        Let&apos;s create something amazing together.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/contact"
                            className="inline-flex items-center bg-black text-white px-10 py-5 font-grotesk font-semibold hover:bg-gray-800 transition-all group"
                        >
                            <span className="mr-2">Contact Me</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center border-2 border-black px-10 py-5 font-grotesk font-semibold hover:bg-black hover:text-white transition-all group"
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

