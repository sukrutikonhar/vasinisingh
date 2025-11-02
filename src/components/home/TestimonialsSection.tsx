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
            quote: "Vasini stood out for her creativity and commitment, delivering 30+ successful projects as she transitioned from intern to skilled Product Designer. Her blend of visual storytelling and user experience makes her a joy to mentor.",
            author: "Abhishek Katiyar",
            role: "Founder & CEO",
            company: "Web Concepts Technologies | Bizmeth Solutions | Flowix"
        },
        {
            quote: "I've collaborated with Vasini on numerous successful projects. Her design thinking, attention to detail, and user-first mindset consistently bring clarity and impact to every delivery. A reliable partner who elevates both process and outcome.",
            author: "Vignesh R",
            role: "Chapter Lead & Technical Consultant",
            company: "Acumant"
        },
        {
            quote: "Her empathy, creativity, and strategic mindset strengthened our outreach. She brought professionalism and heart to every initiative, amplifying our mission with clarity and purpose. A true asset to any impact-driven organization.",
            author: "Alok Dixit",
            role: "Founder & CEO",
            company: "Chhanv Foundation"
        }
    ];

    return (
        <section className="py-16 sm:py-24 md:py-32 bg-gray-50">
            <div className="container-custom px-4 sm:px-6">
                <div ref={testimonialsRef} className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 sm:mb-16 md:mb-20">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-grotesk font-bold text-black mb-4 sm:mb-6">
                            Testimonials
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 font-inter">
                            Kind words from collaborators
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 sm:p-8 shadow-card hover:shadow-xl transition-shadow duration-300 rounded-[6px]"
                            >
                                {/* Quote Icon */}
                                <div className="mb-4 sm:mb-6">
                                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
                                </div>

                                {/* Quote Text */}
                                <blockquote className="text-base sm:text-lg font-inter text-gray-800 leading-relaxed mb-4 sm:mb-6">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </blockquote>

                                {/* Author Info */}
                                <div className="border-t-2 border-gray-200 pt-4">
                                    <p className="font-grotesk font-bold text-black text-sm sm:text-base">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-xs sm:text-sm font-inter text-gray-600">
                                        {testimonial.role} at {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
