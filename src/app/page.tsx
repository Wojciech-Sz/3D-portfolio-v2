import Experience from "./_sections/Experience";
import Features from "./_sections/Features";
import Hero from "./_sections/Hero";
// import Logo from "./_sections/Logo";
import Showcase from "./_sections/Showcase";

export default function HomePage() {
  return (
    <main className="min-h-dvh">
      <Hero />
      <Showcase />
      {/* <Logo /> */}
      <Features />
      <Experience />
    </main>
  );
}
