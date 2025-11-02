'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';

const NewHeroSection: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);
    const heroRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                setMousePosition({ x, y });
            }
        };

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const words = ['Designer', 'Thinker', 'Creator', 'Problem Solver'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <section
            ref={heroRef}
            className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-20"
        >
            {/* Animated Background Elements */}
            {/* <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-20 right-20 w-64 h-64 border border-gray-200 rounded-full"
                    style={{
                        transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px) translateY(${scrollY * 0.3}px)`,
                        transition: 'transform 0.3s ease-out'
                    }}
                />
                <div
                    className="absolute bottom-40 left-10 w-32 h-32 border-2 border-black"
                    style={{
                        transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px) rotate(${scrollY * 0.1}deg)`,
                        transition: 'transform 0.3s ease-out'
                    }}
                />
            </div> */}

            <div className="container-custom w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 order-2 lg:order-1 lg:col-span-7">

                        {/* Main Title with Rotating Text */}
                        <div className="space-y-4">
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-grotesk font-bold text-black leading-[0.95] tracking-tight">
                                Product<br />
                                <span className="relative inline-block w-full">
                                    <span className="relative block h-[1.1em] overflow-hidden">
                                        {words.map((word, index) => (
                                            <span
                                                key={word}
                                                className={`absolute left-0 top-0 w-full transition-all duration-700 ease-in-out ${index === currentWordIndex
                                                    ? 'translate-y-0 opacity-100'
                                                    : index < currentWordIndex
                                                        ? '-translate-y-full opacity-0'
                                                        : 'translate-y-full opacity-0'
                                                    }`}
                                            >
                                                {word}
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                        </div>

                        {/* Description */}
                        <div className="relative">
                            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gray-800" />
                            <p className="text-lg sm:text-xl text-gray-700 font-inter leading-relaxed pl-4">
                                Hi, I&apos;m <span className="font-semibold text-black">Vasini Singh</span> — a Product Designer with over 15 years of professional experience, including 7+ years dedicated to design. I help build digital products that are
                                <span className="italic">  simple, effective, and user-friendly</span>.
                            </p>
                        </div>

                        {/* Stats Row */}
                        <div className="flex items-center gap-8 pt-4">
                            <div className="group">
                                <div className="text-4xl font-grotesk font-bold text-black group-hover:scale-110 transition-transform">7+</div>
                                <div className="text-xs text-gray-600 font-inter uppercase tracking-wider">Years</div>
                            </div>
                            <div className="w-px h-12 bg-gray-300" />
                            <div className="group">
                                <div className="text-4xl font-grotesk font-bold text-black group-hover:scale-110 transition-transform">40+</div>
                                <div className="text-xs text-gray-600 font-inter uppercase tracking-wider">Projects</div>
                            </div>
                            <div className="w-px h-12 bg-gray-300" />
                            <div className="group">
                                <div className="text-4xl font-grotesk font-bold text-black group-hover:scale-110 transition-transform">30+</div>
                                <div className="text-xs text-gray-600 font-inter uppercase tracking-wider">Clients</div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/projects"
                                className="group inline-flex items-center justify-center bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition-all rounded-[12px]"
                            >
                                <span className="mr-2">View My Work</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="/vasini-singh-resume.pdf"
                                download
                                className="group inline-flex items-center justify-center border-2 border-black px-8 py-4 font-medium hover:bg-black hover:text-white transition-all rounded-[12px]"
                            >
                                <Download className="w-5 h-5 mr-2" />
                                <span>Download Resume</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Image with 3D Effect */}
                    <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end px-4 sm:px-0">
                        <div
                            ref={imageRef}
                            className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg"
                            style={{
                                transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * -5}deg)`,
                                transition: 'transform 0.3s ease-out'
                            }}
                        >
                            {/* 3D Image Container */}
                            <div className="relative group">
                                {/* Shadow layers for 3D effect */}
                                <div className="absolute inset-0 bg-black transform translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4 -z-10" />
                                <div className="absolute inset-0 bg-gray-400 transform translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2 -z-10" />

                                {/* Main Image */}
                                <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full border-2 sm:border-4 border-black overflow-hidden bg-white">
                                    <Image
                                        src="/images/vasini.webp"
                                        alt="Vasini Singh - Product Designer"
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                        priority
                                    />

                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute bottom-8 left-8 right-8 text-white">
                                            <p className="text-2xl font-grotesk font-bold mb-2">Vasini Singh</p>
                                            <p className="text-sm font-inter">Product Designer & Creative Thinker</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating badge */}
                                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-black text-white p-3 sm:p-4 border-2 sm:border-4 border-white shadow-lg animate-pulse">
                                    <div className="text-center">
                                        <div className="text-2xl sm:text-3xl font-grotesk font-bold">7+</div>
                                        <div className="text-[10px] sm:text-xs uppercase tracking-wider">Years<br />Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
                style={{
                    opacity: Math.max(0, 1 - scrollY / 300)
                }}
            >
                <div className="text-xs text-gray-500 font-inter uppercase tracking-widest mb-2">Scroll</div>
                <div className="w-px h-16 bg-gray-300 mx-auto animate-pulse" />
            </div>
        </section>
    );
};

export default NewHeroSection;

