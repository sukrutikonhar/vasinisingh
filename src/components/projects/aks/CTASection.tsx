'use client';

import { h2Section } from '@/lib/typography';
import React from 'react';
import Link from 'next/link';

const CTASection: React.FC = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className={`${h2Section} mb-6`}>
                        Building an enterprise knowledge platform?
                    </h2>
                    <p className="text-lg sm:text-xl font-inter text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                        When teams lose answers in Slack threads and siloed docs, the problem isn&apos;t storage — it&apos;s trust, governance, and findability. I&apos;d like to hear about the knowledge your users need to reuse, not re-discover.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-lg font-grotesk font-semibold hover:bg-gray-800 transition-colors text-center"
                        >
                            Get In Touch
                        </Link>
                        <Link
                            href="/projects"
                            className="w-full sm:w-auto bg-white text-black border-2 border-black px-8 py-4 rounded-lg font-grotesk font-semibold hover:bg-gray-50 transition-colors text-center"
                        >
                            View More Work
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
