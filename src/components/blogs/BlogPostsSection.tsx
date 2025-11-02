'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Calendar, Tag as TagIcon } from 'lucide-react';

const BlogPostsSection: React.FC = () => {
    const blogPosts = [
        {
            id: 1,
            title: "From Trial to Paid: How UX Can Turn SaaS Users Into Subscribers",
            image: "/images/blogs/blog-06.webp",
            date: "Oct 12, 2025",
            platform: "Medium",
            readMoreLink: "https://medium.com/@vasinisingh/from-trial-to-paid-how-ux-can-turn-saas-users-into-subscribers-af6ad2597125",
            description: "Exploring the psychology and design patterns that drive user conversion in SaaS products.",
            tags: ["SaaS", "UX Strategy", "Conversion"]
        },
        {
            id: 2,
            title: "The Story Behind My Logo: The UI Mountain Path",
            image: "/images/blogs/blog-05.webp",
            date: "Oct 12, 2025",
            platform: "Medium",
            readMoreLink: "https://medium.com/@vasinisingh/the-story-behind-my-logo-the-ui-mountain-path-c3b5d974b639",
            description: "A personal story about the journey, symbolism, and design process behind my brand identity.",
            tags: ["Design Process", "Personal Story", "Branding"]
        },
        {
            id: 3,
            title: "Designing for Retention: The Hidden Metric Behind Great SaaS UX",
            image: "/images/blogs/blog-04.webp",
            date: "Oct 6, 2025",
            platform: "LinkedIn",
            readMoreLink: "https://www.linkedin.com/pulse/designing-retention-hidden-metric-behind-great-saas-ux-vasini-singh-b5gcc/",
            description: "Understanding how thoughtful UX design directly impacts user retention and lifetime value.",
            tags: ["SaaS", "UX Strategy", "Product Design"]
        },
        {
            id: 4,
            title: "How Role-Based Dashboards Can Transform Your SaaS Product Experience",
            image: "/images/blogs/blog-03.webp",
            date: "Sep 26, 2025",
            platform: "LinkedIn",
            readMoreLink: "https://www.linkedin.com/pulse/how-role-based-dashboards-can-transform-your-saas-product-singh-csf2c/",
            description: "A deep dive into creating personalized dashboard experiences for different user personas.",
            tags: ["SaaS", "UI Design", "Enterprise"]
        },
        {
            id: 5,
            title: "Why and How I Chose Design as a Career",
            image: "/images/blogs/blog-02.webp",
            date: "Sep 9, 2025",
            platform: "LinkedIn",
            readMoreLink: "https://www.linkedin.com/pulse/why-how-i-chose-design-career-vasini-singh-cgytc/",
            description: "From photography to product design — the story of my creative career transition.",
            tags: ["Career", "Personal Story", "Design Process"]
        },
        {
            id: 6,
            title: "Simplifying Sustainability Dashboards for Maximum Impact",
            image: "/images/blogs/blog-01.webp",
            date: "Apr 24, 2025",
            platform: "LinkedIn",
            readMoreLink: "https://ecoprism.com/resources/insights/simplifying-sustainability-dashboards/",
            description: "Making complex ESG data accessible and actionable through design.",
            tags: ["UI Design", "Data Visualization", "Enterprise"]
        },
    ];

    // Extract all unique tags
    const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Filter posts by selected tag
    const filteredPosts = selectedTag
        ? blogPosts.filter(post => post.tags.includes(selectedTag))
        : blogPosts;

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Category Filter */}
                    <div className="mb-12 sm:mb-16">
                        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                            <TagIcon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                            <h2 className="text-xl sm:text-2xl font-grotesk font-bold text-black">
                                Filter by Category
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            <button
                                onClick={() => setSelectedTag(null)}
                                className={`px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-grotesk font-medium border-2 transition-all rounded-[12px] ${selectedTag === null
                                    ? 'bg-black text-white border-black'
                                    : 'bg-white text-black border-black hover:bg-gray-100'
                                    }`}
                            >
                                All Posts ({blogPosts.length})
                            </button>
                            {allTags.map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => setSelectedTag(tag)}
                                    className={`px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-grotesk font-medium border-2 transition-all rounded-[12px] ${selectedTag === tag
                                        ? 'bg-black text-white border-black'
                                        : 'bg-white text-black border-black hover:bg-gray-100'
                                        }`}
                                >
                                    {tag} ({blogPosts.filter(post => post.tags.includes(tag)).length})
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                        {filteredPosts.map((post) => (
                            <a
                                key={post.id}
                                href={post.readMoreLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 rounded-[6px]"
                            >
                                {/* Image */}
                                <div className="relative h-48 sm:h-56 md:h-64 w-full bg-gray-100 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

                                    {/* Platform Badge */}
                                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white px-2 py-1 sm:px-3 sm:py-1.5 shadow-card rounded-[6px]">
                                        <span className="text-[10px] sm:text-xs font-grotesk font-semibold uppercase tracking-wider">
                                            {post.platform}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4 sm:p-6">
                                    {/* Date */}
                                    <div className="flex items-center gap-2 text-gray-500 mb-3 sm:mb-4">
                                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                        <span className="text-xs sm:text-sm font-inter">{post.date}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-base sm:text-lg md:text-xl font-grotesk font-bold text-black mb-2 sm:mb-3 leading-tight group-hover:underline">
                                        {post.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm font-inter text-gray-600 leading-relaxed mb-4">
                                        {post.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="inline-flex items-center gap-1 border border-black px-2 py-1 text-[10px] sm:text-xs font-grotesk font-medium uppercase tracking-wider"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Read More Link */}
                                    <div className="flex items-center gap-2 text-black font-grotesk font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all">
                                        <span>Read More</span>
                                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 sm:mt-20 text-center">
                        <div className="max-w-2xl mx-auto bg-black text-white p-8 sm:p-12">
                            <h3 className="text-2xl sm:text-3xl font-grotesk font-bold mb-4">
                                Want to Read More?
                            </h3>
                            <p className="text-base sm:text-lg font-inter mb-6 sm:mb-8 text-gray-300">
                                Follow me on Medium and LinkedIn for more insights on design, UX, and product thinking.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="https://medium.com/@vasinisingh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 sm:px-8 sm:py-4 font-grotesk font-semibold hover:bg-gray-100 transition-all w-full sm:w-auto rounded-[12px]"
                                >
                                    <span className="text-sm sm:text-base">Follow on Medium</span>
                                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/vasini-singh-18a442205/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 border-2 border-white px-6 py-3 sm:px-8 sm:py-4 font-grotesk font-semibold hover:bg-white hover:text-black transition-all w-full sm:w-auto rounded-[12px]"
                                >
                                    <span className="text-sm sm:text-base">Connect on LinkedIn</span>
                                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPostsSection;
