import React from 'react';
import Image from 'next/image';

const MountainPathSection: React.FC = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <div className="space-y-8">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                            The Mountain Path Begins
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            Design is a journey of climbs, milestones and discoveries. I blend product design, UI UX design, photography and exploration to create meaningful digital products and visual stories.
                        </p>
                    </div>

                    {/* Right - Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md">
                            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop&auto=format&q=80"
                                    alt="Mountain landscape representing design journey"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MountainPathSection;
