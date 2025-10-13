import React from 'react';
import Image from 'next/image';

const WandererDesignerSection: React.FC = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-md">
                            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=400&fit=crop&auto=format&q=80"
                                    alt="Forest bridge representing exploration and design journey"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                            The Wanderer & The Designer
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            I&apos;m Vasini Singh, a Product Designer and Photographer with more than seven years of experience in SaaS platforms and intuitive digital products. My journey started in biotechnology, but I found my true calling in design, focusing on clarity, usability, creativity and empathy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WandererDesignerSection;
