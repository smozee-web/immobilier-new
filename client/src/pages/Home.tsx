import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AdminSupport from "@/components/sections/AdminSupport";
import FlexiblePayment from "@/components/sections/FlexiblePayment";
import SafeInvestment from "@/components/sections/SafeInvestment";
import LegalSecurity from "@/components/sections/LegalSecurity";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <AdminSupport />
        <FlexiblePayment />
        <SafeInvestment />
        <LegalSecurity />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
