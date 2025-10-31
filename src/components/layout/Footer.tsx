'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Instagram } from 'lucide-react';
import { Icon } from '@iconify/react';

const Footer: React.FC = () => {
    const socialLinks = [
        { name: 'LinkedIn', type: 'lucide' as const, icon: Linkedin, url: 'https://www.linkedin.com/in/vasini-singh-18a442205/', ariaLabel: 'Connect on LinkedIn' },
        { name: 'Twitter/X', type: 'iconify' as const, icon: 'simple-icons:x', url: 'https://x.com/VasiniSingh', ariaLabel: 'Follow on Twitter/X' },
        { name: 'Instagram', type: 'lucide' as const, icon: Instagram, url: 'https://www.instagram.com/ghumakkkad_ladki/', ariaLabel: 'Follow on Instagram' },
        { name: 'Medium', type: 'iconify' as const, icon: 'simple-icons:medium', url: 'https://medium.com/@vasinisingh', ariaLabel: 'Read on Medium' }
    ];

    return (
        <footer className="bg-[#202022] border-t-2 border-gray-800">
            <div className="container-custom px-4 sm:px-6 !py-10 !sm:py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Top Section - Logo and Social Icons */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-12 mb-10">
                        {/* Logo */}
                        <Link href="/" className="flex flex-col items-start hover:opacity-70 transition-opacity">
                            <div className="relative w-[80px] sm:w-[100px] mx-auto">
                                <Image
                                    src="/images/logo/logo-light.webp"
                                    alt="Vasini Singh Logo"
                                    width={100}
                                    height={100}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <span className="text-lg sm:text-xl font-grotesk font-bold text-white whitespace-nowrap">
                                VASINI SINGH
                            </span>
                        </Link>

                        {/* Social Icons */}
                        <div className="flex items-center justify-center gap-3 sm:gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 sm:w-12 sm:h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#202022] transition-all group"
                                    aria-label={social.ariaLabel}
                                    title={social.name}
                                >
                                    {social.type === 'lucide' ? (
                                        React.createElement(social.icon, {
                                            className: "w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform text-white group-hover:text-[#202022]"
                                        })
                                    ) : (
                                        <Icon
                                            icon={social.icon}
                                            className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform text-white group-hover:text-[#202022]"
                                        />
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Section - Copyright */}
                    <div className="border-t border-gray-700 pt-6 sm:pt-8">
                        <p className="text-xs sm:text-sm text-gray-400 font-inter text-center">
                            © {new Date().getFullYear()} Vasini Singh. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

