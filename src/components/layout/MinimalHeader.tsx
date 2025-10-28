'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const MinimalHeader: React.FC = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: 'Work', href: '/projects' },
        { name: 'About', href: '/about' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-white shadow-sm' : 'bg-transparent'
            }`}>
            <div className="container-custom px-4 sm:px-6">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                        <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                            <Image
                                src="/images/About us/about-03.webp"
                                alt="Vasini Singh Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-lg sm:text-xl font-grotesk font-bold text-black hidden sm:inline">
                            VASINI SINGH
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6 lg:space-x-12">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-all ${pathname === item.href
                                    ? 'text-black border-b-2 border-black'
                                    : 'text-gray-600 hover:text-black'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                        ) : (
                            <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden pb-6">
                        <nav className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`text-lg font-medium transition-all ${pathname === item.href
                                        ? 'text-black border-l-4 border-black pl-4'
                                        : 'text-gray-600 hover:text-black hover:pl-4'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default MinimalHeader;

