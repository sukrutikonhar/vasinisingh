import MinimalLayout from '@/components/layout/MinimalLayout';
import ContactPageHero from '@/components/contact/ContactPageHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export default function Contact() {
    return (
        <MinimalLayout>
            <ContactPageHero />
            <ContactForm />
            <ContactInfo />
        </MinimalLayout>
    );
}
