import GrainFilter from "./_components/grainFilter";
import Footer from "./_components/footer";
import Content from "./_components/content";
import NewNavbar from "./_components/NewNavbar";
import LandingPage from "./_components/LandingPage";
import About from "./_components/about";
import Contact from "./_components/contact";

export default function Home() {
  return (
    <main className="h-full relative">
      <GrainFilter />
      <NewNavbar />
      <LandingPage />
      <About />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
