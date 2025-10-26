import Layout from '@/components/layout/Layout';
import BlogsHeroSection from '@/components/blogs/BlogsHeroSection';
import MyPerspectiveSection from '@/components/blogs/MyPerspectiveSection';
import BlogPostsSection from '@/components/blogs/BlogPostsSection';

export default function Blogs() {
    return (
        <Layout>
            <BlogsHeroSection />
            <MyPerspectiveSection />
            <BlogPostsSection />
        </Layout>
    );
}
