'use client';

import React from 'react';

const BlogsHeroSection: React.FC = () => {
    return (
        <section className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block bg-gray-100 px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 rounded-full">
                        <span className="text-xs sm:text-sm font-grotesk font-medium uppercase tracking-wider">
                            Thoughts & Insights
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-grotesk font-bold text-black mb-4 sm:mb-6 leading-tight">
                        Blogs
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl font-inter text-gray-600 max-w-3xl mx-auto px-4">
                        Insights, stories, and reflections on design, creativity, and the craft of building meaningful experiences.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BlogsHeroSection;
