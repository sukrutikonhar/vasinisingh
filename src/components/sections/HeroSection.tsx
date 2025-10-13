import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Designing with Purpose,<br />
                            Building with Empathy
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            I&apos;m Vasini Singh, a Product Designer who transforms complexity into clarity through thoughtful UI/UX and storytelling.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="w-fit group">
                                <span className="flex items-center gap-2">
                                    About me
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Profile Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-80 h-96 lg:w-96 lg:h-[500px]">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=600&fit=crop&crop=face&auto=format&q=80"
                                    alt="Vasini Singh - Product Designer"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
