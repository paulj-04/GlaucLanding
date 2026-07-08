import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import PlatformPreview from "@/components/PlatformPreview";
import FounderStory from "@/components/FounderStory";
import Team from "@/components/Team";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="page-shell">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <PlatformPreview />
      <FounderStory />
      <Team />
      <WaitlistForm />
      <Footer />
    </main>
  );
}