import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="space-y-10 lg:space-y-16">
      <Navbar/>
      <About/>
      <Services/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}
