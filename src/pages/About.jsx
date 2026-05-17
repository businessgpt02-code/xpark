import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Zap, Target, Eye, TrendingUp, Clock, Activity } from 'lucide-react';
import PageSEO from '../components/PageSEO';

export default function About() {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="bg-padel-base min-h-screen relative overflow-hidden pb-24">
      <PageSEO 
        title="About XPARK Padel Academy | Premium Padel Dubai" 
        description="Discover XPARK Padel Academy. Dubai's premier destination for professional padel coaching, premium night courts, and elite junior & adult programs."
      />
      
      {/* Global Cinematic Noise Background */}
      <div className="bg-noise pointer-events-none"></div>

      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[70vw] h-[55vw] bg-padel-emerald/5 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-0 w-[40vw] h-[40vw] bg-padel-forest/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-10 w-[35vw] h-[35vw] bg-padel-emerald/4 rounded-full blur-[100px]" />
      </div>

      {/* ── Monumental Full-Widescreen Cinematic Hero Section ── */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden border-b border-white/[0.05] pt-20">
        {/* Cinematic Widescreen Visual Backing */}
        <div className="absolute inset-0 z-0">
          <img
            src="/programs/facility.png"
            alt="XPARK Premium Luxury Facility Widescreen"
            className="w-full h-full object-cover object-center scale-[1.01] brightness-[0.26] pointer-events-none"
          />
          {/* Deep cinematic gradient vignetting */}
          <div className="absolute inset-0 bg-gradient-to-r from-padel-base via-transparent to-padel-base opacity-90 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-padel-base/50 via-transparent to-padel-base pointer-events-none" />
          {/* Soft emerald light halos overlay */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-padel-emerald/10 rounded-full blur-[130px] mix-blend-screen pointer-events-none" />
        </div>

        {/* Abstract Architectural Court Lines floating in the background space */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.14] overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="200" y="100" width="1520" height="880" stroke="#14B859" strokeWidth="1.5" />
            <line x1="960" y1="100" x2="960" y2="980" stroke="#14B859" strokeWidth="1" strokeDasharray="6 6" />
            <circle cx="960" cy="540" r="160" stroke="#14B859" strokeWidth="1" />
          </svg>
        </div>

        {/* Far-Left Vertical Editorial Badge */}
        <div className="hidden xl:block absolute left-12 top-1/2 -translate-y-1/2 font-inter text-[9px] uppercase tracking-[0.6em] text-gray-500 origin-left -rotate-90 pointer-events-none">
          DUBAI SPORTS ACADEMY &bull; WORLD-CLASS VENUE
        </div>

        {/* Far-Right Vertical Coordinates Badge */}
        <div className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2 font-inter text-[9px] uppercase tracking-[0.6em] text-gray-500 origin-right rotate-90 pointer-events-none">
          LATITUDE: 25.2048&deg; N &bull; LONGITUDE: 55.2708&deg; E
        </div>

        {/* Center Monumental Content Area */}
        <div className="relative z-20 text-center px-6 max-w-5xl flex flex-col items-center">
          {/* Glowing Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-6 h-px bg-padel-emerald" />
            <span className="font-inter text-xs uppercase tracking-[0.45em] text-padel-emerald font-semibold animate-pulse">
              THE APEX OF SPORT
            </span>
            <span className="w-6 h-px bg-padel-emerald" />
          </motion.div>

          {/* Monumental Colossal Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="text-[11vw] md:text-[8vw] lg:text-[6.5vw] font-cinzel text-white uppercase leading-[0.95] tracking-tight mb-8"
          >
            Forged In <br />
            <span className="text-gradient-emerald glow-text-emerald font-light italic text-[12vw] md:text-[9vw] lg:text-[7vw]">Excellence.</span>
          </motion.h1>

          {/* Glassmorphic Luxury Credentials Stamp */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 backdrop-blur-md bg-padel-charcoal/20 border border-white/5 py-3 px-8 rounded-full shadow-2xl mt-4"
          >
            <span className="font-cinzel text-[10px] text-white tracking-[0.2em]">EST. 2024</span>
            <span className="w-1 h-1 rounded-full bg-padel-emerald" />
            <span className="font-cinzel text-[10px] text-white tracking-[0.2em]">DUBAI, UAE</span>
            <span className="w-1 h-1 rounded-full bg-padel-emerald" />
            <span className="font-cinzel text-[10px] text-white tracking-[0.2em]">ELITE ACADEMY</span>
          </motion.div>
        </div>

        {/* Animated bottom scroll arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 pointer-events-none">
          <span className="font-inter text-[8px] uppercase tracking-[0.4em] text-gray-400">SCROLL</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1.5">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1.5 bg-padel-emerald rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Main Body container for all other grids */}
      <div className="container mx-auto px-6 lg:px-16 relative z-10 mt-6 lg:mt-8">

        {/* ── Core "About XPARK Padel Academy" Premium Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch mb-16 relative z-10">
          
          {/* Subtle Ambient Backlighting Spotlight */}
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-padel-emerald/5 rounded-full blur-[120px] z-0 pointer-events-none" />

          {/* Left Column: Tall Cinematic Visual Blueprint Pillar (span 5) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative min-h-[500px] lg:min-h-full rounded-3xl overflow-hidden border border-white/10 group shadow-2xl flex flex-col justify-end"
          >
            {/* Visual Backing */}
            <div className="absolute inset-0 z-0">
              <img
                src="/programs/coach.png"
                alt="Elite Padel Coaching"
                className="w-full h-full object-cover object-center scale-[1.01] group-hover:scale-105 transition-transform duration-700 brightness-[0.4] pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-padel-base via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-padel-forest/10 mix-blend-color pointer-events-none" />
            </div>

            {/* Padel Court Geometry Blueprint Lines overlay */}
            <div className="absolute inset-0 z-10 opacity-[0.08] pointer-events-none p-4">
              <svg className="w-full h-full" viewBox="0 0 200 500" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="180" height="480" stroke="#14B859" strokeWidth="1" />
                <line x1="10" y1="250" x2="190" y2="250" stroke="#14B859" strokeWidth="1" />
                <line x1="100" y1="10" x2="100" y2="490" stroke="#14B859" strokeWidth="1" />
                <circle cx="100" cy="250" r="30" stroke="#14B859" strokeWidth="1" />
              </svg>
            </div>

            {/* Floating Credentials Stamp badge */}
            <div className="absolute top-6 right-6 backdrop-blur-md bg-padel-base/40 border border-white/10 px-4 py-2 rounded-full z-20">
              <span className="font-cinzel text-[8px] text-padel-emerald uppercase tracking-[0.25em] font-semibold">EST. 2024</span>
            </div>

            {/* Bottom Glassmorphic Stats Stamp overlay */}
            <div className="relative z-20 m-6 p-5 backdrop-blur-md bg-padel-base/50 border border-white/10 rounded-2xl flex justify-between items-center shadow-lg">
              <div>
                <span className="font-cinzel text-[7px] text-padel-emerald uppercase tracking-widest font-semibold">THE ACADEMY</span>
                <h4 className="font-cinzel text-xs text-white uppercase mt-0.5 tracking-wider">XPARK DUBAI</h4>
              </div>
              <div className="text-right">
                <span className="block font-cinzel text-xs text-padel-emerald font-semibold">100% ELITE</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Fashion Staggered Directory List & Content (span 7) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-between relative z-10 w-full"
          >
            <div className="flex flex-col items-start w-full">
              {/* Eyebrow / SEO Subheading */}
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-px bg-padel-emerald" />
                <span className="font-inter text-xs uppercase tracking-[0.35em] text-padel-emerald font-semibold">
                  About XPARK Padel Academy
                </span>
              </div>

              {/* Main Editorial Heading */}
              <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-[1.1] mb-6">
                Redefining Sport <br />
                <span className="text-gradient-emerald italic font-light">Into An Art Form.</span>
              </h2>

              {/* Main Rich SEO Description */}
              <p className="font-inter text-gray-300 text-sm leading-[1.8] border-l border-padel-emerald/25 pl-6 mb-10 max-w-2xl">
                XPARK Padel Academy is a premier destination for professional padel coaching in Dubai, 
                offering elite training programs, premium padel courts, expert instructors, junior development 
                sessions, and world-class playing experiences for athletes and padel enthusiasts across the UAE.
              </p>

              {/* Staggered Directory List */}
              <div className="flex flex-col w-full divide-y divide-white/10 border-t border-b border-white/10 mb-10">
                
                {/* Directory 01 */}
                <div className="group py-6 flex items-start cursor-pointer transition-all duration-300">
                  <span className="font-cinzel text-lg text-padel-emerald/40 group-hover:text-padel-emerald transition-colors duration-300 font-semibold tracking-wider w-16 pt-0.5">
                    01.
                  </span>
                  <div className="flex-grow pl-2 border-l-2 border-transparent group-hover:border-padel-emerald transition-all duration-300 pl-4">
                    <h3 className="font-cinzel text-xs uppercase tracking-widest text-white mb-2 group-hover:text-padel-emerald transition-colors duration-300">
                      Professional Coaching
                    </h3>
                    <p className="font-inter text-xs text-gray-400 leading-relaxed max-w-xl">
                      Elite training methodologies crafted by international champions for rapid progression.
                    </p>
                  </div>
                  <div className="text-padel-emerald/30 group-hover:text-padel-emerald transition-colors duration-300 pt-1">
                    <Award size={16} />
                  </div>
                </div>

                {/* Directory 02 */}
                <div className="group py-6 flex items-start cursor-pointer transition-all duration-300">
                  <span className="font-cinzel text-lg text-padel-emerald/40 group-hover:text-padel-emerald transition-colors duration-300 font-semibold tracking-wider w-16 pt-0.5">
                    02.
                  </span>
                  <div className="flex-grow pl-2 border-l-2 border-transparent group-hover:border-padel-emerald transition-all duration-300 pl-4">
                    <h3 className="font-cinzel text-xs uppercase tracking-widest text-white mb-2 group-hover:text-padel-emerald transition-colors duration-300">
                      Premium Dubai Courts
                    </h3>
                    <p className="font-inter text-xs text-gray-400 leading-relaxed max-w-xl">
                      Superb panoramic glass, anti-glare illumination, and professional-grade shock-absorption.
                    </p>
                  </div>
                  <div className="text-padel-emerald/30 group-hover:text-padel-emerald transition-colors duration-300 pt-1">
                    <Shield size={16} />
                  </div>
                </div>

                {/* Directory 03 */}
                <div className="group py-6 flex items-start cursor-pointer transition-all duration-300">
                  <span className="font-cinzel text-lg text-padel-emerald/40 group-hover:text-padel-emerald transition-colors duration-300 font-semibold tracking-wider w-16 pt-0.5">
                    03.
                  </span>
                  <div className="flex-grow pl-2 border-l-2 border-transparent group-hover:border-padel-emerald transition-all duration-300 pl-4">
                    <h3 className="font-cinzel text-xs uppercase tracking-widest text-white mb-2 group-hover:text-padel-emerald transition-colors duration-300">
                      Junior & Adult Programs
                    </h3>
                    <p className="font-inter text-xs text-gray-400 leading-relaxed max-w-xl">
                      Perfectly structured age and skill-based programs designed for technical excellence.
                    </p>
                  </div>
                  <div className="text-padel-emerald/30 group-hover:text-padel-emerald transition-colors duration-300 pt-1">
                    <Zap size={16} />
                  </div>
                </div>

                {/* Directory 04 */}
                <div className="group py-6 flex items-start cursor-pointer transition-all duration-300">
                  <span className="font-cinzel text-lg text-padel-emerald/40 group-hover:text-padel-emerald transition-colors duration-300 font-semibold tracking-wider w-16 pt-0.5">
                    04.
                  </span>
                  <div className="flex-grow pl-2 border-l-2 border-transparent group-hover:border-padel-emerald transition-all duration-300 pl-4">
                    <h3 className="font-cinzel text-xs uppercase tracking-widest text-white mb-2 group-hover:text-padel-emerald transition-colors duration-300">
                      Competitive Training
                    </h3>
                    <p className="font-inter text-xs text-gray-400 leading-relaxed max-w-xl">
                      A high-performance society focused on match play, tournaments, and court dominance.
                    </p>
                  </div>
                  <div className="text-padel-emerald/30 group-hover:text-padel-emerald transition-colors duration-300 pt-1">
                    <Target size={16} />
                  </div>
                </div>

              </div>
            </div>

            {/* Premium CTA Button */}
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 px-6 py-3.5 overflow-hidden w-fit
                         border border-padel-emerald/40 text-white font-inter text-xs uppercase tracking-[0.25em]
                         transition-all duration-500 backdrop-blur-sm bg-padel-base/20
                         hover:border-padel-emerald hover:shadow-[0_0_36px_rgba(20,184,89,0.25)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-padel-emerald/30 to-padel-forest/50
                               translate-x-[-101%] group-hover:translate-x-0
                               transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              <span className="relative z-10">Contact Us</span>
              <span className="relative z-10 w-5 h-5 rounded-full border border-padel-emerald/40 flex items-center justify-center
                               group-hover:border-padel-emerald group-hover:bg-padel-emerald
                               transition-all duration-400">
                <ArrowRight size={10} className="group-hover:text-padel-base transition-colors duration-300" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Mission & Vision Section with Full-Width Homepage Amenities Background ── */}
      <section className="relative overflow-hidden bg-padel-surface py-16 lg:py-20 my-16 border-y border-white/[0.05]">
        
        {/* Court-line background pattern (exact replication from homepage amenities) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
          <svg
            className="absolute w-full h-full opacity-[0.22]"
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

        {/* Ambient glows (exact replication from homepage amenities) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] bg-padel-emerald/24 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[35vw] h-[35vw] bg-padel-emerald/14 rounded-full blur-[100px]" />
        </div>

        {/* Top divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-padel-emerald/25 to-transparent" />

        <div className="container relative z-10 mx-auto px-6 lg:px-16">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="w-8 h-px bg-padel-emerald" />
              <span className="font-inter text-xs uppercase tracking-[0.35em] text-padel-emerald font-semibold">
                Strategic Foundation
              </span>
              <span className="w-8 h-px bg-padel-emerald" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-tight mb-6"
            >
              Our Mission & Our Vision
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="font-inter text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl"
            >
              Building the future of professional padel training in Dubai through elite coaching, 
              premium facilities, and world-class player development experiences.
            </motion.p>
          </div>

          {/* Mission & Vision Split Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative items-stretch">
            
            {/* Center Vertical glowing line for Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-x-1/2" />

            {/* Column 1: Our Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between p-8 md:p-12 rounded-2xl border border-white/[0.05] bg-padel-charcoal/30 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-padel-emerald/20 hover:shadow-[0_0_40px_rgba(20,184,89,0.06)] hover:scale-[1.01]"
            >
              {/* Card Ambient Glow */}
              <div className="absolute -top-12 -left-12 w-44 h-44 bg-padel-emerald/8 blur-[50px] rounded-full group-hover:bg-padel-emerald/12 transition-all duration-500 pointer-events-none" />
              
              {/* Subtle Court Line Overlay */}
              <div className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-500 pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="280" height="280" stroke="#14B859" strokeWidth="1" />
                  <line x1="10" y1="150" x2="290" y2="150" stroke="#14B859" strokeWidth="1.5" strokeDasharray="5 5" />
                </svg>
              </div>

              <div className="relative z-10 flex flex-col items-start">
                {/* Minimal Luxury Icon */}
                <div className="w-12 h-12 rounded-xl bg-padel-emerald/10 border border-padel-emerald/20 flex items-center justify-center text-padel-emerald mb-6 group-hover:bg-padel-emerald group-hover:text-padel-base transition-all duration-400">
                  <TrendingUp size={22} />
                </div>

                <h3 className="font-cinzel text-xl md:text-2xl text-white uppercase tracking-wider mb-5">
                  Our Mission
                </h3>

                <p className="font-inter text-gray-300 text-sm md:text-[15px] leading-[1.8] max-w-lg">
                  XPARK Padel Academy is committed to delivering professional padel coaching in Dubai through 
                  expert training programs, premium courts, junior athlete development, and competitive learning 
                  environments designed to elevate every player’s performance and confidence.
                </p>
              </div>

              {/* Glowing Bottom Line on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-padel-emerald/50 to-transparent w-0 group-hover:w-full transition-all duration-500 z-20 pointer-events-none" />
            </motion.div>

            {/* Column 2: Our Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between p-8 md:p-12 rounded-2xl border border-white/[0.05] bg-padel-charcoal/30 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-padel-emerald/20 hover:shadow-[0_0_40px_rgba(20,184,89,0.06)] hover:scale-[1.01]"
            >
              {/* Card Ambient Glow */}
              <div className="absolute -bottom-12 -right-12 w-44 h-44 bg-padel-emerald/8 blur-[50px] rounded-full group-hover:bg-padel-emerald/12 transition-all duration-500 pointer-events-none" />
              
              {/* Subtle Court Line Overlay */}
              <div className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-500 pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="280" height="280" stroke="#14B859" strokeWidth="1" />
                  <circle cx="150" cy="150" r="40" stroke="#14B859" strokeWidth="1" />
                </svg>
              </div>

              <div className="relative z-10 flex flex-col items-start">
                {/* Minimal Luxury Icon */}
                <div className="w-12 h-12 rounded-xl bg-padel-emerald/10 border border-padel-emerald/20 flex items-center justify-center text-padel-emerald mb-6 group-hover:bg-padel-emerald group-hover:text-padel-base transition-all duration-400">
                  <Eye size={22} />
                </div>

                <h3 className="font-cinzel text-xl md:text-2xl text-white uppercase tracking-wider mb-5">
                  Our Vision
                </h3>

                <p className="font-inter text-gray-300 text-sm md:text-[15px] leading-[1.8] max-w-lg">
                  To become the leading padel academy in Dubai and the UAE by creating a world-class destination 
                  for professional coaching, elite competitions, junior training programs, and premium padel 
                  experiences for players of all levels.
                </p>
              </div>

              {/* Glowing Bottom Line on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent to-padel-emerald/50 w-0 group-hover:w-full transition-all duration-500 z-20 pointer-events-none" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Re-open main container for remaining sections */}
      <div className="container mx-auto px-6 lg:px-16 relative z-10">

        {/* ── Why Choose XPARK Padel Academy Section ── */}
        <div className="relative mb-20 pt-4">

          {/* Centered Heading Layout */}
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
            {/* Premium Live Eyebrow Badge */}
            <div className="inline-flex items-center gap-3 mb-6 bg-white/[0.02] border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-padel-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-padel-emerald"></span>
              </span>
              <span className="font-inter text-[10px] uppercase tracking-[0.3em] text-padel-emerald font-semibold">
                Elite Sports Ecosystem
              </span>
            </div>

            <h2 className="font-cinzel text-3xl md:text-5xl text-white uppercase tracking-tight leading-[1.1] mb-6">
              Why Choose <span className="text-gradient-emerald italic font-light">XPARK Academy</span>
            </h2>

            <p className="font-inter text-gray-300 text-sm md:text-base leading-[1.8] max-w-2xl">
              XPARK Padel Academy combines professional padel coaching in Dubai, premium world-class courts, 
              elite player development programs, junior training sessions, and advanced competitive experiences 
              to create one of the UAE’s leading luxury padel destinations.
            </p>
          </div>

          {/* Staggered Vertical Spine Pathway */}
          <div className="relative w-full max-w-6xl mx-auto z-10 px-4 md:px-0">
            
            {/* Glowing Vertical Central Spine - Only on Large Screens */}
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-gradient-to-b from-padel-emerald/10 via-padel-emerald/40 to-padel-emerald/10 hidden lg:block" />

            {/* Pathway Items */}
            <div className="flex flex-col gap-16 lg:gap-24 relative">
              
              {/* Item 01: Professional Coaching (Left Aligned on Large Screen) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center relative group">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="col-span-1 lg:col-span-5 lg:text-right flex flex-col lg:items-end pl-6 lg:pl-0"
                >
                  <span className="font-cinzel text-xs font-bold text-padel-emerald mb-2">01 // COACHING</span>
                  <h3 className="font-cinzel text-lg md:text-xl uppercase tracking-wider text-white mb-3 group-hover:text-padel-emerald transition-colors duration-300">
                    Professional Coaching
                  </h3>
                  <p className="font-inter text-xs md:text-sm text-gray-400 leading-relaxed max-w-md lg:ml-auto">
                    Train with experienced padel coaches in Dubai using structured programs designed for performance, skill growth, and competitive excellence.
                  </p>
                  <span className="font-mono text-[8px] text-gray-600 mt-3 group-hover:text-gray-400 transition-colors duration-300">
                    XP // COACH_DECK
                  </span>
                </motion.div>

                {/* Central Spine Node & Horizontal Guideline */}
                <div className="col-span-1 lg:col-span-2 hidden lg:flex items-center justify-center relative">
                  {/* Glowing Node on Spine */}
                  <div className="w-4 h-4 rounded-full border-2 border-padel-emerald bg-padel-base flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-125 shadow-[0_0_10px_rgba(20,184,89,0.3)] group-hover:shadow-[0_0_20px_#14B859]">
                    <div className="w-1.5 h-1.5 rounded-full bg-padel-emerald" />
                  </div>
                  {/* Guideline connecting node to text */}
                  <div className="absolute right-1/2 w-20 h-px border-t border-dashed border-padel-emerald/30 group-hover:border-padel-emerald/60 transition-colors duration-300" />
                </div>

                {/* Icon display on opposite side on Large screen */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 lg:col-span-5 flex lg:justify-start pl-6 lg:pl-0 mt-4 lg:mt-0 text-gray-600 group-hover:text-padel-emerald transition-colors duration-300"
                >
                  <Award size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                </motion.div>
              </div>

              {/* Item 02: Premium Dubai Courts (Right Aligned on Large Screen) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center relative group">
                {/* Icon display on left side on Large screen */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 lg:col-span-5 hidden lg:flex justify-end text-gray-600 group-hover:text-padel-emerald transition-colors duration-300"
                >
                  <Shield size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                </motion.div>

                {/* Central Spine Node & Horizontal Guideline */}
                <div className="col-span-1 lg:col-span-2 hidden lg:flex items-center justify-center relative">
                  <div className="w-4 h-4 rounded-full border-2 border-padel-emerald bg-padel-base flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-125 shadow-[0_0_10px_rgba(20,184,89,0.3)] group-hover:shadow-[0_0_20px_#14B859]">
                    <div className="w-1.5 h-1.5 rounded-full bg-padel-emerald" />
                  </div>
                  <div className="absolute left-1/2 w-20 h-px border-t border-dashed border-padel-emerald/30 group-hover:border-padel-emerald/60 transition-colors duration-300" />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="col-span-1 lg:col-span-5 flex flex-col pl-6"
                >
                  <span className="font-cinzel text-xs font-bold text-padel-emerald mb-2">02 // COURTS</span>
                  <h3 className="font-cinzel text-lg md:text-xl uppercase tracking-wider text-white mb-3 group-hover:text-padel-emerald transition-colors duration-300">
                    Premium Dubai Courts
                  </h3>
                  <p className="font-inter text-xs md:text-sm text-gray-400 leading-relaxed max-w-md">
                    Play on professional-grade night courts featuring superb panoramic glass and anti-glare architectural illumination.
                  </p>
                  <span className="font-mono text-[8px] text-gray-600 mt-3 group-hover:text-gray-400 transition-colors duration-300">
                    XP // COURT_SYSTEM
                  </span>
                </motion.div>

                {/* Icon for mobile/tablet */}
                <div className="col-span-1 pl-6 mt-4 lg:hidden text-gray-600">
                  <Shield size={24} />
                </div>
              </div>

              {/* Item 03: Junior & Adult Programs (Left Aligned on Large Screen) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center relative group">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="col-span-1 lg:col-span-5 lg:text-right flex flex-col lg:items-end pl-6 lg:pl-0"
                >
                  <span className="font-cinzel text-xs font-bold text-padel-emerald mb-2">03 // PROGRAM</span>
                  <h3 className="font-cinzel text-lg md:text-xl uppercase tracking-wider text-white mb-3 group-hover:text-padel-emerald transition-colors duration-300">
                    Junior & Adult Programs
                  </h3>
                  <p className="font-inter text-xs md:text-sm text-gray-400 leading-relaxed max-w-md lg:ml-auto">
                    Age and skill-specific progression modules tailored to develop youth talent and master tactical adult court play.
                  </p>
                  <span className="font-mono text-[8px] text-gray-600 mt-3 group-hover:text-gray-400 transition-colors duration-300">
                    XP // PROG_CURRICULUM
                  </span>
                </motion.div>

                {/* Central Spine Node & Horizontal Guideline */}
                <div className="col-span-1 lg:col-span-2 hidden lg:flex items-center justify-center relative">
                  <div className="w-4 h-4 rounded-full border-2 border-padel-emerald bg-padel-base flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-125 shadow-[0_0_10px_rgba(20,184,89,0.3)] group-hover:shadow-[0_0_20px_#14B859]">
                    <div className="w-1.5 h-1.5 rounded-full bg-padel-emerald" />
                  </div>
                  <div className="absolute right-1/2 w-20 h-px border-t border-dashed border-padel-emerald/30 group-hover:border-padel-emerald/60 transition-colors duration-300" />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 lg:col-span-5 flex lg:justify-start pl-6 lg:pl-0 mt-4 lg:mt-0 text-gray-600 group-hover:text-padel-emerald transition-colors duration-300"
                >
                  <Zap size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                </motion.div>
              </div>

              {/* Item 04: Elite Training Environment (Right Aligned on Large Screen) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center relative group">
                {/* Icon display on left side on Large screen */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 lg:col-span-5 hidden lg:flex justify-end text-gray-600 group-hover:text-padel-emerald transition-colors duration-300"
                >
                  <Target size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                </motion.div>

                {/* Central Spine Node & Horizontal Guideline */}
                <div className="col-span-1 lg:col-span-2 hidden lg:flex items-center justify-center relative">
                  <div className="w-4 h-4 rounded-full border-2 border-padel-emerald bg-padel-base flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-125 shadow-[0_0_10px_rgba(20,184,89,0.3)] group-hover:shadow-[0_0_20px_#14B859]">
                    <div className="w-1.5 h-1.5 rounded-full bg-padel-emerald" />
                  </div>
                  <div className="absolute left-1/2 w-20 h-px border-t border-dashed border-padel-emerald/30 group-hover:border-padel-emerald/60 transition-colors duration-300" />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="col-span-1 lg:col-span-5 flex flex-col pl-6"
                >
                  <span className="font-cinzel text-xs font-bold text-padel-emerald mb-2">04 // ARENA</span>
                  <h3 className="font-cinzel text-lg md:text-xl uppercase tracking-wider text-white mb-3 group-hover:text-padel-emerald transition-colors duration-300">
                    Elite Training Environment
                  </h3>
                  <p className="font-inter text-xs md:text-sm text-gray-400 leading-relaxed max-w-md">
                    Train in a high-octane sports atmosphere crafted to fuel competitiveness, physical stamina, and athletic drive.
                  </p>
                  <span className="font-mono text-[8px] text-gray-600 mt-3 group-hover:text-gray-400 transition-colors duration-300">
                    XP // ARENA_OCTANE
                  </span>
                </motion.div>

                {/* Icon for mobile/tablet */}
                <div className="col-span-1 pl-6 mt-4 lg:hidden text-gray-600">
                  <Target size={24} />
                </div>
              </div>

              {/* Item 05: Flexible Court Booking (Left Aligned on Large Screen) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center relative group">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="col-span-1 lg:col-span-5 lg:text-right flex flex-col lg:items-end pl-6 lg:pl-0"
                >
                  <span className="font-cinzel text-xs font-bold text-padel-emerald mb-2">05 // SCHEDULER</span>
                  <h3 className="font-cinzel text-lg md:text-xl uppercase tracking-wider text-white mb-3 group-hover:text-padel-emerald transition-colors duration-300">
                    Flexible Court Booking
                  </h3>
                  <p className="font-inter text-xs md:text-sm text-gray-400 leading-relaxed max-w-md lg:ml-auto">
                    Book your favorite court times seamlessly online with easy scheduling and exclusive member-priority allocations.
                  </p>
                  <span className="font-mono text-[8px] text-gray-600 mt-3 group-hover:text-gray-400 transition-colors duration-300">
                    XP // BOOKING_GATEWAY
                  </span>
                </motion.div>

                {/* Central Spine Node & Horizontal Guideline */}
                <div className="col-span-1 lg:col-span-2 hidden lg:flex items-center justify-center relative">
                  <div className="w-4 h-4 rounded-full border-2 border-padel-emerald bg-padel-base flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-125 shadow-[0_0_10px_rgba(20,184,89,0.3)] group-hover:shadow-[0_0_20px_#14B859]">
                    <div className="w-1.5 h-1.5 rounded-full bg-padel-emerald" />
                  </div>
                  <div className="absolute right-1/2 w-20 h-px border-t border-dashed border-padel-emerald/30 group-hover:border-padel-emerald/60 transition-colors duration-300" />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 lg:col-span-5 flex lg:justify-start pl-6 lg:pl-0 mt-4 lg:mt-0 text-gray-600 group-hover:text-padel-emerald transition-colors duration-300"
                >
                  <Clock size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                </motion.div>
              </div>

              {/* Item 06: Competitive Player Development (Right Aligned on Large Screen) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center relative group">
                {/* Icon display on left side on Large screen */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 lg:col-span-5 hidden lg:flex justify-end text-gray-600 group-hover:text-padel-emerald transition-colors duration-300"
                >
                  <Activity size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                </motion.div>

                {/* Central Spine Node & Horizontal Guideline */}
                <div className="col-span-1 lg:col-span-2 hidden lg:flex items-center justify-center relative">
                  <div className="w-4 h-4 rounded-full border-2 border-padel-emerald bg-padel-base flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-125 shadow-[0_0_10px_rgba(20,184,89,0.3)] group-hover:shadow-[0_0_20px_#14B859]">
                    <div className="w-1.5 h-1.5 rounded-full bg-padel-emerald" />
                  </div>
                  <div className="absolute left-1/2 w-20 h-px border-t border-dashed border-padel-emerald/30 group-hover:border-padel-emerald/60 transition-colors duration-300" />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="col-span-1 lg:col-span-5 flex flex-col pl-6"
                >
                  <span className="font-cinzel text-xs font-bold text-padel-emerald mb-2">06 // PERFORMANCE</span>
                  <h3 className="font-cinzel text-lg md:text-xl uppercase tracking-wider text-white mb-3 group-hover:text-padel-emerald transition-colors duration-300">
                    Competitive Development
                  </h3>
                  <p className="font-inter text-xs md:text-sm text-gray-400 leading-relaxed max-w-md">
                    Accelerated match-play drills, tactical analysis, and tournaments designed to push you to the apex of UAE padel.
                  </p>
                  <span className="font-mono text-[8px] text-gray-600 mt-3 group-hover:text-gray-400 transition-colors duration-300">
                    XP // PLAYER_APEX
                  </span>
                </motion.div>

                {/* Icon for mobile/tablet */}
                <div className="col-span-1 pl-6 mt-4 lg:hidden text-gray-600">
                  <Activity size={24} />
                </div>
              </div>

            </div>

          </div>
        </div>
      </div> {/* Close the main container */}

      {/* ── XPARK In Numbers Section with Full-Width Homepage Amenities Background ── */}
      <section className="relative overflow-hidden bg-padel-surface py-16 lg:py-20 my-16 border-y border-white/[0.05]">
        
        {/* Court-line background pattern (exact replication from homepage amenities) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
          <svg
            className="absolute w-full h-full opacity-[0.22]"
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

        {/* Ambient glows (exact replication from homepage amenities) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] bg-padel-emerald/24 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[35vw] h-[35vw] bg-padel-emerald/14 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-16">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="w-8 h-px bg-padel-emerald" />
              <span className="font-inter text-xs uppercase tracking-[0.35em] text-padel-emerald font-semibold">
                Academy Performance Metrics
              </span>
              <span className="w-8 h-px bg-padel-emerald" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-tight mb-6"
            >
              XPARK <span className="text-gradient-emerald italic font-light">In Numbers</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="font-inter text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl"
            >
              XPARK Padel Academy continues to redefine professional padel coaching in Dubai through 
              premium courts, elite training programs, junior athlete development, and world-class player 
              experiences trusted by athletes across the UAE.
            </motion.p>
          </div>

          {/* Stats Cards Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative mb-16">
            
            {/* Spotlight Background Glows */}
            <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-padel-emerald/5 rounded-full blur-[90px] z-0 pointer-events-none" />
            <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-padel-forest/8 rounded-full blur-[90px] z-0 pointer-events-none" />

            {/* Stat Card 1: 500+ Active Players */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="group p-8 rounded-xl border border-white/[0.05] bg-padel-charcoal/30 backdrop-blur-md transition-all duration-400 hover:border-padel-emerald/20 hover:shadow-[0_0_24px_rgba(20,184,89,0.06)] hover:scale-[1.01]"
            >
              <span className="block font-cinzel text-4xl md:text-5xl text-padel-emerald font-bold tracking-tight mb-2 group-hover:text-white transition-colors duration-300">
                500+
              </span>
              <h3 className="font-cinzel text-xs uppercase tracking-wider text-white mb-2">Active Players</h3>
              <p className="font-inter text-[11px] text-gray-400 leading-relaxed">
                A thriving elite community of competitive padel players and passionate sports enthusiasts.
              </p>
            </motion.div>

            {/* Stat Card 2: 8+ Professional Courts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group p-8 rounded-xl border border-white/[0.05] bg-padel-charcoal/30 backdrop-blur-md transition-all duration-400 hover:border-padel-emerald/20 hover:shadow-[0_0_24px_rgba(20,184,89,0.06)] hover:scale-[1.01]"
            >
              <span className="block font-cinzel text-4xl md:text-5xl text-padel-emerald font-bold tracking-tight mb-2 group-hover:text-white transition-colors duration-300">
                8+
              </span>
              <h3 className="font-cinzel text-xs uppercase tracking-wider text-white mb-2">Premium Dubai Courts</h3>
              <p className="font-inter text-[11px] text-gray-400 leading-relaxed">
                World-class panoramic night courts built to premium international standards with anti-glare systems.
              </p>
            </motion.div>

            {/* Stat Card 3: 1000+ Coaching Sessions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="group p-8 rounded-xl border border-white/[0.05] bg-padel-charcoal/30 backdrop-blur-md transition-all duration-400 hover:border-padel-emerald/20 hover:shadow-[0_0_24px_rgba(20,184,89,0.06)] hover:scale-[1.01]"
            >
              <span className="block font-cinzel text-4xl md:text-5xl text-padel-emerald font-bold tracking-tight mb-2 group-hover:text-white transition-colors duration-300">
                1000+
              </span>
              <h3 className="font-cinzel text-xs uppercase tracking-wider text-white mb-2">Coaching Sessions</h3>
              <p className="font-inter text-[11px] text-gray-400 leading-relaxed">
                Delivered by certified trainers to accelerate técnica, speed, and strategic gameplay.
              </p>
            </motion.div>

            {/* Stat Card 4: 50+ Junior Athletes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group p-8 rounded-xl border border-white/[0.05] bg-padel-charcoal/30 backdrop-blur-md transition-all duration-400 hover:border-padel-emerald/20 hover:shadow-[0_0_24px_rgba(20,184,89,0.06)] hover:scale-[1.01]"
            >
              <span className="block font-cinzel text-4xl md:text-5xl text-padel-emerald font-bold tracking-tight mb-2 group-hover:text-white transition-colors duration-300">
                50+
              </span>
              <h3 className="font-cinzel text-xs uppercase tracking-wider text-white mb-2">Junior Athletes</h3>
              <p className="font-inter text-[11px] text-gray-400 leading-relaxed">
                Developing the next generation of competitive UAE tournament champions through custom academy paths.
              </p>
            </motion.div>

            {/* Stat Card 5: 5-Star Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="group p-8 rounded-xl border border-white/[0.05] bg-padel-charcoal/30 backdrop-blur-md transition-all duration-400 hover:border-padel-emerald/20 hover:shadow-[0_0_24px_rgba(20,184,89,0.06)] hover:scale-[1.01]"
            >
              <span className="block font-cinzel text-4xl md:text-5xl text-padel-emerald font-bold tracking-tight mb-2 group-hover:text-white transition-colors duration-300">
                5-Star
              </span>
              <h3 className="font-cinzel text-xs uppercase tracking-wider text-white mb-2">Player Experience</h3>
              <p className="font-inter text-[11px] text-gray-400 leading-relaxed">
                Rated at the absolute highest standard for luxury customer service, training structure, and facility feel.
              </p>
            </motion.div>

            {/* Stat Card 6: Open 7 Days a Week */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group p-8 rounded-xl border border-white/[0.05] bg-padel-charcoal/30 backdrop-blur-md transition-all duration-400 hover:border-padel-emerald/20 hover:shadow-[0_0_24px_rgba(20,184,89,0.06)] hover:scale-[1.01]"
            >
              <span className="block font-cinzel text-4xl md:text-5xl text-padel-emerald font-bold tracking-tight mb-2 group-hover:text-white transition-colors duration-300">
                Open 7
              </span>
              <h3 className="font-cinzel text-xs uppercase tracking-wider text-white mb-2">Days a Week</h3>
              <p className="font-inter text-[11px] text-gray-400 leading-relaxed">
                Unrestricted access from morning till late night for perfect timing matches and competitive group leagues.
              </p>
            </motion.div>

          </div>

          {/* Premium Call to Action below stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center text-center mt-12"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 px-6 py-3.5 overflow-hidden
                         border border-padel-emerald text-white font-inter text-xs uppercase tracking-[0.25em]
                         transition-all duration-500 backdrop-blur-sm bg-padel-emerald/10
                         hover:shadow-[0_0_40px_rgba(20,184,89,0.35)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-padel-emerald to-padel-forest
                               translate-y-[101%] group-hover:translate-y-0
                               transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              <span className="relative z-10 font-semibold group-hover:text-padel-base transition-colors duration-300">
                Join Dubai’s Elite Padel Community
              </span>
              <span className="relative z-10 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center
                               bg-white/5 group-hover:border-padel-base group-hover:bg-padel-base transition-all duration-400">
                <ArrowRight size={10} className="group-hover:text-padel-emerald transition-colors duration-300" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Re-open main container for remaining sections */}
      <div className="container mx-auto px-6 lg:px-16 relative z-10">

        {/* ── Grand Athletic Manifesto ── */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full py-28 border-y border-white/10 flex items-center justify-center text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-padel-base via-padel-forest/20 to-padel-base z-0"></div>
          <p className="relative z-10 font-cinzel text-xl md:text-3xl text-white leading-relaxed max-w-4xl uppercase tracking-widest px-6">
            "We do not follow the game. <br/>
            <span className="text-gradient-emerald italic">We elevate it.</span>"
          </p>
        </motion.div>

      </div>
    </div>
  );
}
