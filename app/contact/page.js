import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ContactPageSection from "@/component/contact/ContactPageSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
  title: 'HCSE | Contact Us',
  description: 'Get in touch with Healthcare Sector Skill Council (HCSE) for enquiries, support, and partnership information.',
  keywords: ['HCSE', 'contact', 'support', 'healthcare training', 'enquiries'],
  authors: [{ name: 'Healthcare Sector Skill Council (HSSC)' }],
  openGraph: {
    title: 'Contact HCSE',
    description: 'Reach out to HCSE for certificate queries, course information, or general support.',
    url: 'https://www.hcse.org.in/contact-us',
    siteName: 'HCSE',
  }
};

export default function Contact() {
    return (
        <Layout>
            <BreadcrumbSection header='Contact Us' title="Contact us"/>
            <ContactPageSection/>
        </Layout>
    )
}