import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/* ─────────────────────────────────────────────
   Hero Slides Data
───────────────────────────────────────────── */
const heroSlides = [
  {
    id: 1,
    image: '/programs/court-booking.png',
    title: 'Professional Court Play',
    subtitle: 'Premium night courts with high-end architectural emerald lighting.'
  },
  {
    id: 2,
    image: '/programs/adult-coaching.png',
    title: 'Elite Athletic Training',
    subtitle: 'Perfect your shots with guidance from international champions.'
  },
  {
    id: 3,
    image: '/programs/junior-academy.png',
    title: 'Junior High Performance',
    subtitle: 'Developing the next generation of competitive padel champions.'
  },
  {
    id: 4,
    image: '/programs/facility.png',
    title: 'Luxury Sports Club',
    subtitle: 'Dubai\'s elite world-class training and social destination.'
  }
];

/* ─────────────────────────────────────────────
   Glow Particles
───────────────────────────────────────────── */
function HeroGlowParticle({ style, delay = 0, duration = 8 }) {
  return (
    <motion.div
      style={style}
      className="absolute rounded-full pointer-events-none mix-blend-screen"
      initial={{ opacity: 0, scale: 0.5, y: 0 }}
      animate={{
        opacity: [0, 0.6, 0.3, 0.6, 0],
        scale: [0.5, 1.2, 0.9, 1.2, 0.5],
        y: [0, -80, -160, -80, 0],
        x: [0, 20, -20, 10, 0]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  );
}

/* ─────────────────────────────────────────────
   Hero Court Lines Grid (Subtle geometric background)
───────────────────────────────────────────── */
function CourtGridOverlay() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-[0.18]">
      <svg
        className="w-full h-full"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Outer frame */}
        <rect x="100" y="100" width="1720" height="880" stroke="#14B859" strokeWidth="2" />
        
        {/* Grid divisions */}
        <line x1="960" y1="100" x2="960" y2="980" stroke="#14B859" strokeWidth="1.5" />
        <line x1="100" y1="540" x2="1820" y2="540" stroke="#14B859" strokeWidth="1.5" strokeDasharray="8 8" />
        
        {/* Service boundaries */}
        <line x1="460" y1="100" x2="460" y2="980" stroke="#14B859" strokeWidth="1" />
        <line x1="1460" y1="100" x2="1460" y2="980" stroke="#14B859" strokeWidth="1" />
        
        {/* Center circle */}
        <circle cx="960" cy="540" r="120" stroke="#14B859" strokeWidth="1" />
        
        {/* Diagonal accents */}
        <line x1="100" y1="100" x2="1820" y2="980" stroke="#14B859" strokeWidth="0.5" strokeDasharray="4 12" />
        <line x1="1820" y1="100" x2="100" y2="980" stroke="#14B859" strokeWidth="0.5" strokeDasharray="4 12" />
      </svg>
    </div>
  );
}

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [direction] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 2500); // 2.5-second high-energy dynamic luxury sports transition rate
    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroSlides[index];

  // Motion Variants
  const slideBgVariants = {
    enter: (dir) => ({
      opacity: 0,
      scale: 1.08,
      filter: 'blur(4px)',
    }),
    center: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir) => ({
      opacity: 0,
      scale: 1.03,
      transition: { duration: 1.2, ease: [0.7, 0, 0.84, 0] }
    })
  };

  const contentContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 }
    }
  };

  const textFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Particles config
  const particles = [
    { w: 8, h: 8, top: '25%', left: '15%', delay: 0, dur: 9 },
    { w: 5, h: 5, top: '65%', left: '45%', delay: 1.5, dur: 7 },
    { w: 10, h: 10, top: '40%', left: '75%', delay: 3, dur: 10 },
    { w: 6, h: 6, top: '80%', left: '20%', delay: 0.8, dur: 8 },
    { w: 7, h: 7, top: '15%', left: '60%', delay: 2.2, dur: 6.5 },
    { w: 4, h: 4, top: '50%', left: '85%', delay: 4, dur: 7.5 }
  ];

  return (
    <section className="relative h-screen w-full bg-padel-base overflow-hidden flex items-center">
      {/* ── Background Slideshow ── */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide.id}
            custom={direction}
            variants={slideBgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentSlide.image}
              alt=""
              className="w-full h-full object-cover object-center max-sm:object-[65%_center] scale-[1.01]"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Cinematic Dark & Glow Overlays (Lighter overlays for maximum visual clarity) ── */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Subtle global dark dimming tint */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Deep luxurious black vignette — much softer on the right side */}
        <div className="absolute inset-0 bg-gradient-to-r from-padel-base/80 via-padel-base/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-padel-base/60 via-transparent to-transparent" />
        
        {/* Soft luxury emerald glow accents */}
        <div className="absolute top-1/4 left-1/4 w-[45vw] h-[45vw] bg-padel-forest/35 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-padel-emerald/15 rounded-full blur-[110px]" />
      </div>

      {/* ── Geometric Court Grid Overlay ── */}
      <CourtGridOverlay />

      {/* ── Floating Emerald Glow Particles ── */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {isLoaded && particles.map((p, i) => (
          <HeroGlowParticle
            key={i}
            delay={p.delay}
            duration={p.dur}
            style={{
              width: p.w,
              height: p.h,
              top: p.top,
              left: p.left,
              background: `radial-gradient(circle, #14B859 0%, transparent 80%)`,
              boxShadow: `0 0 ${p.w * 3}px rgba(20, 184, 89, 0.65)`,
            }}
          />
        ))}
      </div>

      {/* ── Content Area ── */}
      <div className="container relative z-20 mx-auto px-6 lg:px-16 w-full h-full flex flex-col justify-center">
        <motion.div
          variants={contentContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-start mt-28 md:mt-36"
        >
          {/* Eyebrow Label */}
          <motion.div variants={textFadeUp} className="flex items-center gap-4 mb-6">
            <span className="w-8 h-px bg-padel-emerald" />
            <span className="font-inter text-xs md:text-sm uppercase tracking-[0.4em] text-padel-emerald font-semibold">
              UAE'S LARGEST PADEL SERVICE PROVIDER
            </span>
          </motion.div>

          {/* Majestic Main Heading */}
          <motion.h1
            variants={textFadeUp}
            className="text-[10vw] md:text-[6.5vw] lg:text-[5.5vw] font-cinzel leading-[1.0] text-white uppercase tracking-tight mb-2"
          >
            Train. Compete.<br />
            <span className="text-gradient-emerald glow-text-emerald">Dominate The Court.</span>
          </motion.h1>

          {/* Thin elegant horizontal line */}
          <motion.div
            variants={textFadeUp}
            className="w-48 h-px bg-gradient-to-r from-padel-emerald/40 to-transparent mb-3"
          />

          {/* Structured SEO Rich Description */}
          <motion.p
            variants={textFadeUp}
            className="max-w-2xl text-gray-300 font-inter text-sm md:text-[16px] leading-[1.8] ml-1 mb-12"
          >
            XPARK Padel Academy delivers professional padel coaching in Dubai with premium courts, elite training programs, junior development sessions, and world-class playing experiences designed for athletes, beginners, and competitive players across the UAE.
          </motion.p>

          {/* Premium Call To Action Buttons */}
          <motion.div variants={textFadeUp} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            {/* Primary - Book A Court */}
            <Link
              to="/courts"
              className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 overflow-hidden 
                         border border-padel-emerald/40 text-white font-inter text-xs uppercase tracking-[0.25em] 
                         transition-all duration-500 hover:border-padel-emerald backdrop-blur-md bg-padel-base/30
                         hover:shadow-[0_0_36px_rgba(20, 184, 89, 0.3)] text-center"
            >
              {/* Fill effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-padel-emerald/30 to-padel-forest/50 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              <span className="relative z-10">Book a Court</span>
              <span className="relative z-10 w-5 h-5 rounded-full border border-padel-emerald/40 flex items-center justify-center group-hover:border-padel-emerald group-hover:bg-padel-emerald transition-all duration-500">
                <ArrowRight size={10} className="group-hover:text-padel-base transition-colors duration-500" />
              </span>
            </Link>

            {/* Secondary - Contact Us */}
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 overflow-hidden 
                         border border-white/10 text-white font-inter text-xs uppercase tracking-[0.25em] 
                         transition-all duration-500 hover:border-padel-emerald backdrop-blur-md bg-white/[0.02]
                         hover:shadow-[0_0_36px_rgba(20, 184, 89, 0.3)] text-center"
            >
              {/* Fill effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-padel-emerald/30 to-padel-forest/50 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              <span className="relative z-10">Contact Us</span>
              <span className="relative z-10 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover:border-padel-emerald group-hover:bg-padel-emerald transition-all duration-500">
                <ArrowRight size={10} className="group-hover:text-padel-base transition-colors duration-500" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom edge elegant divider line ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-padel-emerald/30 to-transparent z-20" />
    </section>
  );
}
