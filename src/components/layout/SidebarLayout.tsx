'use client';

import React, { useState, useEffect } from 'react';
import { spacing } from '@/lib/typography';

interface NavigationItem {
    id: string;
    label: string;
    href: string;
}

interface SidebarLayoutProps {
    children: React.ReactNode;
    navigationItems: NavigationItem[];
    title: string;
    titleHighlight?: string;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({
    children,
    navigationItems,
    title,
    titleHighlight
}) => {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = navigationItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navigationItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, [navigationItems]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex min-h-screen">
                    {/* Sidebar */}
                    <div className="w-72 sm:w-80 bg-white sticky top-0 h-screen overflow-y-auto flex-shrink-0">
                        <div className="p-6 sm:p-8 pt-16 !px-0">
                            <h2 className="text-gray-900 mb-8" style={{ fontFamily: '"Poppins", system-ui, sans-serif', fontSize: '28px', fontWeight: 'bold' }}>
                                <span className="text-gray-400">|</span> {title.split(' ').map((word, index) =>
                                    word === titleHighlight ? (
                                        <span key={index} className="text-green-600">{word}</span>
                                    ) : (
                                        <span key={index}>{word} </span>
                                    )
                                )}
                            </h2>

                            <nav className="space-y-1">
                                {navigationItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 text-sm transition-colors duration-200 ${activeSection === item.id
                                            ? 'bg-gray-50 border-l-4 border-gray-900 text-gray-900 font-medium'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                        style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                                    >
                                        <span>{item.label}</span>
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 min-w-0">
                        <div className={spacing.section}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarLayout;
