import React from 'react';

const MyPerspectiveSection: React.FC = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        My Perspective
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        Exploring ideas at the intersection of design, technology, and human experience. Here I share reflections, learnings, and stories from my journey as a product designer, capturing insights that go beyond pixels and wireframes.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MyPerspectiveSection;
