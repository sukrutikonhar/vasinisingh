import React from 'react';
import { typography, spacing, containers } from '@/lib/typography';

const MyPerspectiveSection: React.FC = () => {
    return (
        <section className={`bg-white ${spacing.section}`}>
            <div className={containers.main}>
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className={`${typography.h2.section} text-gray-900`} style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>
                        My Perspective
                    </h2>

                    <p className={`${typography.body.large} text-gray-600`} style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                        Exploring ideas at the intersection of design, technology, and human experience. Here I share reflections, learnings, and stories from my journey as a product designer, capturing insights that go beyond pixels and wireframes.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MyPerspectiveSection;
