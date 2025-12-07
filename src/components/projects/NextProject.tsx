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
        <section className="py-16 sm:py-20 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <Link
                        href={`/projects/${nextSlug}`}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:opacity-70 transition-opacity group"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-bold text-black">
                            {nextTitle}
                        </h2>
                        <p className="flex items-center gap-2 text-base sm:text-lg font-inter text-gray-600">
                            View Next Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NextProject;

