import type { Metadata } from 'next';
import MinimalLayout from '@/components/layout/MinimalLayout';
import NewHeroSection from '@/components/home/NewHeroSection';
import StatsStrip from '@/components/home/StatsStrip';
import AnimatedProjectGrid from '@/components/home/AnimatedProjectGrid';
import SkillsSection from '@/components/home/SkillsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Vasini Singh, Senior Product Designer',
    description:
        'Senior Product Designer shaping calm, strategic product experiences for SaaS teams and ambitious digital products. Eight years across healthcare, ESG, B2B SaaS, and enterprise tools.',
    path: '/',
});

export default function Home() {
    return (
        <MinimalLayout>
            <NewHeroSection />
            <StatsStrip />
            <AnimatedProjectGrid />
            <SkillsSection />
            <TestimonialsSection />
            <CTASection />
        </MinimalLayout>
    );
}
