'use client';

import { h2Section } from '@/lib/typography';
import React from 'react';
import Link from 'next/link';

export default function WorkmarkCTA() {
    return (
        <section className="py-16 sm:py-20 md:py-24">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className={`${h2Section} mb-6`}>
                        Interested in evidence-driven product design?
                    </h2>
                    <p className="text-base sm:text-lg font-inter text-gray-600 mb-10 leading-relaxed">
                        I&apos;m always open to discussing how design can make invisible work legible — without surveillance.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-black text-white px-8 py-4 rounded-lg font-grotesk font-semibold text-sm hover:bg-gray-800 transition-colors"
                    >
                        GET IN TOUCH
                    </Link>
                </div>
            </div>
        </section>
    );
}
