import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import { MapPin, Clock, Layers, DollarSign, Play, ArrowRight, Compass } from 'lucide-react';

export default function Courts() {


  const allLocationsRaw = [
    { name: "Muhaisnah", type: "Indoor Arena", courts: "6 WPT Courts", code: "XP//MUH" },
    { name: "Dubai Festival City", type: "Waterfront Club", courts: "8 Panoramic Courts", code: "XP//DFC" },
    { name: "Nad Al Sheba", type: "Championship Venue", courts: "12 Elite Courts", code: "XP//NAS" },
    { name: "Muwaileh", type: "Premium Indoor", courts: "4 AC Courts", code: "XP//MUW" },
    { name: "Al Warqa", type: "Sports Enclave", courts: "6 Pro Courts", code: "XP//WAR" },
    { name: "Jumeirah", type: "Boutique Lounge", courts: "4 Skyline Courts", code: "XP//JUM" },
    { name: "Dubai Design District", type: "Creative Hub", courts: "6 Rooftop Courts", code: "XP//D3" },
    { name: "Dubai Land Complex", type: "Family Arena", courts: "8 Multi-courts", code: "XP//DLC" },
    { name: "Ras Al Khor", type: "Industrial Arena", courts: "6 High-ceiling Courts", code: "XP//RAK" },
    { name: "Nad Al Hamer", type: "Private Enclaves", courts: "4 VIP Courts", code: "XP//NAH" },
    { name: "Business Bay", type: "Metropolitan Club", courts: "8 Skyline Courts", code: "XP//BB" },
    { name: "Al Safa Dubai", type: "Exclusive Gardens", courts: "6 Climate Courts", code: "XP//SAF" },
    { name: "Bu Kadra Dubai", type: "Championship Hub", courts: "8 WPT Courts", code: "XP//BUK" },
    { name: "Dubai Creek Harbour", type: "Waterfront Lounge", courts: "6 Sunset Courts", code: "XP//DCH" },
    { name: "Nad Al Sheba 1", type: "Meydan Corridor", courts: "6 Professional Courts", code: "XP//NAS.1" },
    { name: "Nad Al Sheba 2", type: "Elite Compound", courts: "4 Private Courts", code: "XP//NAS.2" },
    { name: "Nad Al Sheba 3", type: "Athletic Arena", courts: "6 Panoramic Courts", code: "XP//NAS.3" },
    { name: "Nad Al Sheba 4", type: "High-Performance", courts: "8 WPT Courts", code: "XP//NAS.4" },
    { name: "Meydan Dubai", type: "Grandstand Venue", courts: "10 Premium Courts", code: "XP//MEY" },
    { name: "Mirdif Dubai", type: "Community Park", courts: "6 Outdoor Courts", code: "XP//MIR" },
    { name: "Liwan Dubai", type: "Silicon Corridor", courts: "4 Standard Courts", code: "XP//LIW" },
    { name: "Al Wasl Dubai", type: "Heritage Enclave", courts: "6 Pro Courts", code: "XP//WAS" },
    { name: "Dubai Silicon Oasis", type: "High-Tech Hub", courts: "8 Smart Courts", code: "XP//DSO" },
    { name: "Dubai International City", type: "District Arena", courts: "6 Multi-courts", code: "XP//DIC" },
    { name: "Dubai International City Phase 2", type: "Extended Hub", courts: "6 Outdoor Courts", code: "XP//DIC.P2" },
    { name: "Warsan 1", type: "Eastern Hub", courts: "4 Pro Courts", code: "XP//WAR.1" },
    { name: "Warsan 4", type: "Elite Training", courts: "6 AC Courts", code: "XP//WAR.4" },
    { name: "Wadi Al Safa 2", type: "Premium Oasis", courts: "4 VIP Courts", code: "XP//WAS.2" },
    { name: "Al Jaddaf Dubai", type: "Creek View Club", courts: "6 Panoramic Courts", code: "XP//JAD" }
  ];

  const locations = allLocationsRaw.map((loc, i) => {
    const isIndoor = loc.type.toLowerCase().includes("indoor") || loc.courts.toLowerCase().includes("ac");
    return {
      name: "XPARK " + loc.name,
      specificLocation: loc.name,
      academyName: "XPARK PADEL ACADEMY MIDDLE EAST",
      category: isIndoor ? "Indoor / Climate-Controlled" : "Outdoor / Elite Venue",
      courtsCount: loc.courts,
      timings: "06:00 AM - 12:00 AM",
      price: "From AED 250",
      image: `/court/${i + 1}.png`,
      features: isIndoor 
        ? ["Indoor Courts", "Air Conditioned", "Professional Lighting", "Shower Facilities", "Lounge Area"]
        : ["Outdoor Courts", "Professional Lighting", "Equipment Rental", "Free Parking", "Cafe & Refreshments"],
      coordinates: loc.code
    };
  });

  return (
    <div className="bg-padel-base min-h-screen relative overflow-hidden pb-24">
      <PageSEO 
        title="Premium Padel Courts Dubai | XPARK Padel Academy UAE" 
        description="Discover professional padel courts in Dubai with XPARK Padel Academy. Book premium indoor and outdoor courts across Dubai's best sports venues."
      />
      
      {/* Global Cinematic Noise Background */}
      <div className="bg-noise absolute inset-0 pointer-events-none opacity-[0.02] z-10"></div>

      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[70vw] h-[55vw] bg-padel-emerald/5 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-0 w-[40vw] h-[40vw] bg-padel-forest/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-10 w-[35vw] h-[35vw] bg-padel-emerald/4 rounded-full blur-[100px]" />
      </div>

      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden border-b border-white/[0.05] pt-20">
        {/* Structured Data for Courts Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              "name": "XPARK Padel Academy Courts",
              "description": "Book premium indoor and outdoor padel courts in Dubai. World-class facilities with professional lighting and climate control.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
              }
            })
          }}
        />
        
        {/* Cinematic Widescreen Visual Backing */}
        <div className="absolute inset-0 z-0">
          <img
            src="/programs/court-booking.png"
            alt="XPARK Premium Luxury Padel Courts Dubai"
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
          PREMIUM INFRASTRUCTURE &bull; PROFESSIONAL ARENAS
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
              WORLD-CLASS SPORTS VENUES
            </span>
            <span className="w-6 h-px bg-padel-emerald" />
          </motion.div>

          {/* Monumental Colossal Headline (SEO Aligned Header) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="text-[11vw] md:text-[8vw] lg:text-[6.5vw] font-cinzel text-white uppercase leading-[0.95] tracking-tight mb-6"
          >
            Premium Padel <br />
            <span className="text-gradient-emerald glow-text-emerald font-light italic text-[12vw] md:text-[9vw] lg:text-[7vw]">Courts Dubai.</span>
          </motion.h1>

          {/* SEO Structured Subtitle/Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-inter text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl mb-8"
          >
            Book the best professional padel courts in Dubai at XPARK Padel Academy. We offer premium indoor and climate-controlled courts, world-class outdoor venues, and top-tier facilities across the UAE.
          </motion.p>

          {/* Glassmorphic Luxury Credentials Stamp */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 backdrop-blur-md bg-padel-charcoal/20 border border-white/5 py-3 px-8 rounded-full shadow-2xl"
          >
            <span className="font-cinzel text-[10px] text-white tracking-[0.2em]">WPT STANDARD</span>
            <span className="w-1 h-1 rounded-full bg-padel-emerald" />
            <span className="font-cinzel text-[10px] text-white tracking-[0.2em]">INDOOR & OUTDOOR</span>
            <span className="w-1 h-1 rounded-full bg-padel-emerald" />
            <span className="font-cinzel text-[10px] text-white tracking-[0.2em]">ELITE EXPERIENCE</span>
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
      <div className="container mx-auto px-6 lg:px-16 relative z-10 mt-2 lg:mt-4">

        {/* ── Premium XPARK Court Locations Section ── */}
        <div className="relative pt-2">
          
          {/* Top Divider line with neon glow node */}
          <div className="relative w-full h-px bg-gradient-to-r from-transparent via-padel-emerald/25 to-transparent mb-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-padel-emerald shadow-[0_0_8px_#14B859]" />
          </div>

          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-12 flex flex-col items-center">
            
            {/* Live Telemetry Eyebrow Badge */}
            <div className="inline-flex items-center gap-3 mb-6 bg-white/[0.02] border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-padel-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-padel-emerald"></span>
              </span>
              <span className="font-inter text-[10px] uppercase tracking-[0.3em] text-padel-emerald font-semibold">
                Elite Sports Arena Network
              </span>
            </div>

            <h2 className="font-cinzel text-3xl md:text-5xl text-white uppercase tracking-tight leading-[1.1] mb-6">
              Premium XPARK <span className="text-gradient-emerald italic font-light">Court Locations</span>
            </h2>

            {/* SEO Structured Subtitle */}
            <p className="font-inter text-gray-300 text-xs md:text-sm leading-[1.8] max-w-3xl">
              Discover professional padel courts in Dubai with XPARK Padel Academy, offering elite playing environments, 
              premium facilities, flexible booking experiences, and world-class courts designed for athletes, beginners, 
              and competitive players across the UAE.
            </p>
          </div>

          {/* Luxury Court Directory Responsive Grid (2-Column Symmetry) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 relative">
            
            {/* Ambient Spotlights inside grid */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-padel-emerald/4 rounded-full blur-[100px] pointer-events-none z-0" />

            {locations.map((loc, i) => (
              <div
                key={i}
                className="group relative flex flex-col bg-padel-charcoal/10 border border-white/[0.04] backdrop-blur-xl rounded-2xl overflow-hidden hover:border-padel-emerald/30 hover:shadow-[0_0_36px_rgba(20,184,89,0.06)] transition-all duration-500 z-10"
              >
                
                {/* Visual Hub Image Wrapper */}
                <div className="h-[250px] md:h-[280px] w-full relative overflow-hidden group/image z-10">
                  
                  {/* Background Court Image */}
                  <img 
                    src={loc.image} 
                    alt={`${loc.academyName} ${loc.specificLocation} - Premium Padel Court Dubai`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover/image:scale-105"
                  />

                  {/* Absolute overlay shades */}
                  <div className="absolute inset-0 bg-gradient-to-t from-padel-base via-padel-base/20 to-transparent z-10" />
                  <div className="absolute inset-0 bg-black/10 group-hover/image:bg-black/0 transition-colors duration-500 z-10" />
                </div>

                {/* Card Content Hub */}
                <div className="p-8 flex flex-col flex-1 z-10 relative">
                  
                  {/* Ambient Card glow sweep on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-padel-emerald/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Location Title */}
                  <div className="mb-6">
                    <span className="font-cinzel text-[10px] md:text-xs text-padel-emerald uppercase tracking-[0.25em] font-semibold block mb-1.5">
                      {loc.academyName}
                    </span>
                    <h3 className="font-cinzel text-xl md:text-2xl text-white uppercase tracking-wide group-hover:text-padel-emerald transition-colors duration-300">
                      Location: {loc.specificLocation}
                    </h3>
                  </div>

                  <div className="w-full h-px bg-white/[0.05] mb-6" />

                  {/* Feature Tag pills wrapper */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {loc.features.map((feat, idx) => (
                      <span 
                        key={idx} 
                        className="font-inter text-[9px] text-gray-400 bg-white/[0.02] border border-white/5 px-2.5 py-1 rounded-md transition-colors duration-300 hover:border-padel-emerald/20 hover:text-white"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Pricing row & Premium Dual CTA Buttons */}
                  <div className="mt-auto pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    
                    {/* Price Tag */}
                    <div className="flex flex-col">
                      <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest">Court Rates</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-cinzel text-xl text-padel-emerald font-bold">{loc.price}</span>
                        <span className="font-inter text-[10px] text-gray-500">/ Hour</span>
                      </div>
                    </div>

                    {/* Dual Action CTA Grid */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto mt-4 sm:mt-0">
                      
                      {/* Explore Venue wireframe */}
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.name + " Dubai")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto border border-white/10 hover:border-padel-emerald text-white hover:text-padel-emerald font-inter text-[10px] uppercase tracking-wider px-4 py-3 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-300"
                      >
                        <MapPin size={11} className="shrink-0" />
                        <span className="whitespace-nowrap">Google Maps</span>
                      </a>

                      {/* Book Court solid CTA with neon sweep glow */}
                      <a 
                        href="https://wa.me/971554488072"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-padel-emerald text-padel-base font-semibold hover:bg-white font-inter text-[10px] uppercase tracking-wider px-4 py-3 rounded-lg flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(20,184,89,0.15)] hover:shadow-[0_0_28px_rgba(255,255,255,0.25)] transition-all duration-300"
                      >
                        <span className="whitespace-nowrap">Book Court</span>
                        <ArrowRight size={11} className="shrink-0" />
                      </a>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>

      </div>

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
              Reserve Your Elite <br/>
              <span className="text-gradient-emerald glow-text-emerald italic font-light">Court Today</span>
            </h2>
            
            <p className="font-inter text-gray-400 text-sm md:text-base max-w-xl mb-12 leading-relaxed">
              Explore our premium network of indoor and outdoor padel courts across Dubai. Book your court now at XPARK Padel Academy.
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
