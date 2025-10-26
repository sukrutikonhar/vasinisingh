import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, Shield, Globe, Target } from 'lucide-react';
import Button from '@/components/ui/Button';
import Layout from '@/components/layout/Layout';
import SidebarLayout from '@/components/layout/SidebarLayout';
import { typography, spacing, containers } from '@/lib/typography';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Arreglio - SaaS Workshop Management | Vasini Singh',
    description: 'A detailed case study on Arreglio, a SaaS application transforming sticky notes into smart workshop management.',
};

const ArreglioProjectPage: React.FC = () => {
    const navigationItems = [
        { id: 'problem-statement', label: 'The Problem We Saw', href: '#problem-statement' },
        { id: 'about-arreglio', label: 'About Arreglio', href: '#about-arreglio' },
        { id: 'solution', label: 'Solution', href: '#solution' },
        { id: 'goals', label: 'Goals', href: '#goals' },
        { id: 'competitors', label: 'Competitors', href: '#competitors' },
        { id: 'user-personas', label: 'User Personas', href: '#user-personas' },
        { id: 'compliance-trust', label: 'Compliance & Trust', href: '#compliance-trust' },
        { id: 'color-palette', label: 'Color Palette', href: '#color-palette' },
        { id: 'design-process', label: 'Design Process', href: '#design-process' },
        { id: 'booking-process', label: 'Customer Booking Process', href: '#booking-process' },
        { id: 'store-owner-process', label: 'Store Owner Process', href: '#store-owner-process' },
        { id: 'ui-screens', label: 'UI Screens', href: '#ui-screens' },
        { id: 'design-challenges', label: 'Design Challenges', href: '#design-challenges' },
        { id: 'impact', label: 'Measurable Impact', href: '#impact' },
        { id: 'testimonials', label: 'What users say', href: '#testimonials' },
        { id: 'key-learnings', label: 'Key Learnings', href: '#key-learnings' }
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className={`relative bg-white text-gray-900 ${spacing.section} overflow-hidden`}>
                <div className="px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className={`${typography.h1.projectHero} text-gray-900 mb-6`} style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>
                            <strong>Arreglio</strong> – <strong>Turning Sticky Notes into Smart SaaS Application</strong>
                        </h1>
                        <p className={`${typography.body.large} text-gray-600 mb-8`}>
                            A repair management platform that helps workshops run smoother, faster, and smarter.
                        </p>
                        <div className="relative w-full max-w-4xl mx-auto h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/projects/Arreglio/Untitled design (3).webp"
                                alt="Arreglio SaaS Application"
                                fill
                                className="object-contain p-4"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections with Sidebar */}
            <SidebarLayout
                navigationItems={navigationItems}
                title="About Arreglio"
                titleHighlight="Arreglio"
            >

                {/* Problem Statement */}
                <section id="problem-statement" className="mb-16 lg:mb-20">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>The Problem We Saw</h2>
                            <div className="text-lg text-gray-700 italic mb-8 max-w-3xl mx-auto" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                                <em>Imagine dropping your scooter at a repair shop and hearing nothing for days. The owner flips through a messy notebook, muttering: &quot;Maybe tomorrow?&quot;</em>
                            </div>
                            <div className="text-lg text-gray-700 space-y-2 max-w-2xl mx-auto" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                                <p>For customers, it means frustration.</p>
                                <p>For shop owners, it means stress and lost time.</p>
                                <p>For everyone, it means inefficiency.</p>
                            </div>
                            <p className="text-lg text-gray-700 font-semibold mt-6" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>That&apos;s the problem <strong className="text-green-600">Arreglio</strong> set out to fix.</p>
                        </div>

                        {/* Project Details */}
                        <div className="rounded-3xl p-10 lg:p-12 shadow-2xl text-white" style={{ background: 'linear-gradient(135deg, #2C3E50 0%, #34495E 50%, #2C3E50 100%)' }}>
                            <h3 className="text-3xl font-bold mb-8 text-center">Project Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center border border-white/20 hover:bg-white/20 transition-all">
                                    <h4 className="text-lg font-semibold mb-3" style={{ color: '#2ECC71' }}>My role</h4>
                                    <p className="text-white font-semibold">Product Designer</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center border border-white/20 hover:bg-white/20 transition-all">
                                    <h4 className="text-lg font-semibold mb-3" style={{ color: '#2ECC71' }}>Category</h4>
                                    <p className="text-gray-100">B2B SaaS</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center border border-white/20 hover:bg-white/20 transition-all">
                                    <h4 className="text-lg font-semibold mb-3" style={{ color: '#2ECC71' }}>Tools</h4>
                                    <p className="text-gray-100">Figma, FigJam, Maze, Google Forms</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center border border-white/20 hover:bg-white/20 transition-all">
                                    <h4 className="text-lg font-semibold mb-3" style={{ color: '#2ECC71' }}>Timeline</h4>
                                    <p className="text-gray-100">6 months</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Arreglio */}
                <section id="about-arreglio" className="bg-gray-50 mb-16 lg:mb-24 py-16 lg:py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">About Arreglio</h2>
                        <p className="text-lg text-gray-700 leading-relaxed text-center">
                            <em>Arreglio</em> is a digital platform designed to empower small workshop owners by giving them an online presence where they can register their shop, showcase services, list products with pricing, and manage customer bookings seamlessly. The goal was to simplify discovery and trust-building between local service providers and their customers.
                        </p>
                    </div>
                </section>

                {/* The Problem We Saw */}
                <section className="py-16 lg:py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>The Problem We Saw</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                            <div>
                                <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                                    Repair shops run on chaos, handwritten logs, missed calls, lost parts, and customers left in the dark. Communication breakdowns aren&apos;t trivial: <em>86% of failures in service industries stem from poor communication</em> (Pumble), and customer satisfaction in the aftermarket repair sector is already <em>declining year over year</em> (Modern Tire Dealer).
                                </p>
                            </div>
                            <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/projects/Arreglio/problem.webp"
                                    alt="Repair shop chaos"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solution */}
                <section id="solution" className="bg-gray-50 py-16 lg:py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Solution</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                            <div className="order-2 lg:order-1 relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/projects/Arreglio/solution.webp"
                                    alt="Arreglio solution"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="order-1 lg:order-2">
                                <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                                    <strong>Arreglio</strong> bridges this gap by providing a streamlined platform where shop owners can onboard easily, list services, display pricing, and manage schedules while customers can explore, compare, and book with confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Goals */}
                <section id="goals" className="mb-16 lg:mb-20 py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Goals</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-[#E8F8F5] to-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 text-center" style={{ border: '2px solid #A7D5D0' }}>
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#2C3E50' }}>
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Business</h3>
                                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Enable shop owners to digitize operations and grow visibility.</p>
                            </div>
                            <div className="bg-gradient-to-br from-[#E8F8F5] to-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 text-center" style={{ border: '2px solid #2ECC71' }}>
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#2ECC71' }}>
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>User</h3>
                                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Provide customers with a trustworthy, easy-to-use way to find and book services.</p>
                            </div>
                            <div className="bg-gradient-to-br from-[#E8F8F5] to-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 text-center" style={{ border: '2px solid #A7D5D0' }}>
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#2C3E50' }}>
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Design</h3>
                                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Create an intuitive experience that reduces friction for both shop owners and customers.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Competitors */}
                <section id="competitors" className="bg-gray-50 py-16 lg:py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Competitors</h2>
                        <p className="text-lg text-gray-700 leading-relaxed text-center">
                            Studied apps like <em>Urban Company</em> and <em>JustDial</em>. Identified gaps such as complex onboarding for small shops and lack of emphasis on pricing transparency areas where <em>Arreglio</em> could differentiate.
                        </p>
                    </div>
                </section>

                {/* User Personas */}
                <section id="user-personas" className="py-16 lg:py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
                            Understanding Our Users: Two Critical Personas
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Anna Lindström */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                                        <Image
                                            src="/images/projects/Arreglio/anna.webp"
                                            alt="Anna Lindström"
                                            width={64}
                                            height={64}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">Anna Lindström</h3>
                                        <p className="text-gray-600">Workshop Owner • Age 38 • Stockholm, Sweden</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="px-4 sm:px-6 lg:px-8">
                                        <h4 className="font-semibold text-gray-900 mb-2">Goals:</h4>
                                        <p className="text-gray-700">Streamline operations, reduce paperwork, improve customer satisfaction</p>
                                    </div>
                                    <div className="px-4 sm:px-6 lg:px-8">
                                        <h4 className="font-semibold text-gray-900 mb-2">Pain Points:</h4>
                                        <p className="text-gray-700">Lost repair tickets, unclear timelines, constant phone calls</p>
                                    </div>
                                    <blockquote className="text-gray-600 italic border-l-4 border-green-500 pl-4">
                                        &quot;I spend more time managing papers than fixing bikes. There has to be a better way.&quot;
                                    </blockquote>
                                </div>
                            </div>

                            {/* Ramesh Patel */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                                        <Image
                                            src="/images/projects/Arreglio/untitled.webp"
                                            alt="Ramesh Patel"
                                            width={64}
                                            height={64}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">Ramesh Patel</h3>
                                        <p className="text-gray-600">Customer • Age 29 • Dubai, UAE</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="px-4 sm:px-6 lg:px-8">
                                        <h4 className="font-semibold text-gray-900 mb-2">Goals:</h4>
                                        <p className="text-gray-700">Track repair progress, understand costs, avoid surprise delays</p>
                                    </div>
                                    <div className="px-4 sm:px-6 lg:px-8">
                                        <h4 className="font-semibold text-gray-900 mb-2">Pain Points:</h4>
                                        <p className="text-gray-700">No visibility into process, unexpected charges, communication gaps</p>
                                    </div>
                                    <blockquote className="text-gray-600 italic border-l-4 border-green-500 pl-4">
                                        &quot;I just want to know when my scooter will be ready without calling every day.&quot;
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Compliance & Trust */}
                <section id="compliance-trust" className="bg-gray-50 py-16 lg:py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Compliance & Trust</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">EU (European Union)</h3>
                                <h4 className="font-semibold text-gray-900 mb-2">GDPR</h4>
                                <p className="text-gray-700 text-sm">Ensures lawful, transparent, and secure handling of user and business data, with rights for data access, portability, and erasure.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                                <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">India</h3>
                                <h4 className="font-semibold text-gray-900 mb-2">DPDP Act 2023</h4>
                                <p className="text-gray-700 text-sm">Protects personal data with consent-driven processing, clear notice, and accountability for secure data storage and transfer.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">UAE</h3>
                                <h4 className="font-semibold text-gray-900 mb-2">PDPL</h4>
                                <p className="text-gray-700 text-sm">Regulates collection, processing, and storage of personal data, requiring user consent and safeguarding privacy across digital platforms.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Color Palette Psychology */}
                <section id="color-palette" className="py-16 lg:py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Color Palette Psychology for Arreglio</h2>
                        <div className="text-center">
                            <div className="inline-flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                                    <span className="text-green-400 text-2xl font-bold">A</span>
                                </div>
                                <div className="text-left">
                                    <p className="text-lg text-gray-700">I chose <strong>#2C3E50</strong> and <strong>#2ECC71</strong> to balance trust and growth.</p>
                                </div>
                            </div>
                            <p className="text-lg text-gray-700">
                                The deep navy grounds the brand in reliability, while the vibrant green injects energy, prosperity, and positive action&mdash;resonating with both customers booking services and shop owners expanding their business.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Font for Arreglio */}
                <section className="bg-gray-50 py-16 lg:py-24">
                    <div className={`${containers.main} text-center`}>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Font for Arreglio</h2>
                        <div className="text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Outfit
                        </div>
                        <p className="text-lg text-gray-700">
                            A modern geometric sans-serif that conveys <strong>clarity, trust, and professionalism</strong>. Its clean lines and balanced structure make the application feel <strong>approachable yet reliable</strong>, aligning with users&apos; need for <strong>transparency and ease</strong> in managing vehicle services.
                        </p>
                    </div>
                </section>

                {/* Design Process Evolution */}
                <section id="design-process" className="py-16 lg:py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
                            Arreglio: Design Process Evolution
                        </h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                                <div className="px-4 sm:px-6 lg:px-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Research Phase</h3>
                                    <p className="text-gray-700">Conducted 25 interviews with workshop owners and customers. Identified key pain points in traditional repair workflows, which Arreglio aims to solve.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                                <div className="px-4 sm:px-6 lg:px-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Wireframing</h3>
                                    <p className="text-gray-700">Created low-fidelity mockups focusing on core functionality for the Arreglio platform. Tested basic flow concepts with target users.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                                <div className="px-4 sm:px-6 lg:px-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Prototyping</h3>
                                    <p className="text-gray-700">Built interactive prototypes to validate navigation patterns for Arreglio. Refined user interface elements based on testing feedback.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                                <div className="px-4 sm:px-6 lg:px-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Final UI Design</h3>
                                    <p className="text-gray-700">Developed comprehensive design system with accessible color schemes, typography, and responsive components for Arreglio.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Customer Booking Process */}
                <section id="booking-process" className="bg-gray-50 py-16 lg:py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
                            Customer Booking Process
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold">1</div>
                                <h3 className="font-semibold text-gray-900">Find Service</h3>
                                <p className="text-sm text-gray-600 text-center">Search for repair services in your area</p>
                            </div>
                            <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold">2</div>
                                <h3 className="font-semibold text-gray-900">Book Service</h3>
                                <p className="text-sm text-gray-600 text-center">Choose a time that works for you</p>
                            </div>
                            <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold">3</div>
                                <h3 className="font-semibold text-gray-900">Track Progress</h3>
                                <p className="text-sm text-gray-600 text-center">Get real-time updates on your repair</p>
                            </div>
                            <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold">4</div>
                                <h3 className="font-semibold text-gray-900">Complete Payment</h3>
                                <p className="text-sm text-gray-600 text-center">Pay securely through the platform</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Store Owner Process */}
                <section id="store-owner-process" className="py-16 lg:py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
                            Store Owner Process
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center space-y-3 p-6 bg-gray-50 rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold">1</div>
                                <h3 className="font-semibold text-gray-900">Set Up</h3>
                                <p className="text-sm text-gray-600 text-center">Discovers Arreglio and signs up with his email.</p>
                            </div>
                            <div className="flex flex-col items-center space-y-3 p-6 bg-gray-50 rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold">2</div>
                                <h3 className="font-semibold text-gray-900">Create Shop Profile</h3>
                                <p className="text-sm text-gray-600 text-center">Adds shop name, location, opening hours, and photos.</p>
                            </div>
                            <div className="flex flex-col items-center space-y-3 p-6 bg-gray-50 rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold">3</div>
                                <h3 className="font-semibold text-gray-900">Add Services & Pricing</h3>
                                <p className="text-sm text-gray-600 text-center">Lists services with prices.</p>
                            </div>
                            <div className="flex flex-col items-center space-y-3 p-6 bg-gray-50 rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold">4</div>
                                <h3 className="font-semibold text-gray-900">Manage Bookings</h3>
                                <p className="text-sm text-gray-600 text-center">Receives customer bookings in the app dashboard.</p>
                            </div>
                            <div className="flex flex-col items-center space-y-3 p-6 bg-gray-50 rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold">5</div>
                                <h3 className="font-semibold text-gray-900">Track Payments</h3>
                                <p className="text-sm text-gray-600 text-center">Checks customer payments and updates service status.</p>
                            </div>
                            <div className="flex flex-col items-center space-y-3 p-6 bg-gray-50 rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold">6</div>
                                <h3 className="font-semibold text-gray-900">Collect Reviews</h3>
                                <p className="text-sm text-gray-600 text-center">Requests customers to leave reviews after service.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* UI Screens */}
                <section id="ui-screens" className="mb-16 lg:mb-20 py-16 lg:py-20" style={{ background: 'linear-gradient(135deg, #2C3E50 0%, #1A252F 50%, #2C3E50 100%)' }}>
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-16 text-center" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>
                            Sneak Peak of UI
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2">
                                <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Product Page</h3>
                                <p className="text-gray-700 text-sm mb-6 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Comprehensive product details with clear visibility of rental tenure, pricing, and availability.</p>
                                <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 shadow-inner">
                                    <Image
                                        src="/images/projects/Arreglio/arreglio-UI-01.webp"
                                        alt="Product Page UI"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2">
                                <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Kanban Board</h3>
                                <p className="text-gray-700 text-sm mb-6 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>A streamlined dashboard for store owners to track, prioritize, and manage tickets efficiently from a single view.</p>
                                <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 shadow-inner">
                                    <Image
                                        src="/images/projects/Arreglio/arreglio-ui-02.webp"
                                        alt="Kanban Board UI"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2">
                                <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Dashboard View</h3>
                                <p className="text-gray-700 text-sm mb-6 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>A 24/7 intelligent dashboard ensuring every customer query is addressed promptly without delays.</p>
                                <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 shadow-inner">
                                    <Image
                                        src="/images/projects/Arreglio/arreglio-ui-03.webp"
                                        alt="Dashboard UI"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2">
                                <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Booking Management</h3>
                                <p className="text-gray-700 text-sm mb-6 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Empowering store owners to manage bookings and appointments with their unique business needs.</p>
                                <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 shadow-inner">
                                    <Image
                                        src="/images/projects/Arreglio/arreglio-ui-04.webp"
                                        alt="Booking Management UI"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Design Challenges */}
                <section id="design-challenges" className="py-16 lg:py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Design Challenges</h2>
                        <div className="space-y-8">
                            <div className="bg-gray-50 p-8 rounded-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Simplicity vs. Flexibility</h3>
                                <p className="text-gray-700">Creating intuitive interfaces that accommodate diverse workshop workflows without overwhelming small business owners with complex features.</p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Real-Time Updates</h3>
                                <p className="text-gray-700">Ensuring seamless communication between workshops and customers while maintaining data accuracy across multiple touchpoints and devices.</p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Adoption & Trust</h3>
                                <p className="text-gray-700">Building confidence in digital processes among traditional craftspeople while ensuring robust security for sensitive customer and business data.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Measurable Impact */}
                <section id="impact" className="mb-16 lg:mb-20 py-16 lg:py-20" style={{ background: 'linear-gradient(135deg, #2C3E50 0%, #34495E 50%, #2C3E50 100%)' }}>
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white text-center" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Measurable Impact</h2>
                        <p className="text-lg text-gray-200 text-center mb-12 max-w-3xl mx-auto" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                            Post-launch metrics demonstrated significant improvements across all key performance indicators.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl text-center border-2 border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
                                <div className="text-5xl font-bold mb-4" style={{ color: '#2ECC71' }}>70%</div>
                                <p className="text-lg text-gray-100" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Faster Turnaround</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl text-center border-2 border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
                                <div className="text-5xl font-bold mb-4" style={{ color: '#2ECC71' }}>80%</div>
                                <p className="text-lg text-gray-100" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Customer Satisfaction</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl text-center border-2 border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
                                <div className="text-5xl font-bold mb-4" style={{ color: '#2ECC71' }}>40%</div>
                                <p className="text-lg text-gray-100" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Cost Savings</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl text-center border-2 border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
                                <div className="text-5xl font-bold mb-4" style={{ color: '#2ECC71' }}>60%</div>
                                <p className="text-lg text-gray-100" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Owner Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Learnings */}
                <section id="key-learnings" className="bg-gray-50 py-16 lg:py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Key Learnings</h2>
                        <p className="text-lg text-gray-700 text-center mb-8">
                            Small business owners value simplicity above everything else. Customers prioritize trust indicators like reviews and clear pricing.
                        </p>
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                            <blockquote className="text-lg text-gray-700 italic">
                                &quot;I never thought going online would be this easy. With Arreglio, I now get twice as many customer inquiries as before.&quot;
                            </blockquote>
                            <p className="font-semibold text-gray-900 mt-4">Maria - Local Shop Owner</p>
                        </div>
                    </div>
                </section>
            </SidebarLayout>

            {/* Call to Action */}
            <section className="py-20 lg:py-32 bg-gray-50">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-900 rounded-3xl p-12 lg:p-16 text-center">
                            <h2 className={`${typography.h2.section} text-white mb-6`}>
                                Let&apos;s build experiences that simplify complexity.
                            </h2>
                            <p className={`${typography.body.large} text-gray-300 mb-10 max-w-2xl mx-auto`}>
                                I&apos;m always excited to collaborate on products that empower people and make operations effortless.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" className="group bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-8 py-4 text-lg font-semibold">
                                    <span className="flex items-center gap-3">
                                        Let&apos;s Connect
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </Button>
                            </Link>
                            <p className="text-sm text-gray-500 text-center mt-8 italic">
                                *The projects showcased here were created as part of my professional work with my organization. Certain details and sensitive information have been blurred, modified, or omitted to maintain confidentiality. The visuals and case studies are presented solely for the purpose of demonstrating my design process and contributions in UI/UX.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ArreglioProjectPage;
