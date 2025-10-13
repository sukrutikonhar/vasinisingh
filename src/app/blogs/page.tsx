import Layout from '@/components/layout/Layout';
import BlogsHeroSection from '@/components/sections/BlogsHeroSection';
import MyPerspectiveSection from '@/components/sections/MyPerspectiveSection';
import BlogPostsSection from '@/components/sections/BlogPostsSection';

export default function Blogs() {
    return (
        <Layout>
            <BlogsHeroSection />
            <MyPerspectiveSection />
            <BlogPostsSection />
        </Layout>
    );
}
