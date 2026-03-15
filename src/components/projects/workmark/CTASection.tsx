'use client';

import Link from 'next/link';

export default function CTASection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-black text-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-white mb-6">
                        Ready to Create Something Amazing Together?
                    </h2>
                    <p className="text-lg font-inter text-gray-300 mb-10 leading-relaxed">
                        I&apos;m always open to new projects and collaborations. Let&apos;s connect!
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-black px-8 py-4 rounded-lg font-grotesk font-semibold hover:bg-gray-100 transition-colors uppercase tracking-wider"
                    >
                        SCHEDULE A CALL.
                    </Link>
                </div>
            </div>
        </section>
    );
}
