import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

/* ─────────────────────────────────────────────
   Slide data
───────────────────────────────────────────── */
const slides = [
  {
    id: 'court-booking',
    index: '01',
    tag: 'Court Reservations',
    title: ['Adult Court', 'Booking'],
    titleAccent: 1,
    description:
      'Book premium padel courts in Dubai with XPARK Padel Academy, offering professional playing surfaces, flexible scheduling, competitive matches, and elite facilities designed for casual players, athletes, corporate games, and advanced padel experiences.',
    cta: 'Book Now',
    ctaLink: '/contact',
    image: '/home/1.png',
    badge: 'Open 7 Days',
    stat: { value: '8+', label: 'Professional Courts' },
  },
  {
    id: 'adult-coaching',
    index: '02',
    tag: 'Expert Training',
    title: ['Adult', 'Coaching'],
    titleAccent: 1,
    description:
      'XPARK Padel Academy provides professional padel coaching in Dubai with expert trainers, structured skill development, tactical improvement sessions, and advanced training programs tailored for beginners, intermediate players, and competitive athletes.',
    cta: 'Enroll Now',
    ctaLink: '/contact',
    image: '/home/2.png',
    badge: 'All Levels Welcome',
    stat: { value: '50+', label: 'Certified Coaches' },
  },
  {
    id: 'junior-academy',
    index: '03',
    tag: 'Youth Development',
    title: ['Junior', 'Academy'],
    titleAccent: 1,
    description:
      'Develop young athletes through XPARK Junior Academy in Dubai with professional padel coaching, engaging training sessions, age-based learning programs, confidence-building activities, and elite sports development for children of all skill levels.',
    cta: 'Join Academy',
    ctaLink: '/contact',
    image: '/home/3.png',
    badge: 'Ages 6–17',
    stat: { value: '200+', label: 'Junior Members' },
  },
  {
    id: 'private-coaching',
    index: '04',
    tag: 'Elite Training',
    title: ['Private', 'Coaching'],
    titleAccent: 1,
    description:
      'Achieve championship performance with XPARK Private Padel Coaching in Dubai, featuring 1-on-1 intensive lessons, customized bio-mechanical feedback, structured skill analysis, and elite professional coaching customized specifically for you.',
    cta: 'Book Session',
    ctaLink: '/contact',
    image: '/home/4.png',
    badge: '1-on-1 Elite Focus',
    stat: { value: '100%', label: 'Individual Focus' },
  },
  {
    id: 'semi-private-coaching',
    index: '05',
    tag: 'Duo Development',
    title: ['Semi-Private', 'Coaching'],
    titleAccent: 1,
    description:
      'Accelerate match-play skills with XPARK Semi-Private Padel Coaching in Dubai. Play together with a partner while receiving elite structural instruction, custom dynamic game-play strategy, and tailored tactical athletic training.',
    cta: 'Book Session',
    ctaLink: '/contact',
    image: '/home/5.png',
    badge: '2 Players Max',
    stat: { value: '1:2 Ratio', label: 'Coach to Player' },
  },
  {
    id: 'group-coaching',
    index: '06',
    tag: 'Dynamic Group Sessions',
    title: ['Group', 'Coaching'],
    titleAccent: 1,
    description:
      'Master high-intensity tactical drills in our premium Group Padel Coaching in Dubai. Network and compete in dynamic, cooperative practice structures led by expert coaches designed to push you to the apex of competitive play.',
    cta: 'Join Group',
    ctaLink: '/contact',
    image: '/home/6.png',
    badge: 'Dynamic Social Play',
    stat: { value: '4-6', label: 'Players Per Group' },
  },
  {
    id: 'social-community-games',
    index: '07',
    tag: 'Social Tournaments',
    title: ['Social', 'Games'],
    titleAccent: 1,
    description:
      'Join the ultimate local network with XPARK Social Community Padel Games in Dubai. Engage in competitive tournaments, organized social match-play drills, active ladders, and elite community events designed for absolute player integration.',
    cta: 'Join Games',
    ctaLink: '/contact',
    image: '/home/8.png',
    badge: 'Active Community',
    stat: { value: '500+', label: 'Monthly Matchups' },
  },
];

/* ─────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────── */
const bgVariants = {
  enter: (dir) => ({
    scale: 1.08,
    x: dir > 0 ? '4%' : '-4%',
    opacity: 0,
  }),
  center: {
    scale: 1,
    x: 0,
    opacity: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (dir) => ({
    scale: 1.04,
    x: dir > 0 ? '-3%' : '3%',
    opacity: 0,
    transition: { duration: 0.65, ease: [0.7, 0, 0.84, 0] },
  }),
};

const contentVariants = {
  enter: { opacity: 0, x: -40 },
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.4, ease: [0.7, 0, 0.84, 0] },
  },
};

const itemVariants = (delay = 0) => ({
  enter: { opacity: 0, y: 24 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.3 + delay },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
});

/* ─────────────────────────────────────────────
   Main ProgramsSlider
───────────────────────────────────────────── */
export default function ProgramsSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const go = useCallback(
    (next) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(next > current ? 1 : -1);
      setCurrent(next);
    },
    [current, isAnimating]
  );

  const prev = () => go(current === 0 ? slides.length - 1 : current - 1);
  const next = () => go(current === slides.length - 1 ? 0 : current + 1);

  const slide = slides[current];

  return (
    <section
      className="relative overflow-hidden bg-padel-base"
      aria-label="XPARK Padel Academy Programs and Experiences"
    >
      {/* ══════════════════════════════════════════
          FULLSCREEN SLIDE CONTAINER — min-height
      ══════════════════════════════════════════ */}
      <div className="relative min-h-[75vh] lg:min-h-[80vh] flex flex-col">

        {/* ── Background image layer ── */}
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={`bg-${slide.id}`}
            custom={direction}
            variants={bgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            onAnimationComplete={() => setIsAnimating(false)}
            className="absolute inset-0 z-0"
          >
            <img
              src={slide.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-center max-sm:object-[65%_center]"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* ── Cinematic overlay stack ── */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Heavy black gradient — left content area (extremely soft on the right side) */}
          <div className="absolute inset-0 bg-gradient-to-r from-padel-base/75 via-padel-base/45 via-[45%] to-transparent" />
          {/* Bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-padel-base via-padel-base/10 to-transparent" />
          {/* Top vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-padel-base/70 via-transparent to-transparent" />
          {/* Emerald light leak — right edge */}
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-padel-emerald/26 to-transparent" />
          {/* Subtle noise grain */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMjAwIDIwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48ZmlsdGVyIGlkPSduJz48ZmVUdXJidWxlbmNlIHR5cGU9J2ZyYWN0YWxOb2lzZScgYmFzZUZyZXF1ZW5jeT0nMC45JyBudW1PY3RhdmVzPSczJyBzdGl0Y2hUaWxlcz0nc3RpdGNoJy8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsdGVyPSd1cmwoI24pJy8+PC9zdmc+')] opacity-[0.025] mix-blend-overlay" />
        </div>

        {/* ── Court geometry overlay — subtle ── */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <svg
            className="absolute right-0 top-0 h-full w-1/2 opacity-[0.24]"
            viewBox="0 0 600 800"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <rect x="30" y="60" width="540" height="680" stroke="#14B859" strokeWidth="1.5" />
            <line x1="300" y1="60" x2="300" y2="740" stroke="#14B859" strokeWidth="1" />
            <line x1="30" y1="400" x2="570" y2="400" stroke="#b5c7bc" strokeWidth="1.5" strokeDasharray="5 4" />
            <circle cx="300" cy="400" r="55" stroke="#14B859" strokeWidth="1" />
            <path d="M30 60 h24 M30 60 v24" stroke="#b5c7bc" strokeWidth="2" />
            <path d="M570 60 h-24 M570 60 v24" stroke="#b5c7bc" strokeWidth="2" />
            <path d="M30 740 h24 M30 740 v-24" stroke="#b5c7bc" strokeWidth="2" />
            <path d="M570 740 h-24 M570 740 v-24" stroke="#b5c7bc" strokeWidth="2" />
          </svg>
        </div>

        {/* ── Content area ── */}
        <div className="relative z-20 flex flex-col justify-between flex-grow">

          {/* Section header row */}
          <div className="container mx-auto px-6 lg:px-16 pt-10 lg:pt-12">
            <div className="flex items-end justify-between">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-8 h-px bg-padel-emerald" />
                  <span className="font-inter text-[11px] uppercase tracking-[0.35em] text-padel-emerald">
                    Programs & Experiences
                  </span>
                </div>
                <h2 className="font-cinzel text-2xl md:text-3xl text-white/90 tracking-tight">
                  Train. Compete.{' '}
                  <span className="text-gradient-emerald">Excel.</span>
                </h2>
              </div>
            </div>
          </div>

          {/* Main slide content */}
          <div className="container mx-auto px-6 lg:px-16 pb-3 lg:pb-4 mt-auto">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={`content-${slide.id}`}
                custom={direction}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="max-w-xl lg:max-w-2xl"
              >
                {/* Slide number + tag */}
                <motion.div
                  variants={itemVariants(0)}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex items-center gap-5 mb-6"
                >
                  <span className="font-cinzel text-[11px] text-padel-emerald/60 tracking-[0.3em]">
                    {slide.index}
                  </span>
                  <div className="w-6 h-px bg-white/20" />
                  {/* Live tag badge */}
                  <div className="flex items-center gap-2 backdrop-blur-sm bg-padel-base/30 border border-padel-emerald/25 rounded-full px-3 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-padel-emerald shadow-[0_0_6px_#14B859] animate-pulse" />
                    <span className="font-inter text-[10px] uppercase tracking-[0.2em] text-padel-emerald">
                      {slide.tag}
                    </span>
                  </div>
                </motion.div>

                {/* Large title */}
                <motion.div
                  variants={itemVariants(0.07)}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="mb-7"
                >
                  <h3 className="font-cinzel leading-[0.9] tracking-tight">
                    {slide.title.map((line, i) => (
                      <span
                        key={i}
                        className={`block text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] ${
                          i === slide.titleAccent
                            ? 'text-gradient-emerald glow-text-emerald'
                            : 'text-white'
                        }`}
                      >
                        {line}
                      </span>
                    ))}
                  </h3>
                </motion.div>

                {/* Divider */}
                <motion.div
                  variants={itemVariants(0.13)}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="mb-6 h-px w-24 bg-gradient-to-r from-padel-emerald/50 to-transparent"
                />

                {/* Description */}
                <motion.p
                  variants={itemVariants(0.18)}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="font-inter text-[15px] md:text-base text-gray-300/80 leading-[1.85] mb-8 max-w-lg
                             border-l border-padel-emerald/20 pl-5"
                >
                  {slide.description}
                </motion.p>

                {/* Stat + Badge row */}
                <motion.div
                  variants={itemVariants(0.23)}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-wrap items-center gap-3 mb-9"
                >
                  <div className="flex items-center gap-3 backdrop-blur-md bg-padel-base/40 border border-padel-emerald/20 rounded-xl px-5 py-3">
                    <span className="font-cinzel text-2xl text-padel-emerald glow-text-emerald">
                      {slide.stat.value}
                    </span>
                    <span className="font-inter text-[11px] uppercase tracking-[0.2em] text-gray-400">
                      {slide.stat.label}
                    </span>
                  </div>
                  <span className="font-inter text-[11px] uppercase tracking-[0.2em] text-padel-metallic/70
                                   border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm bg-padel-base/20">
                    {slide.badge}
                  </span>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  variants={itemVariants(0.28)}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <a
                    href="https://wa.me/971554488072"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 px-6 py-3.5 overflow-hidden
                               border border-padel-emerald/50 text-white font-inter text-xs uppercase tracking-[0.25em]
                               transition-all duration-500 backdrop-blur-sm bg-padel-base/20
                               hover:border-padel-emerald hover:shadow-[0_0_48px_rgba(20,184,89,0.3)]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-padel-emerald/30 to-padel-forest/60
                                     translate-x-[-101%] group-hover:translate-x-0
                                     transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                    <span className="relative z-10">{slide.cta}</span>
                    <span className="relative z-10 w-5 h-5 rounded-full border border-padel-emerald/50 flex items-center justify-center
                                     group-hover:border-padel-emerald group-hover:bg-padel-emerald
                                     transition-all duration-400">
                      <ArrowRight size={10} className="group-hover:text-padel-base transition-colors duration-300" />
                    </span>
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Bottom controls bar ── */}
          <div className="relative z-20 border-t border-white/[0.06]">
            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 h-px bg-white/5">
              <motion.div
                key={current}
                className="h-full bg-gradient-to-r from-padel-emerald to-padel-emerald/30"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: `${((current + 1) / slides.length) * 100}%` }}
              />
            </div>

            <div className="container mx-auto px-6 lg:px-16 py-3">
              <div className="flex items-center justify-between">

                {/* Dot indicators */}
                <div className="flex items-center gap-3">
                  {slides.map((s, i) => (
                    <button
                      key={s.id}
                      onClick={() => go(i)}
                      aria-label={`Go to ${s.title.join(' ')}`}
                      className="flex items-center"
                    >
                      <motion.div
                        animate={{
                          width: i === current ? 40 : 16,
                          backgroundColor:
                            i === current ? '#14B859' : 'rgba(255,255,255,0.15)',
                        }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="h-px rounded-full"
                      />
                    </button>
                  ))}
                </div>

                {/* Counter */}
                <div className="flex items-center gap-3">
                  <span className="font-cinzel text-sm text-padel-emerald">
                    {String(current + 1).padStart(2, '0')}
                  </span>
                  <div className="w-8 h-px bg-white/10" />
                  <span className="font-cinzel text-sm text-white/20">
                    {String(slides.length).padStart(2, '0')}
                  </span>
                </div>

                </div>
              </div>
            </div>
          </div>

          {/* ── Left Side Floating Arrow ── */}
          <div className="absolute left-4 lg:left-8 top-[35%] md:top-1/2 -translate-y-1/2 z-30 pointer-events-auto">
            <button
              onClick={prev}
              aria-label="Previous program"
              className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/20 bg-padel-base/40 flex items-center justify-center text-white/80
                         hover:border-padel-emerald hover:text-padel-emerald hover:shadow-[0_0_30px_rgba(20,184,89,0.3)]
                         transition-all duration-500 backdrop-blur-md group/arrow"
            >
              <ChevronLeft size={20} className="lg:w-6 lg:h-6 group-hover/arrow:-translate-x-0.5 transition-transform duration-300" />
            </button>
          </div>

          {/* ── Right Side Floating Arrow ── */}
          <div className="absolute right-4 lg:right-8 top-[35%] md:top-1/2 -translate-y-1/2 z-30 pointer-events-auto">
            <button
              onClick={next}
              aria-label="Next program"
              className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/20 bg-padel-base/40 flex items-center justify-center text-white/80
                         hover:border-padel-emerald hover:text-padel-emerald hover:shadow-[0_0_30px_rgba(20,184,89,0.3)]
                         transition-all duration-500 backdrop-blur-md group/arrow"
            >
              <ChevronRight size={20} className="lg:w-6 lg:h-6 group-hover/arrow:translate-x-0.5 transition-transform duration-300" />
            </button>
        </div>
      </div>
    </section>
  );
}
