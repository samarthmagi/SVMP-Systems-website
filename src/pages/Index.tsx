import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/home/HeroSection";
import ProductSection from "@/components/home/ProductSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import WritingSection from "@/components/home/WritingSection";
import TrustSection from "@/components/home/TrustSection";

const Index = () => (
  <PageLayout>
    <HeroSection />
    <ProductSection />
    <ProblemSection />
    <SolutionSection />
    <WritingSection />
    <TrustSection />
  </PageLayout>
);

export default Index;
