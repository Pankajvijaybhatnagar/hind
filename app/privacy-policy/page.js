import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import Privacy from "@/component/terms/Privacy";
export const metadata = {
  title: 'HCSE | Privacy Policy',
  description: 'Read HCSE’s official privacy policy outlining how we collect, use, protect, and retain user data related to healthcare skilling services.',
  keywords: ['HCSE', 'privacy policy', 'data protection', 'personal information', 'healthcare training'],
  
  openGraph: {
    title: 'HCSE Privacy Policy',
    description: 'Learn about HCSE’s data collection, usage, and protection practices for online healthcare training services.',
    url: 'https://www.hcse.org.in/privacy-policy',
    siteName: 'HCSE',
  }
};
export default function PrivacyPolicy() {
    return (
        <Layout>
            <BreadcrumbSection title='Privacy Policy' header='Privacy Policy'/>
            <Privacy/>
        </Layout>
    )
}
