'use client';

import React from 'react';

const AboutIntro: React.FC = () => {
    return (
        <section className="py-16 sm:py-24 md:py-32 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black mb-8 sm:mb-12">
                        My Journey
                    </h2>

                    <div className="space-y-6 sm:space-y-8 text-base sm:text-lg font-inter text-gray-800 leading-relaxed">
                        <div className="border-l-2 sm:border-l-4 border-black pl-4 sm:pl-8">
                            <p className="mb-6">
                                Hi, I'm Vasini, a designer who believes great design begins with empathy and curiosity.
                            </p>
                            <p>
                                My path into design started with a fascination: how small details shape how people feel, connect, and interact. That curiosity evolved into crafting meaningful digital experiences across SaaS, sustainability, and community-driven platforms.
                            </p>
                        </div>

                        <div className="border-l-2 sm:border-l-4 border-black pl-4 sm:pl-8">
                            <p className="mb-6">
                                I've worked with diverse teams and global clients like ABB and Danish Agro, learning how design bridges cultures and simplifies complexity.
                            </p>
                            <p>
                                Travel and photography are integral to my process—they help me see stories in everyday moments, notice subtleties of human behavior, and bring that perspective into my work.
                            </p>
                        </div>

                        <div className="bg-white border-2 border-black p-6 sm:p-8 mt-8 sm:mt-12">
                            <p className="text-lg sm:text-xl font-grotesk font-semibold text-black mb-4">
                                What Drives Me
                            </p>
                            <p>
                                I'm driven to create experiences that feel human—simple, useful, and emotionally resonant. Design, for me, is about listening first and building second. Finding clarity in chaos and crafting solutions that quietly improve someone's day.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;

