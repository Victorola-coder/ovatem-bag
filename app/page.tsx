import { Animation, SiteFooter, SiteHeader } from "@/app/components/global";
import { Collections, Contact, Craft, Hero, Testimonials } from "@/app/components/home";

export default function HomePage() {
  return (
    <Animation>
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <Hero />
        <Collections />
        <div id="craft">
          <Craft />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <Contact />
        <SiteFooter />
      </div>
    </Animation>
  );
}
