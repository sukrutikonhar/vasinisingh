'use client';

import React from 'react';
import { Quote, Users } from 'lucide-react';

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            quote: 'Now I never lose track of jobs. Everything is organized, customers are happy, and I can focus on what I do best—fixing things.',
            author: 'Workshop Owner',
            role: 'Using Arreglio for 4 months'
        },
        {
            quote: 'I get instant updates and never have to call again. I can see photos of the work and know exactly when to pick up my bike.',
            author: 'Customer',
            role: 'Repeat user'
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 mb-6">
                            <Users className="w-4 h-4" />
                            <span className="text-xs font-grotesk font-bold uppercase tracking-wider">
                                User Testimonials
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black mb-4">
                            Real Feedback from Our Users
                        </h2>
                        <p className="text-lg sm:text-xl font-inter text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Hear from shop owners and customers about their experience with Arreglio
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border-2 border-gray-200 p-8 hover:border-black transition-all relative h-full flex flex-col"
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6">
                                    <Quote className="w-8 h-8 text-black/5" />
                                </div>

                                <div className="relative flex flex-col flex-grow">
                                    <p className="text-base font-inter text-gray-800 leading-relaxed mb-6 italic flex-grow">
                                        "{testimonial.quote}"
                                    </p>
                                    <div className="border-t-2 border-black pt-4 mt-auto">
                                        <p className="text-sm font-grotesk font-bold text-black mb-1">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-xs font-inter text-gray-600">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

