'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PrevNextProjectProps {
    prevSlug?: string;
    prevTitle?: string;
    nextSlug?: string;
    nextTitle?: string;
}

const PrevNextProject: React.FC<PrevNextProjectProps> = ({ prevSlug, prevTitle, nextSlug, nextTitle }) => {
    return (
        <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Previous Project */}
                        {prevSlug && prevTitle ? (
                            <Link
                                href={`/projects/${prevSlug}`}
                                className="group flex items-center justify-between p-6 border-2 border-gray-200 hover:border-black transition-all rounded-lg"
                            >
                                <div className="flex items-center gap-4">
                                    <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-black group-hover:-translate-x-1 transition-all" />
                                    <div>
                                        <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-500 mb-1">
                                            Previous Project
                                        </p>
                                        <p className="text-lg font-grotesk font-bold text-black">
                                            {prevTitle}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            <div></div>
                        )}

                        {/* Next Project */}
                        {nextSlug && nextTitle ? (
                            <Link
                                href={`/projects/${nextSlug}`}
                                className="group flex items-center justify-between p-6 border-2 border-gray-200 hover:border-black transition-all rounded-lg md:ml-auto"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <p className="text-xs font-grotesk font-bold uppercase tracking-wider text-gray-500 mb-1">
                                            Next Project
                                        </p>
                                        <p className="text-lg font-grotesk font-bold text-black">
                                            {nextTitle}
                                        </p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-black group-hover:translate-x-1 transition-all" />
                                </div>
                            </Link>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrevNextProject;

