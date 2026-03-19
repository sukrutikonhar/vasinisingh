'use client';

import { Brain, Code, Heart } from "lucide-react";
import React from "react";

export default function MockOraaV2Final() {
    const learnings = [
        {
            icon: Brain,
            title: 'AI is a Material, Not a Feature',
            content: 'I learned to design for non-deterministic outcomes. AI responses fluctuate, so the UI must gracefully handle loading states, corrections, and varying text lengths.'
        },
        {
            icon: Heart,
            title: "Empathy as a Metric",
            content: 'Designing for psychologically vulnerable users meant prioritizing "do no harm" in our copy. Shifting from "Your weaknesses" to "Areas for focus" drastically improved user retention in testing.'
        },
        {
            icon: Code,
            title: 'System-Level Thinking',
            content: 'Building MockOraa wasn\'t just about screens; it was about designing the invisible data loops that transform an audio input into a structured learning roadmap.'
        }
    ];



    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container-custom px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8 sm:mb-12 md:mb-16">
                        <p className="text-xs uppercase tracking-widest text-gray-500 font-grotesk font-bold mb-4">11. RETROSPECTIVE</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-grotesk font-bold text-black">
                            Reflection &amp; Learnings
                        </h2>
                    </div>

                    {/* Learnings Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {learnings.map((learning, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-6 shadow-subtle hover:shadow-lg transition-all"
                            >
                                <div className="flex items-start gap-3 mb-4 sm:mb-5">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-black text-white flex items-center justify-center rounded-full flex-shrink-0">
                                        {React.createElement(learning.icon, {
                                            className: "w-4 sm:w-5 h-4 sm:h-5"
                                        })}
                                    </div>
                                    <h3 className="text-base sm:text-lg md:text-xl font-grotesk font-bold text-black">
                                        {learning.title}
                                    </h3>
                                </div>
                                <p className="text-xs sm:text-sm font-inter text-gray-600 leading-relaxed">
                                    {learning.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
