import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import TermsConditions from "@/component/termandcondition/Term";

export const metadata = {
  title: 'Eduor Privacy & Policy Page',
  description: 'Developed by Azizur Rahman',
}
export default function PrivacyPolicy() {
    return (
        <Layout>
            <BreadcrumbSection title='Term and condition' header='Term and condition'/>
            <TermsConditions/>
        </Layout>
    )
}