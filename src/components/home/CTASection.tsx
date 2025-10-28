'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, ArrowRight, Linkedin, Twitter, Github, Instagram } from 'lucide-react';

const CTASection: React.FC = () => {
    const socialLinks = [
        { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/vasini-singh-18a442205/', ariaLabel: 'Connect on LinkedIn' },
        { name: 'Twitter/X', icon: Twitter, url: 'https://x.com/VasiniSingh', ariaLabel: 'Follow on Twitter/X' },
        { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/ghumakkkad_ladki/', ariaLabel: 'Follow on Instagram' },
        { name: 'Medium', icon: Github, url: 'https://medium.com/@vasinisingh', ariaLabel: 'Read on Medium' }
    ];

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
                            className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-black px-6 py-3 sm:px-8 sm:py-4 font-medium hover:bg-gray-100 transition-all group"
                        >
                            <span className="mr-2 text-sm sm:text-base">Get in Touch</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                            href="mailto:vasinisingh@gmail.com"
                            className="inline-flex items-center justify-center w-full sm:w-auto border-2 border-white px-6 py-3 sm:px-8 sm:py-4 font-medium hover:bg-white hover:text-black transition-all group"
                        >
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            <span className="text-sm sm:text-base">vasinisingh@gmail.com</span>
                        </a>
                    </div>

                    {/* Social Links Section */}
                    <div className="mt-12 sm:mt-16 md:mt-20 mb-8 sm:mb-12">
                        <p className="text-xs sm:text-sm font-grotesk uppercase tracking-wider text-gray-500 mb-4 sm:mb-6">
                            Connect With Me
                        </p>
                        <div className="flex items-center justify-center gap-3 sm:gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                                    aria-label={social.ariaLabel}
                                    title={social.name}
                                >
                                    {React.createElement(social.icon, {
                                        className: "w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform"
                                    })}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="pt-8 sm:pt-12 border-t border-gray-800">
                        <p className="text-xs sm:text-sm text-gray-500 font-inter">
                            © {new Date().getFullYear()} Vasini Singh. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;

