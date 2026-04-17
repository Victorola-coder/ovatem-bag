import {
  Collections,
  Contact,
  Craft,
  Founder,
  Hero,
  MissionVision,
  SouvenirsEvents,
  StatsStrip,
  Testimonials,
  TrainedBy,
} from "@/app/components/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionVision />
      <StatsStrip />
      <Founder />
      <SouvenirsEvents />
      <Collections />
      <div id="craft">
        <Craft />
      </div>
      <TrainedBy />
      <div id="testimonials">
        <Testimonials />
      </div>
      <Contact />
    </>
  );
}
