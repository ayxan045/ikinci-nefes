import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Psychologists from '../components/Psychologists';
import Tests from '../components/Tests';
import Blog from '../components/Blog';
import Booking from '../components/Booking';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Psychologists />
        <Tests />
        <Blog />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
