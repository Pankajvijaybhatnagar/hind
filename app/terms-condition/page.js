import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import TermSection from "@/component/termandcondition/Term";
export const metadata = {
   title: 'HCSE | Terms & Conditions',
  description: 'Read the official HCSE terms and conditions governing use of our healthcare training courses and certification services.',
  keywords: ['HCSE', 'terms and conditions', 'terms of use', 'legal', 'HCSE services'],
}
export default function TermsCondition() {
    return (
        <Layout>
            <BreadcrumbSection title='Terms And Conditions' header='Terms And Conditions'/>
            <TermSection/>
        </Layout>
    )
}
