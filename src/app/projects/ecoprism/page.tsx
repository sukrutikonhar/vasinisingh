import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, XCircle, BarChart3, Users, Target } from 'lucide-react';
import Button from '@/components/ui/Button';
import Layout from '@/components/layout/Layout';
import SidebarLayout from '@/components/layout/SidebarLayout';
import { typography, spacing, containers } from '@/lib/typography';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ecoPRISM - ESG SaaS Platform | Vasini Singh',
    description: 'A detailed case study on ecoPRISM, an ESG SaaS platform for sustainable business practices.',
};

const EcoprismProjectPage: React.FC = () => {
    const navigationItems = [
        { id: 'product-overview', label: 'Product Overview', href: '#product-overview' },
        { id: 'my-role', label: 'My Role & Approach', href: '#my-role' },
        { id: 'challenges', label: 'Challenges & Opportunities', href: '#challenges' },
        { id: 'goals', label: 'Goals', href: '#goals' },
        { id: 'user-research', label: 'User Research', href: '#user-research' },
        { id: 'user-surveys', label: 'User Surveys', href: '#user-surveys' },
        { id: 'design-process', label: 'Design Process', href: '#design-process' },
        { id: 'design-solutions', label: 'Design Solutions', href: '#design-solutions' },
        { id: 'examples', label: 'Examples', href: '#examples' },
        { id: 'key-takeaways', label: 'Key Takeaways', href: '#key-takeaways' },
        { id: 'impact', label: 'Impact & Outcomes', href: '#impact' },
        { id: 'conclusion', label: 'Conclusion', href: '#conclusion' },
        { id: 'ui-screens', label: 'UI Screens', href: '#ui-screens' }
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className={`relative bg-white text-gray-900 ${spacing.section} overflow-hidden`}>
                <div className="px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className={`${typography.h1.projectHero} text-gray-900 mb-6`} style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>
                            ecoPRISM – ESG SaaS Platform
                        </h1>
                        <div className="relative w-full max-w-4xl mx-auto h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-8">
                            <Image
                                src="/images/projects/ecoprism/Landing page.webp"
                                alt="ecoPRISM ESG SaaS Platform"
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
                title="About ecoPRISM"
                titleHighlight="ecoPRISM"
            >

                {/* Product Overview */}
                <section id="product-overview" className="mb-16 lg:mb-20">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className={`${typography.h2.section} text-center mb-8`} style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Product Overview</h2>
                        <p className={`${typography.body.large} text-gray-700 text-center mb-12 max-w-3xl mx-auto`} style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                            ecoPRISM is an ESG (Environmental, Social, Governance) SaaS platform that simplifies compliance and sustainability reporting. My role was to <strong>translate research insights into intuitive UI and UX workflows</strong>, ensuring the product experience was clear, usable, and scalable.
                        </p>

                        {/* Project Details */}
                        <div className="rounded-3xl p-10 lg:p-12 shadow-2xl text-white" style={{ background: 'linear-gradient(135deg, #1A5F5F 0%, #2C5F5F 50%, #1A5F5F 100%)' }}>
                            <h3 className="text-3xl font-bold mb-8 text-center">Project Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center border border-white/20 hover:bg-white/20 transition-all">
                                    <h4 className="text-lg font-semibold mb-3" style={{ color: '#FFD89B' }}>Domain</h4>
                                    <p className="text-gray-100">Environmental, Social, Governance (ESG)</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center border border-white/20 hover:bg-white/20 transition-all">
                                    <h4 className="text-lg font-semibold mb-3" style={{ color: '#FFD89B' }}>My Role</h4>
                                    <p className="text-white font-semibold">Foundation Designer</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center border border-white/20 hover:bg-white/20 transition-all">
                                    <h4 className="text-lg font-semibold mb-3" style={{ color: '#FFD89B' }}>Tools</h4>
                                    <p className="text-gray-100">Adobe XD, Devops</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center border border-white/20 hover:bg-white/20 transition-all">
                                    <h4 className="text-lg font-semibold mb-3" style={{ color: '#FFD89B' }}>Category</h4>
                                    <p className="text-gray-100">B2B SaaS WebApp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* My Role & Approach */}
                <section id="my-role" className="mb-16 lg:mb-20 py-16 lg:py-20">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>My Role & Approach</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-[#E0F4F0] to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border" style={{ borderColor: '#5F9E8F' }}>
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: '#2C5F5F' }}>
                                    <Target className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Foundation Designer</h3>
                                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Owned the end-to-end visual and interaction design of the platform, including wireframing, prototyping, user flows, and high-fidelity interfaces.</p>
                            </div>
                            <div className="bg-gradient-to-br from-[#FFF8E1] to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border" style={{ borderColor: '#FFC672' }}>
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: '#FF8C00' }}>
                                    <BarChart3 className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Domain Learning</h3>
                                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Though new to ESG, I rapidly onboarded regulatory knowledge and sustainability concepts by closely collaborating with in-house sustainability experts who led user research and interviews.</p>
                            </div>
                            <div className="bg-gradient-to-br from-[#E0F4F0] to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border" style={{ borderColor: '#5F9E8F' }}>
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: '#2C5F5F' }}>
                                    <Users className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Cross-disciplinary Collaboration</h3>
                                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Worked alongside compliance teams, engineers, and domain specialists to ensure accurate translation of complex regulatory logic (e.g., EU CSRD, India BRSR) into intuitive and accessible user experiences.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Challenges & Opportunities */}
                <section id="challenges" className="mb-16 lg:mb-20 bg-gray-50 py-16 lg:py-20">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Challenges & Opportunities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-red-500">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <XCircle className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Complex Workflows</h3>
                                        <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>ESG reporting involves multiple regulatory frameworks, numerous data inputs, and strict audit requirements. Simplifying these for diverse users was a significant design challenge.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-orange-500">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <XCircle className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Dynamic Compliance</h3>
                                        <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>The platform needed to support current frameworks and scale to new jurisdictions with configurable modules—necessitating flexible, modular UI components.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-yellow-500">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <XCircle className="w-6 h-6 text-yellow-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>User Diversity</h3>
                                        <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Interface had to accommodate expert sustainability officers and suppliers with limited ESG experience, requiring role-based adaptations and progressive disclosure.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-teal-500">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <XCircle className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Trust & Transparency</h3>
                                        <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Given regulatory stakes, interfaces had to clearly communicate validation status, data provenance, and audit trails without overwhelming users.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Goals */}
                <section id="goals" className="mb-16 lg:mb-20 py-16 lg:py-20">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Goals</h2>
                        <p className="text-lg text-gray-700 text-center mb-16 max-w-3xl mx-auto" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                            Our goal was to help enterprises navigate fast-evolving ESG regulations and make informed sustainability decisions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-[#E0F4F0] to-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2" style={{ borderColor: '#5F9E8F' }}>
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#1A5F5F' }}>
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Goal 1</h3>
                                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Enable rapid, accurate ESG compliance reporting globally.</p>
                            </div>
                            <div className="bg-gradient-to-br from-[#FFF8E1] to-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2" style={{ borderColor: '#FFC672' }}>
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#FF8C00' }}>
                                    <BarChart3 className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Goal 2</h3>
                                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Drive user adoption with clean, data-rich dashboards and workflows.</p>
                            </div>
                            <div className="bg-gradient-to-br from-[#E0F4F0] to-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2" style={{ borderColor: '#5F9E8F' }}>
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#2C5F5F' }}>
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Goal 3</h3>
                                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Facilitate supplier participation and regional regulatory adaptation.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* User Research */}
                <section id="user-research" className="mb-16 lg:mb-20 py-16 lg:py-20 bg-gray-50">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>User Research</h2>
                        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto italic" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                            To ensure depth and objectivity, the interviews were led by an expert research team, enabling us to uncover:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center border-t-4 border-teal-500">
                                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl font-bold text-teal-600">1</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Finding 1</h3>
                                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Users struggled to track and align with varying regulatory requirements across jurisdictions.</p>
                            </div>
                            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center border-t-4 border-teal-500">
                                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl font-bold text-teal-600">2</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Finding 2</h3>
                                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Manual data gathering from suppliers caused bottlenecks and inconsistent submissions.</p>
                            </div>
                            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center border-t-4 border-teal-500">
                                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl font-bold text-teal-600">3</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Finding 3</h3>
                                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Most found existing ESG tools visually cluttered and unintuitive for ongoing reporting.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* User Surveys */}
                <section className="mb-16 lg:mb-20 py-16 lg:py-20">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>User Surveys</h2>
                        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                            A targeted survey of ESG and procurement specialists validated workflow pain points, dashboard needs, and integrations, shaping adaptable modules and supplier management workflows.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-green-600 to-teal-600 text-white p-10 rounded-3xl shadow-2xl text-center hover:shadow-3xl transition-all transform hover:scale-105">
                                <div className="text-6xl font-bold mb-3">88%</div>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Insight 1</h3>
                                <p className="text-green-50 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Prioritized real-time regulatory updates within the platform.</p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white p-10 rounded-3xl shadow-2xl text-center hover:shadow-3xl transition-all transform hover:scale-105">
                                <div className="text-6xl font-bold mb-3">76%</div>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Insight 2</h3>
                                <p className="text-blue-50 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Wanted customizable dashboards for different reporting needs.</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-600 to-teal-600 text-white p-10 rounded-3xl shadow-2xl text-center hover:shadow-3xl transition-all transform hover:scale-105">
                                <div className="text-6xl font-bold mb-3">62%</div>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Insight 3</h3>
                                <p className="text-purple-50 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Struggled with cross-team supplier data coordination.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Design Process */}
                <section className="mb-16 lg:mb-20 py-16 lg:py-20 bg-gradient-to-br from-teal-50 to-white">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Design Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all text-center border-2 border-teal-100">
                                <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">1</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Workshops & Sprints</h3>
                                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Collaborated with sustainability experts to scope compliance workflows, pain points, and user priorities.</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all text-center border-2 border-teal-100">
                                <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">2</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Wireframes & Prototypes</h3>
                                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Focused on modular dashboards, onboarding wizards, dynamic reporting, and supplier survey forms.</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all text-center border-2 border-teal-100">
                                <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">3</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Iterative Testing</h3>
                                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Continuous improvement through expert-driven feedback loops, ensuring clarity, trust, and auditability.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Design Solutions */}
                <section className="mb-16 lg:mb-20 py-16 lg:py-20">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Design Solutions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-white to-teal-50 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-2 border-teal-100">
                                <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mb-6">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Modular Dashboards</h3>
                                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Provided role-specific KPIs and compliance status at a glance, customizable across geographies.</p>
                            </div>
                            <div className="bg-gradient-to-br from-white to-blue-50 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-2 border-blue-100">
                                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                    <BarChart3 className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Onboarding Wizards</h3>
                                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Guided users through complex configuration and data mapping tasks with stepwise instructions and error validation.</p>
                            </div>
                            <div className="bg-gradient-to-br from-white to-purple-50 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-2 border-purple-100">
                                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Regulatory Reporting Flows</h3>
                                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Dynamic forms that generate CSRD-compliant reports, with in-built audit trails and version control.</p>
                            </div>
                            <div className="bg-gradient-to-br from-white to-green-50 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-2 border-green-100">
                                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Supplier Engagement</h3>
                                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Multi-language surveys with real-time tracking to facilitate upstream data collection without burdensome processes.</p>
                            </div>
                        </div>

                        {/* Brand Guidelines */}
                        <div className="mt-12 bg-gradient-to-br from-gray-900 to-teal-900 text-white p-12 rounded-3xl shadow-2xl">
                            <h3 className="text-3xl font-bold mb-8 text-center">Brand Guidelines</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                                    <h4 className="font-semibold mb-3 text-teal-200 text-lg">Color Palette:</h4>
                                    <p className="text-gray-100"><em>Deep Teal</em> (trust, sustainability) & <em>Vivid Yellow</em> (progress, action).</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                                    <h4 className="font-semibold mb-3 text-teal-200 text-lg">Typography:</h4>
                                    <p className="text-gray-100">Poppins for clean readability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Examples */}
                <section id="examples" className="mb-16 lg:mb-20 py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Few Examples</h2>

                        {/* Example 1 */}
                        <div className="mb-20">
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                                <div className="px-8 py-6" style={{ background: 'linear-gradient(135deg, #1A5F5F 0%, #2C5F5F 100%)' }}>
                                    <h3 className="text-3xl font-bold text-white" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>1. Fragmented Data</h3>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                    <div className="p-10 bg-white">
                                        <div className="mb-6">
                                            <h4 className="text-lg font-bold text-red-600 mb-3 uppercase tracking-wide">Problem</h4>
                                            <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Fragmented compliance data made it hard to get an overview or analyze trends.</p>
                                        </div>
                                        <div className="mb-6">
                                            <h4 className="text-lg font-bold text-green-600 mb-3 uppercase tracking-wide">Solution</h4>
                                            <ul className="text-gray-700 space-y-3" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                                                <li className="flex items-start gap-2">• <span>Introduced <strong>connectors</strong> to import data from a single source in Phase 1.</span></li>
                                                <li className="flex items-start gap-2">• <span>Expanded to <strong>multiple connectors</strong> in Phase 2 to integrate Excel, PDF, and other formats.</span></li>
                                            </ul>
                                        </div>
                                        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
                                            <p className="text-green-800 font-semibold text-lg" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Result: Users can now access and analyze ESG data <strong>30% faster</strong> than before</p>
                                        </div>
                                    </div>
                                    <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-50">
                                        <Image
                                            src="/images/projects/ecoprism/eco-01.webp"
                                            alt="Data Integration Interface"
                                            fill
                                            className="object-contain p-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Example 2 */}
                        <div className="mb-20">
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                                <div className="px-8 py-6" style={{ background: 'linear-gradient(135deg, #FF8C00 0%, #FFA500 100%)' }}>
                                    <h3 className="text-3xl font-bold text-white" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>2. Streamlining CSRD Reporting</h3>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                    <div className="p-10 bg-white order-2 lg:order-1">
                                        <div className="mb-6">
                                            <h4 className="text-lg font-bold text-red-600 mb-3 uppercase tracking-wide">Problem</h4>
                                            <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>CSRD reporting required extensive manual effort and coordination.</p>
                                        </div>
                                        <div className="mb-6">
                                            <h4 className="text-lg font-bold text-green-600 mb-3 uppercase tracking-wide">Solution</h4>
                                            <ul className="text-gray-700 space-y-3" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                                                <li className="flex items-start gap-2">• <span>Integrated <strong>AI-assisted answers</strong> to suggest responses for reporting questions.</span></li>
                                                <li className="flex items-start gap-2">• <span>Enabled <strong>team-based assignment</strong> with verification and alert notifications.</span></li>
                                            </ul>
                                        </div>
                                        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
                                            <p className="text-green-800 font-semibold text-lg" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Result: Reporting time reduced by <strong>40%</strong>, error rate dropped by <strong>30%</strong></p>
                                        </div>
                                    </div>
                                    <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-50 order-1 lg:order-2">
                                        <Image
                                            src="/images/projects/ecoprism/eco-02.webp"
                                            alt="CSRD Reporting Interface"
                                            fill
                                            className="object-contain p-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Example 3 */}
                        <div className="mb-20">
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                                <div className="px-8 py-6" style={{ background: 'linear-gradient(135deg, #2C5F5F 0%, #1A5F5F 100%)' }}>
                                    <h3 className="text-3xl font-bold text-white" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>3. Emission Reduction Strategy Tracking</h3>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                    <div className="p-10 bg-white">
                                        <div className="mb-6">
                                            <h4 className="text-lg font-bold text-red-600 mb-3 uppercase tracking-wide">Problem</h4>
                                            <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Companies struggled to strategically plan emission reduction goals.</p>
                                        </div>
                                        <div className="mb-6">
                                            <h4 className="text-lg font-bold text-green-600 mb-3 uppercase tracking-wide">Solution</h4>
                                            <ul className="text-gray-700 space-y-3" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                                                <li className="flex items-start gap-2">• <span>Built a <strong>target-tracking dashboard</strong> to set goals and monitor progress.</span></li>
                                                <li className="flex items-start gap-2">• <span>Visualized current value, target, % progress, milestones, and allowed deep dives.</span></li>
                                            </ul>
                                        </div>
                                        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
                                            <p className="text-green-800 font-semibold text-lg" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Result: Users could track goals and milestones. <strong>90%</strong> of targets tracked without manual follow-up</p>
                                        </div>
                                    </div>
                                    <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-50">
                                        <Image
                                            src="/images/projects/ecoprism/eco-04.webp"
                                            alt="Emission Tracking Dashboard"
                                            fill
                                            className="object-contain p-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Example 4 */}
                        <div className="mb-20">
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                                <div className="px-8 py-6" style={{ background: 'linear-gradient(135deg, #FFA500 0%, #FF8C00 100%)' }}>
                                    <h3 className="text-3xl font-bold text-white" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>4. Current Scenario & Future Growth Analysis</h3>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                    <div className="p-10 bg-white order-2 lg:order-1">
                                        <div className="mb-6">
                                            <h4 className="text-lg font-bold text-red-600 mb-3 uppercase tracking-wide">Problem</h4>
                                            <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Assessing the current scenario and projecting future growth was unclear.</p>
                                        </div>
                                        <div className="mb-6">
                                            <h4 className="text-lg font-bold text-green-600 mb-3 uppercase tracking-wide">Solution</h4>
                                            <ul className="text-gray-700 space-y-3" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                                                <li className="flex items-start gap-2">• <span>Allowed users to input current and target metrics; system calculated <strong>annual growth rates</strong>.</span></li>
                                            </ul>
                                        </div>
                                        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
                                            <p className="text-green-800 font-semibold text-lg" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Result: Users gained clear visibility. <strong>95%</strong> of pilots reported better strategic planning</p>
                                        </div>
                                    </div>
                                    <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-50 order-1 lg:order-2">
                                        <Image
                                            src="/images/projects/ecoprism/graph render.webp"
                                            alt="Growth Analysis Chart"
                                            fill
                                            className="object-contain p-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Takeaways */}
                <section className="bg-gray-50 py-16 lg:py-24">
                    <div className={`${containers.main} text-center`}>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Key Takeaways</h2>
                        <blockquote className="text-xl text-gray-700 italic">
                            &quot;Designing for a <strong>new, regulation-heavy domain</strong> taught me the importance of working with domain experts and <strong>keeping the UI lightweight</strong>.&quot;
                        </blockquote>
                    </div>
                </section>

                {/* Impact & Outcomes */}
                <section className="mb-16 lg:mb-20 py-16 lg:py-20" style={{ background: 'linear-gradient(135deg, #1A5F5F 0%, #2C5F5F 50%, #1A5F5F 100%)' }}>
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-white" style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}>Impact & Outcomes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-white/10 backdrop-blur-sm text-white p-10 rounded-3xl text-center border-2 border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
                                <div className="text-5xl font-bold mb-4" style={{ color: '#FFD89B' }}>89%</div>
                                <p className="text-lg text-gray-100" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Task Completion Rate</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm text-white p-10 rounded-3xl text-center border-2 border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
                                <div className="text-5xl font-bold mb-4" style={{ color: '#FFA500' }}>4.6/5</div>
                                <p className="text-lg text-gray-100" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>User Satisfaction</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm text-white p-10 rounded-3xl text-center border-2 border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
                                <div className="text-5xl font-bold mb-4" style={{ color: '#FFD89B' }}>&lt;2%</div>
                                <p className="text-lg text-gray-100" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Compliance Error Rate</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm text-white p-10 rounded-3xl text-center border-2 border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
                                <div className="text-5xl font-bold mb-4" style={{ color: '#FFA500' }}>57%</div>
                                <p className="text-lg text-gray-100" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Supplier Survey Response</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="bg-gray-50 py-16 lg:py-24">
                    <div className={`${containers.main} text-center`}>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Conclusion</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            ecoPRISM illustrates a successful journey of domain learning, interdisciplinary collaboration, and design leadership in ESG software. The project reflects how thoughtful product design can turn complexity into clarity, driving adoption and impact in emerging sustainability markets.
                        </p>
                    </div>
                </section>

                {/* UI Screens */}
                <section id="ui-screens" className="py-16 lg:py-24">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Sneak peak of UI Screens</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="relative h-80 rounded-xl overflow-hidden bg-gray-50">
                                <Image
                                    src="/images/projects/ecoprism/eco-01.webp"
                                    alt="ecoPRISM UI Screen 1"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                            <div className="relative h-80 rounded-xl overflow-hidden bg-gray-50">
                                <Image
                                    src="/images/projects/ecoprism/eco-02.webp"
                                    alt="ecoPRISM UI Screen 2"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                            <div className="relative h-80 rounded-xl overflow-hidden bg-gray-50">
                                <Image
                                    src="/images/projects/ecoprism/eco-04.webp"
                                    alt="ecoPRISM UI Screen 3"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 text-center mt-6 italic">
                            *The projects showcased here were created as part of my professional work with my organization. Certain details and sensitive information have been blurred, modified, or omitted to maintain confidentiality. The visuals and case studies are presented solely for the purpose of demonstrating my design process and contributions in UI/UX.
                        </p>
                    </div>
                </section>
            </SidebarLayout>

            {/* Call to Action */}
            <section className="py-20 lg:py-32 bg-gray-50">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-900 rounded-3xl p-12 lg:p-16 text-center">
                            <h2 className={`${typography.h2.section} text-white mb-6`}>
                                Looking to translate complex data into intuitive, actionable interfaces?
                            </h2>
                            <p className={`${typography.body.large} text-gray-300 mb-10 max-w-2xl mx-auto`}>
                                Let&apos;s collaborate to create user experiences that make complex workflows feel effortless and engaging.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" className="group bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-8 py-4 text-lg font-semibold">
                                    <span className="flex items-center gap-3">
                                        Drop me a note
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default EcoprismProjectPage;
