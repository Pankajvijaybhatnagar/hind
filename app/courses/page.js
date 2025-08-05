import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import AllCourseSection from "@/component/course/AllCourseSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
  title: 'HCSE | Courses',
  description: 'Browse a wide selection of online skilling courses in healthcare, including Trauma Assistance, Yoga Therapy, Telehealth Coordination, and more.',
  keywords: ['HCSE', 'healthcare skilling', 'online healthcare courses', 'telehealth', 'yoga therapy', 'trauma assistant'],
  authors: [{ name: 'Healthcare Sector Skill Council (HSSC)' }],
  openGraph: {
    title: 'HCSE Courses',
    description: 'Explore Healthcare Sector Skill Council’s range of healthcare training programs—online, industry-aligned, NCVET-recognized.',
    url: 'https://www.hcse.org.in/courses',
    siteName: 'HCSE',
  }
};

export default function Courses() {
    return (
        <Layout>
            <BreadcrumbSection header='All Course' title='All Course'/>
            <AllCourseSection/>
        </Layout>
    )
}