import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

/* ─────────────────────────────────────────────
   Floating glow particle
───────────────────────────────────────────── */
function GlowParticle({ style, delay = 0, duration = 6 }) {
  return (
    <motion.div
      style={style}
      className="absolute rounded-full pointer-events-none"
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{
        opacity: [0, 0.7, 0.3, 0.8, 0],
        scale: [0.4, 1.2, 0.8, 1.1, 0.4],
        y: [0, -30, -60, -30, 0],
        x: [0, 10, -10, 5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

/* ─────────────────────────────────────────────
   Court-lines geometric SVG overlay
───────────────────────────────────────────── */
function CourtOverlay() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
      viewBox="0 0 600 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Outer court rectangle */}
      <rect x="60" y="80" width="480" height="540" stroke="#14B859" strokeWidth="1.5" />
      {/* Centre line */}
      <line x1="60" y1="350" x2="540" y2="350" stroke="#14B859" strokeWidth="1" />
      {/* Service boxes */}
      <line x1="300" y1="80" x2="300" y2="620" stroke="#14B859" strokeWidth="1" />
      {/* Net */}
      <line x1="60" y1="350" x2="540" y2="350" stroke="#b5c7bc" strokeWidth="2" />
      {/* Diagonal accent lines */}
      <line x1="60" y1="80" x2="300" y2="350" stroke="#14B859" strokeWidth="0.5" strokeDasharray="4 8" />
      <line x1="540" y1="80" x2="300" y2="350" stroke="#14B859" strokeWidth="0.5" strokeDasharray="4 8" />
      <line x1="60" y1="620" x2="300" y2="350" stroke="#14B859" strokeWidth="0.5" strokeDasharray="4 8" />
      <line x1="540" y1="620" x2="300" y2="350" stroke="#14B859" strokeWidth="0.5" strokeDasharray="4 8" />
      {/* Corner accent marks */}
      <rect x="55" y="75" width="10" height="10" stroke="#b5c7bc" strokeWidth="1.5" fill="none" />
      <rect x="535" y="75" width="10" height="10" stroke="#b5c7bc" strokeWidth="1.5" fill="none" />
      <rect x="55" y="615" width="10" height="10" stroke="#b5c7bc" strokeWidth="1.5" fill="none" />
      <rect x="535" y="615" width="10" height="10" stroke="#b5c7bc" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Action silhouette (abstract paddle player)
───────────────────────────────────────────── */
function PlayerSilhouette({ className }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Head */}
      <circle cx="60" cy="22" r="14" fill="white" />
      {/* Body */}
      <path d="M45 38 Q60 48 75 38 L82 90 Q60 100 38 90 Z" fill="white" />
      {/* Left arm holding paddle */}
      <path d="M45 48 L18 30 L14 22 L20 20 L26 28 L48 52" fill="white" />
      {/* Paddle head */}
      <ellipse cx="10" cy="16" rx="10" ry="13" fill="white" opacity="0.8" />
      {/* Right arm */}
      <path d="M75 48 L96 65" stroke="white" strokeWidth="6" strokeLinecap="round" />
      {/* Legs */}
      <path d="M50 90 L38 150 L46 152 L58 105 L72 152 L80 150 L70 90Z" fill="white" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Main IntroSection component
───────────────────────────────────────────── */
export default function IntroSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-120px' });
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const visualY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.9, 0.3]);

  useEffect(() => { setMounted(true); }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  const particles = [
    { w: 6, h: 6, top: '15%', left: '18%', delay: 0, dur: 7 },
    { w: 4, h: 4, top: '35%', left: '72%', delay: 1.2, dur: 5 },
    { w: 8, h: 8, top: '60%', left: '30%', delay: 2.5, dur: 8 },
    { w: 5, h: 5, top: '80%', left: '65%', delay: 0.8, dur: 6 },
    { w: 3, h: 3, top: '25%', left: '85%', delay: 3.1, dur: 5.5 },
    { w: 7, h: 7, top: '50%', left: '10%', delay: 1.7, dur: 9 },
    { w: 4, h: 4, top: '70%', left: '48%', delay: 4,   dur: 6 },
    { w: 5, h: 5, top: '10%', left: '55%', delay: 2.2, dur: 7.5 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-padel-base py-6 lg:py-8"
      aria-label="Introduction to XPARK Padel Academy"
    >
      {/* ── Global ambient glows ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[70vw] h-[70vw] bg-padel-forest/25 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-padel-emerald/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-padel-forest/15 rounded-full blur-[80px]" />
      </div>

      {/* ── Section divider top ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-padel-emerald/30 to-transparent z-10" />

      {/* ── Main grid ── */}
      <div className="container relative z-10 mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* ════════════════════════════════════
              LEFT — Text content
          ════════════════════════════════════ */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-8"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeLeft} className="flex items-center gap-4">
              <div className="w-8 h-px bg-padel-emerald" />
              <span className="font-inter text-[11px] uppercase tracking-[0.35em] text-padel-emerald">
                About The Academy
              </span>
            </motion.div>

            {/* SEO Heading */}
            <motion.div variants={fadeUp} className="relative">
              <h2 className="font-cinzel text-3xl md:text-4xl xl:text-5xl text-white leading-[1.15] tracking-tight">
                Dubai's Elite Destination for{' '}
                <span className="relative inline-block">
                  <span className="text-gradient-emerald glow-text-emerald">
                    Professional Padel
                  </span>
                  {/* Underline shimmer */}
                  <motion.span
                    className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-padel-emerald to-transparent"
                    animate={isInView ? { width: '100%' } : { width: '0%' }}
                    transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </span>{' '}
                Training
              </h2>
            </motion.div>

            {/* Decorative thin line */}
            <motion.div variants={fadeLeft} className="flex items-center gap-4">
              <div className="w-full h-px bg-gradient-to-r from-padel-emerald/20 via-padel-metallic/10 to-transparent" />
            </motion.div>

            {/* SEO Description */}
            <motion.p
              variants={fadeUp}
              className="font-inter text-base md:text-[17px] text-gray-400 leading-[1.85] max-w-lg border-l border-padel-emerald/25 pl-6"
            >
              XPARK Padel Academy delivers professional padel coaching, premium courts, advanced
              training programs, and competitive playing experiences in Dubai, creating the ultimate
              destination for beginners, athletes, and padel enthusiasts seeking elite performance
              development.
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-4 pt-2"
            >
              {[
                { value: '8+', label: 'Premium Courts' },
                { value: '50+', label: 'Pro Coaches' },
                { value: '2K+', label: 'Members' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="glass-premium rounded-lg p-4 text-center group hover:border-padel-emerald/30 transition-colors duration-500"
                >
                  <p className="font-cinzel text-2xl md:text-3xl text-padel-emerald glow-text-emerald mb-1">
                    {stat.value}
                  </p>
                  <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeUp} className="pt-2">
              <Link
                to="/about"
                id="intro-about-btn"
                className="group relative inline-flex items-center gap-3 px-6 py-3.5 overflow-hidden border border-padel-emerald/40 text-white font-inter text-xs uppercase tracking-[0.25em] transition-all duration-500 hover:border-padel-emerald hover:shadow-[0_0_32px_rgba(20,184,89,0.3)]"
              >
                {/* Fill sweep */}
                <span className="absolute inset-0 bg-gradient-to-r from-padel-emerald/20 to-padel-forest/40 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                {/* Glow pulse ring */}
                <motion.span
                  className="absolute inset-0 border border-padel-emerald/0 group-hover:border-padel-emerald/60"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span className="relative z-10">About Us</span>
                <span className="relative z-10 w-5 h-5 rounded-full border border-padel-emerald/40 flex items-center justify-center group-hover:border-padel-emerald group-hover:bg-padel-emerald transition-all duration-500">
                  <ArrowUpRight size={10} className="group-hover:text-padel-base transition-colors duration-500" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* ════════════════════════════════════
              RIGHT — Visual composition (Stunning Photograph)
          ════════════════════════════════════ */}
          <motion.div
            style={{ y: visualY }}
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative h-[520px] lg:h-[620px] flex items-center justify-center"
          >
            {/* ── Outer glow ring ── */}
            <motion.div
              style={{ opacity: glowOpacity }}
              className="absolute w-[75%] h-[75%] rounded-full border border-padel-emerald/10 blur-sm"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[90%] h-[90%] rounded-full border border-padel-emerald/5 border-dashed"
            />

            {/* ── Main Photograph Container ── */}
            <div className="relative w-full h-full max-w-[480px] mx-auto group">

              {/* Backdrop card border & glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-padel-emerald/20 to-white/[0.02] p-px">
                <div className="w-full h-full bg-padel-base/90 rounded-[15px]" />
              </div>

              {/* Inner picture ambient */}
              <div className="absolute inset-4 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <img
                  src="/programs/facility.png"
                  alt="XPARK Padel Academy Elite Facility"
                  className="w-full h-full object-cover object-center scale-[1.02] group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                />

                {/* Subtly dark cinematic linear gradient overlays for readability and elite feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-padel-base via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-padel-base/40 via-transparent to-padel-base/20" />
                <div className="absolute inset-0 bg-padel-emerald/5 pointer-events-none mix-blend-screen" />

                {/* Floating particles */}
                {mounted && particles.map((p, i) => (
                  <GlowParticle
                    key={i}
                    delay={p.delay}
                    duration={p.dur}
                    style={{
                      width: p.w,
                      height: p.h,
                      top: p.top,
                      left: p.left,
                      background: `radial-gradient(circle, #14B859 0%, transparent 70%)`,
                      boxShadow: `0 0 ${p.w * 3}px rgba(20,184,89,0.8)`,
                    }}
                  />
                ))}
              </div>

              {/* ── Corner accent marks ── */}
              {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-4 h-4 pointer-events-none z-20`}>
                  <div className="absolute top-0 left-0 w-full h-px bg-padel-emerald/40" />
                  <div className="absolute top-0 left-0 w-px h-full bg-padel-emerald/40" />
                </div>
              ))}
            </div>

            {/* ── Stray glow blobs behind card ── */}
            <div className="absolute top-1/4 right-[-10%] w-[200px] h-[200px] bg-padel-emerald/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-[-10%] w-[160px] h-[160px] bg-padel-forest/30 rounded-full blur-[50px] pointer-events-none" />
          </motion.div>

        </div>
      </div>

      {/* ── Section divider bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-padel-emerald/20 to-transparent z-10" />
    </section>
  );
}
