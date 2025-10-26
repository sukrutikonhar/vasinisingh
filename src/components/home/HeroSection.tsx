import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { typography, spacing, containers } from '@/lib/typography';

const HeroSection: React.FC = () => {
    return (
        <section className={`bg-white ${spacing.section}`}>
            <div className={containers.main}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 lg:space-y-8">
                        <h1 className={`${typography.h1.hero} text-gray-900`} style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>
                            Designing with Purpose,<br />
                            Building with Empathy
                        </h1>

                        <p className={`${typography.body.large} text-gray-600`} style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                            I&apos;m Vasini Singh, a Product Designer who transforms complexity into clarity through thoughtful UI/UX and storytelling.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/about">
                                <Button size="lg" className="w-fit group">
                                    <span className="flex items-center gap-2">
                                        About me
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Profile Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[500px]">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/vasini.webp"
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
