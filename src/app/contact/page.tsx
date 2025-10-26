import Layout from '@/components/layout/Layout';
import ContactHeroSection from '@/components/contact/ContactHeroSection';
import OpportunitiesContactSection from '@/components/contact/OpportunitiesContactSection';
import ContactFormSection from '@/components/contact/ContactFormSection';
import WriteToMeSection from '@/components/contact/WriteToMeSection';

export default function Contact() {
    return (
        <Layout>
            <ContactHeroSection />
            <OpportunitiesContactSection />
            <ContactFormSection />
            <WriteToMeSection />
        </Layout>
    );
}
