import { useReveal } from "@/hooks/use-reveal";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Symptoms } from "@/components/site/Symptoms";
import { Specialties } from "@/components/site/Specialties";
import { About } from "@/components/site/About";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { ChatWidget } from "@/components/site/ChatWidget";

const Index = () => {
  useReveal();

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Symptoms />
      <Specialties />
      <About />
      <Faq />
      <Footer />
      <ChatWidget />
    </main>
  );
};

export default Index;
