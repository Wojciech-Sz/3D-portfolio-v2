import Contact from "./_sections/Contact";
import Experience from "./_sections/Experience";
import Features from "./_sections/Features";
import Hero from "./_sections/Hero";
// import Logo from "./_sections/Logo";
import Showcase from "./_sections/Showcase";
import TechStack from "./_sections/TechStack";
import Testimonials from "./_sections/Testimonials";

export default function HomePage() {
  return (
    <main className="min-h-dvh">
      <Hero />
      <Showcase />
      {/* <Logo /> */}
      <Features />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
    </main>
  );
}
