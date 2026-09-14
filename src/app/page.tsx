import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import MembershipTable from "@/components/MembershipTable";
import InclubModel from "@/components/InclubModel";
import TeamSupport from "@/components/TeamSupport";
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
        <Testimonials />
        <MembershipTable />
        <InclubModel />
        <TeamSupport />
        <LeadForm />
      </main>

      <Footer />
      <WhatsAppFloating />
    </>
  );
}
