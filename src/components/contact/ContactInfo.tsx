'use client';

import React from 'react';
import { Mail, Linkedin, Twitter, Github, Instagram, Coffee } from 'lucide-react';

const ContactInfo: React.FC = () => {
    const socialLinks = [
        { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/vasinisingh' },
        { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/vasinisingh' },
        { name: 'GitHub', icon: Github, url: 'https://github.com/vasinisingh' },
        { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/vasinisingh' }
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Direct Contact */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16">
                        {/* Email */}
                        <div className="border-2 border-black p-6 sm:p-8">
                            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black flex items-center justify-center">
                                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-grotesk font-bold text-black">
                                    Email Me
                                </h3>
                            </div>
                            <a
                                href="mailto:hello@vasinisingh.com"
                                className="text-base sm:text-lg font-inter text-gray-700 hover:text-black transition-colors break-all"
                            >
                                hello@vasinisingh.com
                            </a>
                        </div>

                        {/* Coffee Chat */}
                        <div className="border-2 border-black p-6 sm:p-8 bg-gray-50">
                            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black flex items-center justify-center">
                                    <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-grotesk font-bold text-black">
                                    Coffee Chat
                                </h3>
                            </div>
                            <p className="text-base sm:text-lg font-inter text-gray-700">
                                Always up for coffee and good design talk ☕
                            </p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="text-center">
                        <h3 className="text-xs sm:text-sm font-grotesk uppercase tracking-wider text-gray-500 mb-4 sm:mb-6">
                            Connect With Me
                        </h3>
                        <div className="flex items-center justify-center gap-3 sm:gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all group"
                                    aria-label={social.name}
                                    title={social.name}
                                >
                                    {React.createElement(social.icon, {
                                        className: "w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform"
                                    })}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;

