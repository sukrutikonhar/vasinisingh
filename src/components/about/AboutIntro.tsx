'use client';

import React from 'react';

const AboutIntro: React.FC = () => {
    return (
        <section className="py-32 bg-gray-50">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-grotesk font-bold text-black mb-12">
                        My Journey
                    </h2>

                    <div className="space-y-8 text-lg font-inter text-gray-800 leading-relaxed">
                        <div className="border-l-4 border-black pl-8">
                            <p className="mb-6">
                                My story begins in India, where creativity and curiosity were my constant companions.
                                Growing up, I was fascinated by how things worked—not just mechanically, but emotionally.
                                How does a product make someone feel? Why do we connect with some experiences and not others?
                            </p>
                            <p>
                                This curiosity led me to explore photography first, where I learned to see the world through
                                a different lens—literally and metaphorically. Framing shots taught me about composition,
                                balance, and most importantly, telling stories without words.
                            </p>
                        </div>

                        <div className="border-l-4 border-black pl-8">
                            <p className="mb-6">
                                The transition to product design felt natural. I realized that designing digital products
                                was an extension of storytelling—except now, I was crafting interactive narratives that
                                people could participate in, shape, and make their own.
                            </p>
                            <p>
                                Currently, I&apos;m deepening my expertise through a comprehensive product design course,
                                while working on real-world projects that challenge me to think systematically about user
                                problems and business goals.
                            </p>
                        </div>

                        <div className="bg-white border-2 border-black p-8 mt-12">
                            <p className="text-xl font-grotesk font-semibold text-black mb-4">
                                What drives me?
                            </p>
                            <p>
                                I love solving problems that sit at the intersection of complexity and clarity.
                                Give me a tangled user flow, a confusing enterprise tool, or a product that needs
                                to serve diverse audiences—and I&apos;ll find a way to make it intuitive, elegant,
                                and delightful.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;

