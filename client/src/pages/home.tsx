import Header from "@/components/header";
import Hero from "@/components/hero";
import ImpactStats from "@/components/impact-stats";
import About from "@/components/about";
import Programs from "@/components/programs";
import ImpactStories from "@/components/impact-stories";
import News from "@/components/news";
import CallToAction from "@/components/call-to-action";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ImpactStats />
      <About />
      <Programs />
      <ImpactStories />
      <News />
      <CallToAction />
      <Contact />
      <Footer />
    </>
  );
}
