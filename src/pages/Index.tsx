import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/home/HeroSection";
import ProductSection from "@/components/home/ProductSection";
import SystemMapSection from "@/components/home/SystemMapSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import ComparisonBand from "@/components/home/ComparisonBand";
import OperatingSurface from "@/components/home/OperatingSurface";
import WritingSection from "@/components/home/WritingSection";
import TrustSection from "@/components/home/TrustSection";

const Index = () => (
  <PageLayout>
    <HeroSection />
    <ProductSection />
    <SystemMapSection />
    <ProblemSection />
    <SolutionSection />
    <ComparisonBand />
    <OperatingSurface />
    <WritingSection />
    <TrustSection />
  </PageLayout>
);

export default Index;
