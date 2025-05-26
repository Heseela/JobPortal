import HomeBanner from "@/components/PageComponents/HomeSection/HomeBanner";
import HowItWorks from "@/components/PageComponents/HomeSection/HowItWorks";
import JobCategory from "@/components/PageComponents/HomeSection/JobCategory";
import Testimonials from "@/components/PageComponents/HomeSection/Testimonials";
import TrustedCompanies from "@/components/PageComponents/HomeSection/TrustedCompanies";

export default function Home() {
  return (
   <div>
    <HomeBanner/>
    <TrustedCompanies/>
    <JobCategory/>
    <HowItWorks/>
    <Testimonials/>
    </div>
  );
}
