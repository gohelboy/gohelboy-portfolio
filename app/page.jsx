import GrainFilter from "./_components/grainFilter";
import Footer from "./_components/footer";
import NewNavbar from "./_components/NewNavbar";
import LandingPage from "./_components/LandingPage";
import About from "./_components/about";
import Contact from "./_components/contact";
import Worked from "./_components/worked";
import Skills from "./_components/Skills.jsx";

export default function Home() {
  return (
    <main className="h-full relative">
      <GrainFilter />
      <NewNavbar />
      <LandingPage />
      <About />
      <Worked />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
