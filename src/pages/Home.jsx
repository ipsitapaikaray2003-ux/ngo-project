import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Mission from "../components/Mission";
import Programs from "../components/Programs";
import Impact from "../components/Impact";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Donation from "../components/Donation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Button from "../components/WhatsAppButton";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Programs />
      <Impact />
      <Gallery />
      <Testimonials />
      <Donation />
      <Contact />
      <Footer />
      <Button />
    </>
  );
}

export default Home;