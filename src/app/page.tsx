import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Portfolio from "@/components/Portfolio";
import InvestmentCalculator from "@/components/InvestmentCalculator";
import MembershipTable from "@/components/MembershipTable";
import ComparisonTable from "@/components/ComparisonTable";
import InclubModel from "@/components/InclubModel";
import Testimonials from "@/components/Testimonials";
import TeamSupport from "@/components/TeamSupport";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen">
        <Hero />
        <ProblemSolution />
        <Portfolio />
        <InvestmentCalculator />
        <MembershipTable />
        <ComparisonTable />
        <InclubModel />
        <Testimonials />
        <TeamSupport />
        <FAQSection />
        <LeadForm />
      </main>

      <Footer />
      <WhatsAppFloating />
    </>
  );
}
