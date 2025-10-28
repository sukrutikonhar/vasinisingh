import MinimalLayout from '@/components/layout/MinimalLayout';
import BlogsHeroSection from '@/components/blogs/BlogsHeroSection';
import BlogPostsSection from '@/components/blogs/BlogPostsSection';

export default function Blogs() {
    return (
        <MinimalLayout>
            <BlogsHeroSection />
            <BlogPostsSection />
        </MinimalLayout>
    );
}
