import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─────────────────────────────────────────────
   Premium SVG line icons (hand-crafted, 24×24)
───────────────────────────────────────────── */
const icons = {
  Refreshments: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M8 2v4M12 2v4M16 2v4" />
      <path d="M5 6h14l-1.5 9A2 2 0 0 1 15.5 17h-7a2 2 0 0 1-2-1.84L5 6Z" />
      <path d="M19 6c0 2.5-2 3-2 5" />
      <path d="M3 22h18" />
      <path d="M8 17v5M16 17v5" />
    </svg>
  ),
  Parking: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  ),
  'First Aid': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  ),
  Rental: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <ellipse cx="12" cy="11" rx="4" ry="7" />
      <path d="M5 21c0-4 3.1-7 7-7s7 3 7 7" />
      <path d="M8 7.5C6.8 6.4 6 4.8 6 3" />
      <path d="M16 7.5c1.2-1.1 2-2.7 2-4.5" />
    </svg>
  ),
  Washrooms: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <path d="M10 5h8a1 1 0 0 1 1 1v3" />
      <path d="M8 21v-2" />
      <path d="M16 21v-2" />
      <path d="M12 3c0 1.1.9 2 2 2" />
    </svg>
  ),
  'Covid Safety': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  'Clean Courts': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 12h18" />
      <path d="M3 6h18" />
      <path d="M9 18h6" />
      <path d="M5 3 3 6" />
      <path d="M19 3l2 3" />
      <path d="M12 6v12" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
};

const facilities = [
  {
    name: 'Refreshments',
    desc: 'Cold drinks & energy snacks available courtside.',
    color: 'from-emerald-500/10 to-transparent',
  },
  {
    name: 'Parking',
    desc: 'Free dedicated parking for all academy members.',
    color: 'from-emerald-500/8 to-transparent',
  },
  {
    name: 'First Aid',
    desc: 'On-site trained staff and first aid kits always ready.',
    color: 'from-emerald-500/10 to-transparent',
  },
  {
    name: 'Rental',
    desc: 'Premium padel rackets and gear available for hire.',
    color: 'from-emerald-500/8 to-transparent',
  },
  {
    name: 'Washrooms',
    desc: 'Luxury changing rooms and showers — always pristine.',
    color: 'from-emerald-500/10 to-transparent',
  },
  {
    name: 'Covid Safety',
    desc: 'Sanitisation protocols and air-purified court zones.',
    color: 'from-emerald-500/8 to-transparent',
  },
  {
    name: 'Clean Courts',
    desc: 'Courts cleaned and inspected before every session.',
    color: 'from-emerald-500/10 to-transparent',
  },
];

/* ─────────────────────────────────────────────
   Court-line background pattern (inline SVG)
───────────────────────────────────────────── */
function CourtPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <svg
        className="absolute w-full h-full opacity-[0.24]"
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Outer perimeter */}
        <rect x="80" y="60" width="1040" height="480" stroke="#14B859" strokeWidth="1.5" />
        {/* Centre line */}
        <line x1="600" y1="60" x2="600" y2="540" stroke="#14B859" strokeWidth="1" />
        {/* Net */}
        <line x1="80" y1="300" x2="1120" y2="300" stroke="#b5c7bc" strokeWidth="2" strokeDasharray="6 4" />
        {/* Service boxes */}
        <line x1="320" y1="60" x2="320" y2="540" stroke="#14B859" strokeWidth="0.8" />
        <line x1="880" y1="60" x2="880" y2="540" stroke="#14B859" strokeWidth="0.8" />
        {/* Horizontal thirds */}
        <line x1="80" y1="200" x2="1120" y2="200" stroke="#14B859" strokeWidth="0.5" strokeDasharray="3 9" />
        <line x1="80" y1="400" x2="1120" y2="400" stroke="#14B859" strokeWidth="0.5" strokeDasharray="3 9" />
        {/* Corner L-marks */}
        <path d="M80 60 h20 M80 60 v20" stroke="#b5c7bc" strokeWidth="2" />
        <path d="M1120 60 h-20 M1120 60 v20" stroke="#b5c7bc" strokeWidth="2" />
        <path d="M80 540 h20 M80 540 v-20" stroke="#b5c7bc" strokeWidth="2" />
        <path d="M1120 540 h-20 M1120 540 v-20" stroke="#b5c7bc" strokeWidth="2" />
        {/* Center circle */}
        <circle cx="600" cy="300" r="40" stroke="#14B859" strokeWidth="0.8" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Single facility card
───────────────────────────────────────────── */
function FacilityCard({ facility, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 48, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.75,
        delay: (index % 4) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
      className="group relative flex flex-col gap-5 p-6 rounded-2xl border border-white/[0.06]
                 bg-padel-charcoal/40 backdrop-blur-xl overflow-hidden cursor-default
                 transition-colors duration-500 hover:border-padel-emerald/30
                 hover:shadow-[0_0_40px_rgba(20,184,89,0.08)]"
    >
      {/* Card internal gradient bg */}
      <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-100 transition-opacity duration-600 z-0`} />

      {/* Top-left corner accent */}
      <div className="absolute top-0 left-0 w-8 h-8 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-padel-emerald/30 group-hover:bg-padel-emerald/60 transition-colors duration-500" />
        <div className="absolute top-0 left-0 w-px h-full bg-padel-emerald/30 group-hover:bg-padel-emerald/60 transition-colors duration-500" />
      </div>
      {/* Bottom-right corner accent */}
      <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none z-0">
        <div className="absolute bottom-0 right-0 w-full h-px bg-white/10 group-hover:bg-padel-emerald/40 transition-colors duration-500" />
        <div className="absolute bottom-0 right-0 w-px h-full bg-white/10 group-hover:bg-padel-emerald/40 transition-colors duration-500" />
      </div>

      {/* Icon container */}
      <div className="relative z-10 w-11 h-11 rounded-xl bg-padel-forest/60 border border-padel-emerald/20
                      flex items-center justify-center p-2.5 text-padel-emerald
                      group-hover:border-padel-emerald/50 group-hover:shadow-[0_0_20px_rgba(20,184,89,0.25)]
                      transition-all duration-500">
        {icons[facility.name]}
      </div>

      {/* Text */}
      <div className="relative z-10 flex flex-col gap-1.5">
        <h3 className="font-cinzel text-sm uppercase tracking-[0.15em] text-white group-hover:text-padel-emerald transition-colors duration-400">
          {facility.name}
        </h3>
        <p className="font-inter text-[13px] leading-relaxed text-gray-500 group-hover:text-gray-400 transition-colors duration-400">
          {facility.desc}
        </p>
      </div>

      {/* Bottom emerald line — slides in on hover */}
      <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-padel-emerald via-padel-emerald/50 to-transparent transition-all duration-700 ease-[0.16,1,0.3,1] z-10" />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main FacilitiesSection
───────────────────────────────────────────── */
export default function FacilitiesSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section
      className="relative overflow-hidden bg-padel-surface py-6 lg:py-8"
      aria-label="XPARK Padel Academy Facilities"
    >
      {/* Court-line background */}
      <CourtPattern />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] bg-padel-emerald/28 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[35vw] h-[35vw] bg-padel-emerald/18 rounded-full blur-[100px]" />
      </div>

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-padel-emerald/25 to-transparent" />

      <div className="container relative z-10 mx-auto px-6 lg:px-16">

        {/* ── Header ── */}
        <div ref={headerRef} className="mb-8 lg:mb-10 max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-px bg-padel-emerald" />
            <span className="font-inter text-[11px] uppercase tracking-[0.35em] text-padel-emerald">
              Premium Amenities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-cinzel text-3xl md:text-4xl xl:text-5xl text-white leading-[1.15] tracking-tight mb-5"
          >
            All Our Facilities{' '}
            <span className="text-gradient-emerald glow-text-emerald">Included</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-inter text-base text-gray-400 leading-relaxed max-w-lg"
          >
            Everything you need for a comfortable, safe, and premium padel experience in Dubai.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 h-px bg-gradient-to-r from-padel-emerald/30 via-padel-metallic/15 to-transparent"
          />
        </div>

        {/* ── Cards grid ── */}
        {/*  7 cards: 4 on first row desktop (4-col), 3 on second (centred).
            Mobile: 1 col → Tablet: 2 col → Desktop: 4 col             */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {facilities.slice(0, 4).map((facility, i) => (
            <FacilityCard key={facility.name} facility={facility} index={i} />
          ))}
        </div>

        {/* Second row — 3 cards centred on desktop */}
        <div className="mt-4 lg:mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 lg:mx-auto lg:max-w-[75%]">
          {facilities.slice(4).map((facility, i) => (
            <FacilityCard key={facility.name} facility={facility} index={i + 4} />
          ))}
        </div>

        {/* ── Bottom badge row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {['World-class Standards', 'Dubai, UAE', 'Open 7 Days'].map((tag) => (
            <span
              key={tag}
              className="font-inter text-[11px] uppercase tracking-[0.25em] text-padel-metallic border border-white/8 px-4 py-2 rounded-full backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-padel-emerald/20 to-transparent" />
    </section>
  );
}
