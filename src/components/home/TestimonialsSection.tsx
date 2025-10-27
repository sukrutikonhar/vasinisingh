'use client';

import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
    const testimonialsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (testimonialsRef.current) {
            observer.observe(testimonialsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const testimonials = [
        {
            quote: "Vasini's ability to translate complex user needs into elegant solutions is remarkable. Her design work consistently elevates our product.",
            author: "Sarah Mitchell",
            role: "Product Manager",
            company: "TechCorp"
        },
        {
            quote: "Working with Vasini has been transformative. She brings both creative vision and strategic thinking to every project.",
            author: "David Chen",
            role: "Engineering Lead",
            company: "StartupCo"
        },
        {
            quote: "Her attention to detail and user-centric approach made our platform not just functional, but delightful to use.",
            author: "Emily Rodriguez",
            role: "CEO",
            company: "DesignLab"
        }
    ];

    return (
        <section className="py-32 bg-gray-50">
            <div className="container-custom">
                <div ref={testimonialsRef} className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <h2 className="text-5xl sm:text-6xl md:text-7xl font-grotesk font-bold text-black mb-6">
                            Testimonials
                        </h2>
                        <p className="text-xl text-gray-600 font-inter">
                            Kind words from collaborators
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white border-2 border-black p-8 hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Quote Icon */}
                                <div className="mb-6">
                                    <Quote className="w-10 h-10 text-black" />
                                </div>

                                {/* Quote Text */}
                                <blockquote className="text-lg font-inter text-gray-800 leading-relaxed mb-6">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </blockquote>

                                {/* Author Info */}
                                <div className="border-t-2 border-gray-200 pt-4">
                                    <p className="font-grotesk font-bold text-black">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-sm font-inter text-gray-600">
                                        {testimonial.role} at {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Collaboration Note */}
                    <div className="mt-16 text-center">
                        <div className="inline-block border-2 border-black px-6 py-3">
                            <p className="text-sm font-grotesk font-medium">
                                Open to collaborations with passionate teams and innovative projects
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
