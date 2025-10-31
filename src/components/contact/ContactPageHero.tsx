'use client';

import React from 'react';

const ContactPageHero: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="bg-gray-100 rounded-full w-fit px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8">
                <span className="text-xs sm:text-sm font-grotesk font-medium uppercase tracking-wider">
                    Get in Touch
                </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-grotesk font-bold text-black mb-6 sm:mb-8 leading-tight">
                Let&apos;s Work<br />Together 👋
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-inter text-gray-600 leading-relaxed">
                I&apos;m always open to collaborations, freelance opportunities, or just a friendly design chat.
                Drop me a message and let&apos;s create something amazing.
            </p>
        </div>
    );
};

export default ContactPageHero;

