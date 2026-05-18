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
      <section className="py-40 relative flex items-center justify-center overflow-hidden bg-padel-base border-t border-white/[0.05]">
        {/* Cinematic Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-padel-emerald/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-padel-base via-transparent to-padel-base z-10"></div>
          
          {/* Abstract Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="container relative z-20 px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Minimal Luxury Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-padel-emerald" />
              <span className="font-inter text-xs uppercase tracking-[0.4em] text-padel-emerald font-semibold">
                Elite Court Access
              </span>
              <span className="w-8 h-px bg-padel-emerald" />
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-cinzel text-white uppercase tracking-tight leading-[1.1] mb-12">
              Book Dubai's Best <br/>
              <span className="text-gradient-emerald glow-text-emerald italic font-light">Padel Courts</span>
            </h2>
            
            <p className="font-inter text-gray-400 text-sm md:text-base max-w-xl mb-12 leading-relaxed">
              Experience professional padel coaching and premium court booking at XPARK Padel Academy. Join the leading luxury padel destination in Dubai today.
            </p>

            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center px-12 py-5 bg-padel-emerald text-padel-base font-inter text-xs uppercase tracking-[0.3em] font-semibold rounded-full overflow-hidden shadow-[0_0_30px_rgba(20,184,89,0.2)] hover:shadow-[0_0_40px_#14B859] hover:bg-white hover:text-padel-base transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book A Court
                <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              
              {/* Inner glow sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-in-out"></div>
            </Link>
          </motion.div>
        </div>

        {/* Decorative corner lines in background to make it different */}
        <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-white/10 pointer-events-none hidden md:block"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-white/10 pointer-events-none hidden md:block"></div>
      </section>
    </div>
  );
}
