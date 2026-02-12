'use client';

import React, { useEffect, useState } from 'react';
import HeroSection from './sections/HeroSection';
import ExecutiveSnapshot from './sections/ExecutiveSnapshot';
import ProblemSection from './sections/ProblemSection';
import MarketContext from './sections/MarketContext';
import TargetUsers from './sections/TargetUsers';
import ResearchValidation from './sections/ResearchValidation';
import ProblemFraming from './sections/ProblemFraming';
import StrategyDirection from './sections/StrategyDirection';
import ProductShowcase from './sections/ProductShowcase';
import SystemThinking from './sections/SystemThinking';
import DesignSystem from './sections/DesignSystem';
import Iterations from './sections/Iterations';
import BusinessStrategy from './sections/BusinessStrategy';
import EthicalAI from './sections/EthicalAI';
import MyContribution from './sections/MyContribution';
import KeyLearnings from './sections/KeyLearnings';
import References from './sections/References';

const PremiumCaseStudy: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold">MockOraa</div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#problem" className="text-gray-300 hover:text-white transition-colors">Problem</a>
                        <a href="#solution" className="text-gray-300 hover:text-white transition-colors">Solution</a>
                        <a href="#research" className="text-gray-300 hover:text-white transition-colors">Research</a>
                        <a href="#impact" className="text-gray-300 hover:text-white transition-colors">Impact</a>
                    </div>
                </div>
            </nav>

            {/* Sections */}
            <HeroSection />
            <ExecutiveSnapshot />
            <ProblemSection />
            <MarketContext />
            <TargetUsers />
            <ResearchValidation />
            <ProblemFraming />
            <StrategyDirection />
            <ProductShowcase />
            <SystemThinking />
            <DesignSystem />
            <Iterations />
            <BusinessStrategy />
            <EthicalAI />
            <MyContribution />
            <KeyLearnings />
            <References />

            {/* Scroll Progress */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
                <div 
                    className="h-full bg-white transition-all duration-300"
                    style={{ width: `${typeof window !== 'undefined' ? Math.min(100, (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100) : 0}%` }}
                />
            </div>
        </div>
    );
};

export default PremiumCaseStudy;