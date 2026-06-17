import type { Metadata } from 'next';
import MinimalLayout from '@/components/layout/MinimalLayout';
import ContactSection from '@/components/contact/ContactSection';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
    title: 'Contact',
    description:
        'Get in touch with Vasini Singh for product design collaborations, freelance work, or full-time opportunities.',
    path: '/contact',
});

export default function Contact() {
    return (
        <MinimalLayout>
            <ContactSection />
        </MinimalLayout>
    );
}
