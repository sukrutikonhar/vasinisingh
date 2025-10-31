import MinimalLayout from '@/components/layout/MinimalLayout';
import ContactPageHero from '@/components/contact/ContactPageHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export default function Contact() {
    return (
        <MinimalLayout>
            {/* Hero + Form Section */}
            <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-white">
                <div className="container-custom px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
                            {/* Left - Hero */}
                            <ContactPageHero />

                            {/* Right - Form */}
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Info Blocks */}
            <ContactInfo />
        </MinimalLayout>
    );
}
