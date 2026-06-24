import { HeroSection } from "./components/HeroSection";
import { PartnershipSection } from "./components/PartnershipSection";
import { GalleryAccessSection } from "./components/GalleryAccessSection";
import { CompetitionProgressSection } from "./components/CompetitionProgressSection";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <PartnershipSection />
      <GalleryAccessSection />
      <CompetitionProgressSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}