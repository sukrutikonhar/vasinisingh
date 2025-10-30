'use client';

import React from 'react';

const BlogsHeroSection: React.FC = () => {
    return (
        <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block bg-gray-100 px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8 rounded-full">
                        <span className="text-xs sm:text-sm font-grotesk font-medium uppercase tracking-wider">
                            Thoughts & Insights
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-grotesk font-bold text-black mb-6 sm:mb-8 leading-tight">
                        Blogs
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter text-gray-600 max-w-3xl mx-auto px-4">
                        Insights, stories, and reflections on design, creativity, and the craft of building meaningful experiences.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BlogsHeroSection;
