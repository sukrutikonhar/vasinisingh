import type { Metadata } from 'next';
import MinimalLayout from '@/components/layout/MinimalLayout';
import BlogsHeroSection from '@/components/blogs/BlogsHeroSection';
import BlogPostsSection from '@/components/blogs/BlogPostsSection';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Blog',
    description:
        'Insights, stories, and reflections on product design, creativity, and building meaningful digital experiences.',
    path: '/blogs',
});

export default function Blogs() {
    return (
        <MinimalLayout>
            <BlogsHeroSection />
            <BlogPostsSection />
        </MinimalLayout>
    );
}
