import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMe from './components/ContactMe';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className=" mt-24 mx-auto px-12 py-4 ">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactMe />
      </div>
    </main>
  );
}
