import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Activity, Search } from 'lucide-react';

/* ─────────────────────────────────────────────
   Comprehensive list of all 29 XPARK Locations
   ───────────────────────────────────────────── */
const allLocations = [
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
const row1 = allLocations.slice(0, 10);
const row2 = allLocations.slice(10, 20);
const row3 = allLocations.slice(20, 29);

const LocationCard = ({ loc, i, isGrid = true }) => {
  const CardContent = (
    <div
      className={`group relative bg-padel-charcoal/15 border border-padel-emerald/20 hover:border-padel-emerald/40 hover:shadow-[0_0_20px_rgba(20,184,89,0.08)] backdrop-blur-xl rounded-xl p-3.5 overflow-hidden flex items-center justify-between transition-all duration-500 ${isGrid ? 'h-full' : 'w-72 shrink-0 h-[60px]'}`}
    >
      <div className="absolute inset-0 opacity-[0.01] group-hover:opacity-[0.04] pointer-events-none transition-opacity duration-500 z-0">
        <svg className="w-full h-full p-2" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="5" width="90" height="90" stroke="#14B859" strokeWidth="0.5" />
        </svg>
      </div>
      <h3 className="relative z-10 font-cinzel text-xs text-padel-emerald uppercase tracking-wide leading-none pr-4 whitespace-nowrap overflow-hidden text-ellipsis">
        {loc.name}
      </h3>
      <Link
        to="/courts"
        className="relative z-10 font-inter text-[9px] uppercase tracking-widest text-padel-emerald font-semibold flex items-center gap-1 transition-all duration-300"
      >
        <span>Explore</span>
        <ArrowRight size={8} className="transform group-hover:translate-x-0.5 transition-transform duration-300" />
      </Link>
      <div className="absolute inset-0 bg-gradient-to-tr from-padel-emerald/[0.01] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );

  if (isGrid) {
    return (
      <motion.div
        key={loc.name}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.6, delay: (i % 5) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      >
        {CardContent}
      </motion.div>
    );
  }

  return CardContent;
};

const MarqueeRow = ({ items, reverse }) => {
  const extendedItems = [...items, ...items, ...items, ...items];
  return (
    <div className="flex overflow-hidden relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4 group/marquee">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-padel-base to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-padel-base to-transparent z-10 pointer-events-none" />
      
      <div className={`flex items-center gap-4 w-max ${reverse ? 'animate-marquee-right' : 'animate-marquee-left'} group-hover/marquee:[animation-play-state:paused]`}>
        {extendedItems.map((loc, idx) => (
          <LocationCard key={`${loc.name}-${idx}`} loc={loc} isGrid={false} />
        ))}
      </div>
    </div>
  );
};

export default function LocationsSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocations = allLocations.filter(loc =>
    loc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-12 relative bg-padel-base overflow-hidden border-t border-white/5">
      {/* ── Visual Cinematic Effects & Ambient Lighting ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-padel-emerald/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-padel-emerald/4 rounded-full blur-[120px]" />
        
        {/* Subtle geometric grid background */}
        <div className="absolute inset-0 bg-noise opacity-[0.02] z-10" />
      </div>

      {/* ── Main Container ── */}
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        {/* ── Section Header (SEO Powerhouse) ── */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10">
          {/* Active Telemetry Eyebrow Badge */}
          <div className="inline-flex items-center gap-3 mb-3 bg-white/[0.02] border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-padel-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-padel-emerald"></span>
            </span>
            <span className="font-inter text-[10px] uppercase tracking-[0.3em] text-padel-emerald font-semibold">
              Elite Network Deployment
            </span>
          </div>

          <h2 className="font-cinzel text-4xl md:text-6xl text-white uppercase tracking-tight leading-[1.1] mb-6">
            XPARK Across <span className="text-gradient-emerald italic font-light">Dubai</span>
          </h2>

          <p className="font-inter text-gray-300 text-sm md:text-base leading-[1.8] mb-4">
            XPARK Padel Academy delivers professional padel coaching in Dubai with premium courts, 
            elite training programs, junior development sessions, and world-class playing experiences 
            across multiple luxury locations throughout the UAE.
          </p>

          <span className="font-mono text-[9px] text-padel-emerald uppercase tracking-[0.25em] font-semibold mt-2">
            ★ Padel Academy Dubai &bull; Professional Padel Coaching Dubai &bull; Premium Padel Courts Dubai &bull; Book Padel Court Dubai &bull; Dubai Padel Locations
          </span>
        </div>

        {/* ── Interactive Live Search Ticker ── */}
        <div className="max-w-md mx-auto mb-10 relative z-20">
          <div className="relative flex items-center bg-padel-charcoal/20 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-xl group hover:border-padel-emerald/40 transition-colors duration-300">
            <Search size={16} className="text-gray-500 group-hover:text-padel-emerald transition-colors duration-300 mr-3" />
            <input 
              type="text"
              placeholder="Search all 29 luxury locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none w-full font-inter text-xs text-white placeholder-gray-500"
            />
            <div className="flex gap-1.5 items-center">
              <span className="font-mono text-[9px] text-padel-emerald font-semibold bg-padel-emerald/10 px-2 py-0.5 rounded-md">
                {filteredLocations.length} / 29
              </span>
            </div>
          </div>
        </div>

        {/* ── Cinematic Marquee or Search Grid ── */}
        {searchQuery === "" ? (
          <div className="relative z-10">
            <MarqueeRow items={row1} reverse={false} />
            <MarqueeRow items={row2} reverse={true} />
            <MarqueeRow items={row3} reverse={false} />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 relative z-10">
            {filteredLocations.map((loc, i) => (
              <LocationCard key={loc.name} loc={loc} i={i} isGrid={true} />
            ))}
          </div>
        )}

        {/* Empty Search Fallback */}
        {filteredLocations.length === 0 && (
          <div className="text-center py-20 relative z-10 border border-white/5 rounded-2xl bg-white/[0.01] backdrop-blur-md max-w-lg mx-auto">
            <Activity className="text-padel-emerald mx-auto mb-4 animate-pulse" size={24} />
            <h4 className="font-cinzel text-white uppercase tracking-wider text-sm mb-1">No Arenas Found</h4>
            <p className="font-inter text-xs text-gray-500">No locations matching your current queries are registered in our networks.</p>
          </div>
        )}

      </div>
    </section>
  );
}
