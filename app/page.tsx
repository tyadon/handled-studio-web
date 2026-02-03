import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { Testimonial } from "@/components/Testimonial";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Introduction />
      <section id="services">
        <Services />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <Testimonial />
      <CallToAction />
      <Footer />
    </main>
  );
}
