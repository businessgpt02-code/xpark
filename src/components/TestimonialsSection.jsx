import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─────────────────────────────────────────────
   Testimonial data — 10 SEO-rich reviews
───────────────────────────────────────────── */
const testimonials = [
  {
    name: 'Ahmed Al-Rashidi',
    category: 'Competitive Player',
    stars: 5,
    quote:
      'XPARK is without doubt the best padel academy in Dubai. The court quality, professional trainers, and elite atmosphere push you to perform at your very best every single session.',
  },
  {
    name: 'Sarah Mitchell',
    category: 'Beginner',
    stars: 5,
    quote:
      'I had zero padel experience before joining XPARK. The professional padel coaching in Dubai they offer is world-class — patient, structured, and genuinely transformative for absolute beginners.',
  },
  {
    name: 'James Crawford',
    category: 'Corporate Member',
    stars: 5,
    quote:
      'We host our corporate padel events exclusively at XPARK. Premium padel courts Dubai-wide simply don\'t compare — the facilities, service, and ambiance are unmatched for professional settings.',
  },
  {
    name: 'Fatima Al-Mansoori',
    category: 'Parent',
    stars: 5,
    quote:
      'The junior padel training in Dubai at XPARK has been incredible for my daughter. She\'s grown in confidence, discipline, and skill — the coaching team genuinely cares about each child\'s development.',
  },
  {
    name: 'Carlos Rodriguez',
    category: 'Competitive Player',
    stars: 5,
    quote:
      'I\'ve trained at clubs across Europe and the Middle East. XPARK Padel Academy delivers a truly elite padel experience that rivals the finest training centers in the world. Exceptional.',
  },
  {
    name: 'Emma Thompson',
    category: 'Beginner',
    stars: 5,
    quote:
      'Looking for padel lessons UAE-wide, XPARK stood out immediately. The onboarding process for beginners is thoughtful, the drills are well-structured, and the coaches are genuinely brilliant.',
  },
  {
    name: 'Mohammed Al-Farsi',
    category: 'Competitive Player',
    stars: 5,
    quote:
      'The tactical coaching and match-play analysis at XPARK took my competitive game to a completely new level. If you\'re serious about padel in Dubai, this is the only choice that matters.',
  },
  {
    name: 'Lisa Park',
    category: 'Corporate Member',
    stars: 5,
    quote:
      'Our team building event at XPARK was a premium experience from start to finish. The courts are immaculate, the staff are professional, and the whole environment feels truly five-star.',
  },
  {
    name: 'Tariq Hassan',
    category: 'Parent',
    stars: 5,
    quote:
      'My son enrolled in the Junior Academy and his progress has been outstanding. The age-based programmes and dedicated junior coaching staff make XPARK the finest junior padel training in Dubai.',
  },
  {
    name: 'David Chen',
    category: 'Competitive Player',
    stars: 5,
    quote:
      'The combination of advanced training programmes, premium court surfaces, and professional padel coaching at XPARK is simply unrivalled in the UAE. An elite padel experience every visit.',
  },
];

/* ─────────────────────────────────────────────
   Stats data
───────────────────────────────────────────── */
const stats = [
  { value: '500+', label: 'Active Players', sub: 'Dubai & UAE' },
  { value: '1,000+', label: 'Coaching Sessions', sub: 'Delivered' },
  { value: '5-Star', label: 'Player Experience', sub: 'Rated' },
  { value: '100%', label: 'Professional Training', sub: 'Standards' },
];

/* ─────────────────────────────────────────────
   Quote icon SVG
───────────────────────────────────────────── */
function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-7 h-5"
      aria-hidden="true"
    >
      <path
        d="M0 24V14.4C0 10.4 1.06667 7.06667 3.2 4.4C5.33333 1.6 8.4 0 12.4 0L13.6 2.4C11.0667 3.2 9.2 4.66667 8 6.8C6.93333 8.8 6.53333 11.0667 6.8 13.6H12.8V24H0ZM18.4 24V14.4C18.4 10.4 19.4667 7.06667 21.6 4.4C23.7333 1.6 26.8 0 30.8 0L32 2.4C29.4667 3.2 27.6 4.66667 26.4 6.8C25.3333 8.8 24.9333 11.0667 25.2 13.6H31.2V24H18.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Star rating
───────────────────────────────────────────── */
function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 12 12"
          fill={i < count ? '#14B859' : 'none'}
          stroke={i < count ? '#14B859' : 'rgba(255,255,255,0.15)'}
          strokeWidth="0.8"
          className="w-3 h-3"
          aria-hidden="true"
        >
          <path d="M6 1l1.18 2.39 2.64.38-1.91 1.86.45 2.63L6 7.01 3.64 8.26l.45-2.63L2.18 3.77l2.64-.38L6 1z" />
        </svg>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Category badge colours
───────────────────────────────────────────── */
const categoryColor = {
  'Competitive Player': 'text-padel-emerald border-padel-emerald/25',
  'Beginner': 'text-padel-metallic border-padel-metallic/25',
  'Parent': 'text-blue-400/80 border-blue-400/20',
  'Corporate Member': 'text-padel-gold border-padel-gold/25',
};

/* ─────────────────────────────────────────────
   Single testimonial card
───────────────────────────────────────────── */
function TestimonialCard({ t }) {
  return (
    <article
      className="group flex-shrink-0 w-[340px] md:w-[380px] mx-3 relative flex flex-col gap-5 p-7 rounded-2xl
                 border border-white/[0.06] bg-padel-charcoal/50 backdrop-blur-xl overflow-hidden
                 cursor-default transition-all duration-500
                 hover:border-padel-emerald/30 hover:shadow-[0_0_40px_rgba(20,184,89,0.08)]"
    >
      {/* Card inner top-left accent */}
      <div className="absolute top-0 left-0 w-10 h-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-padel-emerald/25 group-hover:bg-padel-emerald/50 transition-colors duration-500" />
        <div className="absolute top-0 left-0 w-px h-full bg-padel-emerald/25 group-hover:bg-padel-emerald/50 transition-colors duration-500" />
      </div>
      {/* Bottom-right accent */}
      <div className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-full h-px bg-white/8 group-hover:bg-padel-emerald/30 transition-colors duration-500" />
        <div className="absolute bottom-0 right-0 w-px h-full bg-white/8 group-hover:bg-padel-emerald/30 transition-colors duration-500" />
      </div>

      {/* Glow shimmer on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-padel-emerald/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600 z-0 rounded-2xl" />

      {/* Quote + stars row */}
      <div className="relative z-10 flex items-start justify-between">
        <span className="text-padel-emerald/30 group-hover:text-padel-emerald/50 transition-colors duration-500">
          <QuoteIcon />
        </span>
        <Stars count={t.stars} />
      </div>

      {/* Quote text */}
      <blockquote className="relative z-10 font-inter text-[14px] leading-[1.8] text-gray-400 group-hover:text-gray-300 transition-colors duration-500 flex-grow">
        "{t.quote}"
      </blockquote>

      {/* Bottom — name + category */}
      <div className="relative z-10 flex items-end justify-between pt-3 border-t border-white/[0.05]">
        <div>
          <p className="font-cinzel text-sm text-white tracking-wide">{t.name}</p>
          <span
            className={`inline-block mt-1.5 font-inter text-[10px] uppercase tracking-[0.2em] border px-2.5 py-1 rounded-full ${
              categoryColor[t.category] ?? 'text-gray-500 border-white/10'
            }`}
          >
            {t.category}
          </span>
        </div>
        {/* Verified tick */}
        <div className="w-7 h-7 rounded-full border border-padel-emerald/20 flex items-center justify-center group-hover:border-padel-emerald/50 transition-colors duration-500">
          <svg viewBox="0 0 12 12" className="w-3.5 h-3.5 text-padel-emerald" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 6l3 3 5-5" />
          </svg>
        </div>
      </div>

      {/* Slide-in bottom line */}
      <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-padel-emerald via-padel-emerald/40 to-transparent transition-all duration-700 ease-[0.16,1,0.3,1] z-10" />
    </article>
  );
}

/* ─────────────────────────────────────────────
   Infinite marquee track
───────────────────────────────────────────── */
function MarqueeTrack({ items, speed = 55, reverse = false }) {
  // Triplicate for seamless loop
  const looped = [...items, ...items, ...items];
  return (
    <div
      className="overflow-hidden relative"
      style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
    >
      <div
        className={`flex will-change-transform ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {looped.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Stat card
───────────────────────────────────────────── */
function StatCard({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col items-center text-center p-6 rounded-2xl border border-white/[0.06]
                 bg-padel-charcoal/40 backdrop-blur-xl transition-all duration-500
                 hover:border-padel-emerald/30 hover:shadow-[0_0_32px_rgba(20,184,89,0.08)]"
    >
      <span className="font-cinzel text-3xl md:text-4xl text-padel-emerald glow-text-emerald mb-1">
        {stat.value}
      </span>
      <span className="font-cinzel text-sm md:text-base text-white uppercase tracking-wide mb-1">
        {stat.label}
      </span>
      <span className="font-inter text-[11px] uppercase tracking-[0.2em] text-gray-600">
        {stat.sub}
      </span>
      <div className="mt-4 w-8 h-px bg-gradient-to-r from-transparent via-padel-emerald/40 to-transparent" />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main TestimonialsSection
───────────────────────────────────────────── */
export default function TestimonialsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-80px' });

  // JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "XPARK Padel Academy",
    "review": testimonials.map(t => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "reviewBody": t.quote,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.stars.toString(),
        "bestRating": "5"
      }
    }))
  };

  return (
    <section
      className="relative overflow-hidden bg-padel-surface py-6 lg:py-8"
      aria-label="XPARK Padel Academy Player Testimonials"
    >
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Ambient glows ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-24 left-1/3 w-[50vw] h-[40vw] bg-padel-emerald/18 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[35vw] bg-padel-emerald/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] bg-padel-emerald/15 rounded-full blur-[90px]" />
      </div>

      {/* ── Court texture ── */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.20] pointer-events-none"
        viewBox="0 0 1400 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <rect x="100" y="60" width="1200" height="580" stroke="#14B859" strokeWidth="1.5" />
        <line x1="700" y1="60" x2="700" y2="640" stroke="#14B859" strokeWidth="1" />
        <line x1="100" y1="350" x2="1300" y2="350" stroke="#b5c7bc" strokeWidth="1.5" strokeDasharray="6 5" />
        <circle cx="700" cy="350" r="55" stroke="#14B859" strokeWidth="0.8" />
        <path d="M100 60 h28 M100 60 v28" stroke="#b5c7bc" strokeWidth="2" />
        <path d="M1300 60 h-28 M1300 60 v28" stroke="#b5c7bc" strokeWidth="2" />
        <path d="M100 640 h28 M100 640 v-28" stroke="#b5c7bc" strokeWidth="2" />
        <path d="M1300 640 h-28 M1300 640 v-28" stroke="#b5c7bc" strokeWidth="2" />
      </svg>

      {/* ── Top divider ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-padel-emerald/25 to-transparent" />

      {/* ── Header ── */}
      <div ref={headerRef} className="container relative z-10 mx-auto px-6 lg:px-16 mb-8 lg:mb-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-px bg-padel-emerald" />
            <span className="font-inter text-[11px] uppercase tracking-[0.35em] text-padel-emerald">
              Player Testimonials
            </span>
          </motion.div>

          {/* h2 Heading — SEO optimized */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-cinzel text-3xl md:text-4xl xl:text-5xl text-white leading-[1.15] tracking-tight mb-5"
          >
            What Players Say About{' '}
            <span className="text-gradient-emerald glow-text-emerald">XPARK Padel Academy</span>
          </motion.h2>

          {/* Subtitle — SEO structured */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-inter text-base text-gray-400 leading-relaxed"
          >
            Discover why players across Dubai choose XPARK Padel Academy for professional padel coaching,
            premium courts, competitive training programs, and elite playing experiences designed for all
            skill levels.
          </motion.p>

          {/* Decorative expand line */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 h-px bg-gradient-to-r from-padel-emerald/30 via-padel-metallic/15 to-transparent"
          />
        </div>
      </div>

      {/* ── Stats grid ── */}
      <div className="container relative z-10 mx-auto px-6 lg:px-16 mb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>

      {/* ── Marquee section (full bleed) ── */}
      <div className="relative z-10 flex flex-col gap-5">
        {/* Row 1 — left to right direction (default: moves left) */}
        <MarqueeTrack items={testimonials} speed={60} reverse={false} />
        {/* Row 2 — reversed for depth effect */}
        <MarqueeTrack items={[...testimonials].reverse()} speed={75} reverse={true} />
      </div>

      {/* ── Trust badges ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="container relative z-10 mx-auto px-6 lg:px-16 mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        {[
          '⭐ Rated #1 Padel Academy Dubai',
          '🎾 500+ Happy Players',
          '🇦🇪 Proudly Based in Dubai, UAE',
          '✓ Certified Professional Coaches',
        ].map((badge) => (
          <span
            key={badge}
            className="font-inter text-[11px] text-padel-metallic/70 border border-white/[0.07] rounded-full px-4 py-2 backdrop-blur-sm"
          >
            {badge}
          </span>
        ))}
      </motion.div>

      {/* ── Bottom divider ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-padel-emerald/20 to-transparent" />
    </section>
  );
}
