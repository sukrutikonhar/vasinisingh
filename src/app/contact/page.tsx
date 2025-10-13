import Layout from '@/components/layout/Layout';
import ContactHeroSection from '@/components/sections/ContactHeroSection';
import OpportunitiesContactSection from '@/components/sections/OpportunitiesContactSection';
import ContactFormSection from '@/components/sections/ContactFormSection';
import WriteToMeSection from '@/components/sections/WriteToMeSection';

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
