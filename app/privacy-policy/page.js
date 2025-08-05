import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import Privacy from "@/component/terms/Privacy";
export const metadata = {
  title: 'Eduor Privacy & Policy Page',
  description: 'Developed by Azizur Rahman',
}
export default function PrivacyPolicy() {
    return (
        <Layout>
            <BreadcrumbSection title='Privacy Policy' header='Privacy Policy'/>
            <Privacy/>
        </Layout>
    )
}
