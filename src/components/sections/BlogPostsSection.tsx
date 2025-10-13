import React from 'react';
import Image from 'next/image';

const BlogPostsSection: React.FC = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Why and How I Chose Design as a Career",
            image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&auto=format&q=80",
            readMoreLink: "#"
        },
        {
            id: 2,
            title: "How Role-Based Dashboards Can Transform Your SaaS Product Experience",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format&q=80",
            readMoreLink: "#"
        },
        {
            id: 3,
            title: "Designing for Retention: The Hidden Metric Behind Great SaaS UX",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format&q=80",
            readMoreLink: "#"
        }
    ];

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                            {/* Image */}
                            <div className="h-48 bg-white p-4">
                                <div className="w-full h-full rounded-lg overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <h3 className="text-lg font-semibold leading-tight">
                                    {post.title}
                                </h3>

                                <a
                                    href={post.readMoreLink}
                                    className="inline-block text-white hover:text-gray-300 transition-colors"
                                >
                                    Read More {'>>'}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPostsSection;
