'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://www.linkedin.com/in/vasini-singh-18a442205/',
            ariaLabel: 'Connect on LinkedIn'
        },
        {
            name: 'Twitter/X',
            icon: Twitter,
            url: 'https://x.com/VasiniSingh',
            ariaLabel: 'Follow on Twitter/X'
        },
        {
            name: 'Instagram',
            icon: Instagram,
            url: 'https://www.instagram.com/ghumakkkad_ladki/',
            ariaLabel: 'Follow on Instagram'
        },
        {
            name: 'Medium',
            icon: Github,
            url: 'https://medium.com/@vasinisingh',
            ariaLabel: 'Read on Medium'
        }
    ];

    return (
        <footer className="bg-black text-white relative border-t-2 border-white">
            <div className="container-custom px-4 sm:px-6">
                {/* Main Footer Content */}
                <div className="py-12 sm:py-16 md:py-20">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
                        {/* Left Side - Logo & Copyright */}
                        <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
                            {/* Logo */}
                            <Link href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
                                <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                                    <Image
                                        src="/images/About us/about-03.webp"
                                        alt="Vasini Singh Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-xl sm:text-2xl font-grotesk font-bold text-white">
                                    VASINI SINGH
                                </span>
                            </Link>

                            {/* Tagline */}
                            <p className="text-sm sm:text-base font-inter text-gray-400 max-w-md">
                                Product Designer crafting meaningful experiences through human-centered design.
                            </p>

                            {/* Copyright */}
                            <p className="text-xs sm:text-sm font-inter text-gray-500">
                                © {currentYear} Vasini Singh. All rights reserved.
                            </p>
                        </div>

                        {/* Right Side - Social & Contact */}
                        <div className="flex flex-col items-center lg:items-end gap-6">
                            {/* Connect With Me Label */}
                            <div className="text-center lg:text-right">
                                <p className="text-xs sm:text-sm font-grotesk uppercase tracking-wider text-gray-500 mb-4">
                                    Connect With Me
                                </p>

                                {/* Social Icons */}
                                <div className="flex items-center justify-center lg:justify-end gap-3 sm:gap-4">
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

                            {/* Email */}
                            <a
                                href="mailto:vasinisingh@gmail.com"
                                className="text-sm sm:text-base font-inter text-gray-400 hover:text-white transition-colors"
                            >
                                vasinisingh@gmail.com
                            </a>

                            {/* Quick Links */}
                            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-inter">
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                    Home
                                </Link>
                                <span className="text-gray-700">•</span>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                                    About
                                </Link>
                                <span className="text-gray-700">•</span>
                                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                                    Work
                                </Link>
                                <span className="text-gray-700">•</span>
                                <Link href="/blogs" className="text-gray-400 hover:text-white transition-colors">
                                    Blogs
                                </Link>
                                <span className="text-gray-700">•</span>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-white text-black border-2 border-black shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 cursor-pointer"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
            )}
        </footer>
    );
};

export default Footer;
