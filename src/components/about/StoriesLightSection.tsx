import React from 'react';
import Image from 'next/image';

const StoriesLightSection: React.FC = () => {
    const photographyImages = [
        {
            src: "/images/About us/story-01.webp",
            alt: "Photography by Vasini Singh - Story 1"
        },
        {
            src: "/images/About us/story-02.webp",
            alt: "Photography by Vasini Singh - Story 2"
        },
        {
            src: "/images/About us/story-03.webp",
            alt: "Photography by Vasini Singh - Story 3"
        },
        {
            src: "/images/About us/story-04.webp",
            alt: "Photography by Vasini Singh - Story 4"
        },
        {
            src: "/images/About us/story-05.webp",
            alt: "Photography by Vasini Singh - Story 5"
        },
        {
            src: "/images/About us/story-06.webp",
            alt: "Photography by Vasini Singh - Story 6"
        }
    ];

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Text Content */}
                    <div className="text-left space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Photography is my parallel creative practice. It allows me to capture{' '}
                            <span className="text-green-600 font-semibold">stories in light, nature and landscapes</span>.
                            This practice influences my design by sharpening my eye for{' '}
                            <span className="text-green-600 font-semibold">composition, detail and storytelling</span>.
                            Behind the camera I learn to pause, observe and transform inspiration into creative ideas.
                        </p>
                    </div>

                    {/* Photography Gallery - Masonry Grid */}
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                        {photographyImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative w-full mb-6 break-inside-avoid overflow-hidden group"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={400}
                                    height={600}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StoriesLightSection;
