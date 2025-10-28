import MinimalLayout from '@/components/layout/MinimalLayout';
import BlogsHeroSection from '@/components/blogs/BlogsHeroSection';
import MyPerspectiveSection from '@/components/blogs/MyPerspectiveSection';
import BlogPostsSection from '@/components/blogs/BlogPostsSection';

export default function Blogs() {
    return (
        <MinimalLayout>
            <BlogsHeroSection />
            <MyPerspectiveSection />
            <BlogPostsSection />
        </MinimalLayout>
    );
}
