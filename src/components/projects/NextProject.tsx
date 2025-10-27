'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface NextProjectProps {
    nextSlug: string;
    nextTitle: string;
}

const NextProject: React.FC<NextProjectProps> = ({ nextSlug, nextTitle }) => {
    return (
        <section className="py-32 bg-black text-white">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm font-grotesk uppercase tracking-wider text-gray-400 mb-4">
                        Next Case Study
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-grotesk font-bold mb-8">
                        {nextTitle}
                    </h2>
                    <Link
                        href={`/projects/${nextSlug}`}
                        className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 font-grotesk font-semibold hover:bg-gray-100 transition-all group"
                    >
                        <span>View Project</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NextProject;

