'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, ArrowRight, Linkedin, Twitter, Github, Instagram } from 'lucide-react';

const CTASection: React.FC = () => {
    const socialLinks = [
        { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/vasinisingh', ariaLabel: 'Connect on LinkedIn' },
        { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/vasinisingh', ariaLabel: 'Follow on Twitter' },
        { name: 'GitHub', icon: Github, url: 'https://github.com/vasinisingh', ariaLabel: 'View GitHub Profile' },
        { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/vasinisingh', ariaLabel: 'Follow on Instagram' }
    ];

    return (
        <section className="py-32 bg-black text-white">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-grotesk font-bold mb-8">
                        Let&apos;s Work Together
                    </h2>
                    <p className="text-xl text-gray-300 font-inter mb-12 max-w-2xl mx-auto">
                        Have a project in mind? I&apos;d love to hear about it.
                        Let&apos;s create something meaningful together.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/contact"
                            className="inline-flex items-center bg-white text-black px-8 py-4 font-medium hover:bg-gray-100 transition-all group"
                        >
                            <span className="mr-2">Get in Touch</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                            href="mailto:hello@vasinisingh.com"
                            className="inline-flex items-center border-2 border-white px-8 py-4 font-medium hover:bg-white hover:text-black transition-all group"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            <span>hello@vasinisingh.com</span>
                        </a>
                    </div>

                    {/* Social Links Section */}
                    <div className="mt-20 mb-12">
                        <p className="text-sm font-grotesk uppercase tracking-wider text-gray-500 mb-6">
                            Connect With Me
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                                    aria-label={social.ariaLabel}
                                    title={social.name}
                                >
                                    {React.createElement(social.icon, {
                                        className: "w-6 h-6 group-hover:scale-110 transition-transform"
                                    })}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="pt-12 border-t border-gray-800">
                        <p className="text-sm text-gray-500 font-inter">
                            © {new Date().getFullYear()} Vasini Singh. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;

