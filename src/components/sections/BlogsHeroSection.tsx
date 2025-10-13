import React from 'react';
import { BookOpen } from 'lucide-react';

const BlogsHeroSection: React.FC = () => {
    return (
        <section className="bg-gray-900 text-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="flex items-center gap-4">
                    <BookOpen className="w-12 h-12 lg:w-16 lg:h-16" />
                    <h1 className="text-4xl lg:text-6xl font-bold">
                        Blogs
                    </h1>
                </div>
                <p className="text-lg text-gray-300 mt-6 max-w-2xl">
                    Insights, stories, and reflections on design, creativity, and the craft of building meaningful experiences.
                </p>
            </div>
        </section>
    );
};

export default BlogsHeroSection;
