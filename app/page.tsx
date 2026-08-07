import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import IssueGrid from "@/components/IssueGrid";
import SpecStrip from "@/components/SpecStrip";
import ImageBand from "@/components/ImageBand";
import EmailPreview from "@/components/EmailPreview";
import Testimonials from "@/components/Testimonials";
import FaqCta from "@/components/FaqCta";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <IssueGrid />
        <SpecStrip />
        <ImageBand />
        <EmailPreview />
        <Testimonials />
        <FaqCta />
      </main>
      <SiteFooter />
    </>
  );
}
