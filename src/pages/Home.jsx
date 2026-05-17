import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import HeroSlideshow from '../components/HeroSlideshow';
import IntroSection from '../components/IntroSection';
import FacilitiesSection from '../components/FacilitiesSection';
import ProgramsSlider from '../components/ProgramsSlider';
import LocationsSection from '../components/LocationsSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function Home() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative bg-padel-base">
      <PageSEO 
        title="Home" 
        description="XPARK Padel Academy. The epitome of luxury padel in Dubai. Professional coaching and elite courts."
      />
      
      {/* Global Noise Texture */}
      <div className="bg-noise"></div>

      {/* Luxury Fullscreen Hero Slideshow Section */}
      <HeroSlideshow />

      {/* Introduction Section */}
      <IntroSection />

      {/* Facilities Section */}
      <FacilitiesSection />

      {/* Programs & Experiences Slider */}
      <ProgramsSlider />

      {/* XPARK Locations Network */}
      <LocationsSection />

      {/* Testimonials & Player Experiences */}
      <TestimonialsSection />



      {/* Grand CTA */}
      <section className="py-40 relative flex items-center justify-center overflow-hidden bg-padel-base">
        <div className="absolute inset-0 bg-gradient-to-t from-padel-forest/10 via-padel-base to-padel-base z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-white/5 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-full bg-white/5 z-0"></div>
        
        <div className="container relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-cinzel text-white uppercase tracking-tight mb-12">
              Reserve Your <br/>
              <span className="text-padel-emerald italic">Experience</span>
            </h2>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center relative px-12 py-5 bg-transparent border border-white/20 text-white font-inter text-sm uppercase tracking-[0.3em] overflow-hidden group hover:border-padel-emerald transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-padel-emerald translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0"></div>
              <span className="relative z-10 group-hover:text-padel-base font-semibold transition-colors duration-500">Book A Court</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
