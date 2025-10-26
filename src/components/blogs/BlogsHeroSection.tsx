import React from 'react';
import { BookOpen } from 'lucide-react';
import { typography, spacing, containers } from '@/lib/typography';

const BlogsHeroSection: React.FC = () => {
    return (
        <section className={`bg-gray-900 text-white ${spacing.section}`}>
            <div className={containers.main}>
                <div className="flex items-center gap-4">
                    <BookOpen className="w-12 h-12 lg:w-16 lg:h-16" />
                    <h1 className={`${typography.h1.pageHero}`} style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>
                        Blogs
                    </h1>
                </div>
                <p className={`${typography.body.large} text-gray-300 mt-6 max-w-2xl`} style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                    Insights, stories, and reflections on design, creativity, and the craft of building meaningful experiences.
                </p>
            </div>
        </section>
    );
};

export default BlogsHeroSection;
