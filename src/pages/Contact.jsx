import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import PageSEO from '../components/PageSEO';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Custom cursor / glow logic
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 120 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="bg-padel-base min-h-screen relative overflow-hidden selection:bg-padel-emerald selection:text-padel-base">
      <PageSEO 
        title="Contact" 
        description="Contact XPARK Padel Academy to secure your reservation."
      />
      
      {/* Texture Overlay */}
      <div className="bg-noise mix-blend-overlay"></div>

      {/* Interactive Background Glow */}
      <motion.div
        className="fixed top-0 left-0 w-[600px] h-[600px] bg-padel-emerald/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Static ambient light */}
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-padel-emerald/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10 pt-32 pb-32 lg:min-h-screen flex items-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 w-full">
          
          {/* Left Column: Typography & Info */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-padel-emerald"></div>
                <p className="font-inter text-xs uppercase tracking-[0.4em] text-padel-emerald">Contact</p>
              </div>
              <h1 className="text-5xl md:text-7xl font-cinzel text-white uppercase tracking-tighter leading-[0.9]">
                Secure Your <br/>
                <span className="text-gradient-emerald italic font-light">Reservation</span>
              </h1>
              <p className="font-inter text-gray-400 mt-8 max-w-md leading-relaxed text-sm">
                Experience padel at its highest echelon. Connect with us to arrange your court time or discuss exclusive membership opportunities.
              </p>
            </motion.div>

            <motion.div variants={containerVariants} className="flex flex-col gap-8">
              
              {/* Info Card 1 */}
              <motion.a 
                href="tel:+971552766535"
                variants={itemVariants} 
                className="group flex items-start gap-6 p-4 -ml-4 rounded-2xl hover:bg-white/[0.02] transition-colors duration-500 border border-transparent hover:border-white/5 cursor-pointer block"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-padel-surface group-hover:border-padel-emerald/50 group-hover:shadow-[0_0_20px_rgba(20,184,89,0.2)] transition-all duration-500 shrink-0">
                  <Phone size={18} className="text-gray-400 group-hover:text-padel-emerald transition-colors duration-500" />
                </div>
                <div>
                  <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">Direct Line</p>
                  <p className="font-cinzel text-xl text-white group-hover:text-padel-light transition-colors">+971 55 276 6535</p>
                </div>
              </motion.a>

              {/* Info Card 2 */}
              <motion.a 
                href="mailto:xparkpadelacademymiddlee@gmail.com"
                variants={itemVariants} 
                className="group flex items-start gap-6 p-4 -ml-4 rounded-2xl hover:bg-white/[0.02] transition-colors duration-500 border border-transparent hover:border-white/5 cursor-pointer block"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-padel-surface group-hover:border-padel-emerald/50 group-hover:shadow-[0_0_20px_rgba(20,184,89,0.2)] transition-all duration-500 shrink-0">
                  <Mail size={18} className="text-gray-400 group-hover:text-padel-emerald transition-colors duration-500" />
                </div>
                <div>
                  <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">Digital Correspondence</p>
                  <p className="font-cinzel text-base text-white group-hover:text-padel-light transition-colors break-all">xparkpadelacademymiddlee@gmail.com</p>
                </div>
              </motion.a>

            </motion.div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            className="lg:col-span-6 lg:col-start-7 lg:mt-0 mt-8"
            initial={{ opacity: 0, filter: 'blur(10px)', y: 40 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-premium p-8 md:p-14 rounded-3xl relative">
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-padel-emerald/30 rounded-tr-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-padel-emerald/30 rounded-bl-3xl"></div>

              <div className="mb-10">
                <h2 className="font-cinzel text-3xl text-white uppercase mb-2">Submit Inquiry</h2>
                <p className="font-inter text-sm text-gray-400">Our team aims to respond within two hours.</p>
              </div>
              
              <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                
                {/* Custom Input Group */}
                <div className="relative group">
                  <input 
                    type="text" 
                    id="fullName"
                    className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-inter text-base focus:outline-none focus:border-padel-emerald transition-colors peer placeholder-transparent"
                    placeholder="Full Name"
                  />
                  <label htmlFor="fullName" className="absolute left-0 top-0 text-gray-500 font-inter text-xs uppercase tracking-widest peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-padel-emerald transition-all duration-300">
                    Full Name
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-padel-emerald transition-all duration-500 ease-out peer-focus:w-full"></div>
                </div>

                <div className="relative group mt-4">
                  <input 
                    type="email" 
                    id="emailAddress"
                    className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-inter text-base focus:outline-none focus:border-padel-emerald transition-colors peer placeholder-transparent"
                    placeholder="Email Address"
                  />
                  <label htmlFor="emailAddress" className="absolute left-0 top-0 text-gray-500 font-inter text-xs uppercase tracking-widest peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-padel-emerald transition-all duration-300">
                    Email Address
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-padel-emerald transition-all duration-500 ease-out peer-focus:w-full"></div>
                </div>

                <div className="relative group mt-4">
                  <select 
                    id="inquiryType"
                    className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-inter text-base focus:outline-none focus:border-padel-emerald transition-colors appearance-none cursor-pointer"
                    defaultValue="Reservation"
                  >
                    <option value="Reservation" className="bg-padel-charcoal text-white">Court Reservation</option>
                    <option value="Membership" className="bg-padel-charcoal text-white">Membership Inquiry</option>
                    <option value="Events" className="bg-padel-charcoal text-white">Private Events</option>
                    <option value="Other" className="bg-padel-charcoal text-white">Other Inquiry</option>
                  </select>
                  <label htmlFor="inquiryType" className="absolute left-0 -top-5 text-gray-500 font-inter text-xs uppercase tracking-widest transition-all duration-300">
                    Nature of Inquiry
                  </label>
                  {/* Custom Arrow */}
                  <div className="absolute right-0 top-1 pointer-events-none">
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"/>
                    </svg>
                  </div>
                </div>
                
                <button 
                  className="mt-10 group flex items-center gap-6 text-white w-max relative"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span className="font-inter text-sm uppercase tracking-[0.2em] relative z-10 group-hover:text-padel-base transition-colors duration-500 delay-100">
                    Transmit Request
                  </span>
                  <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center relative overflow-hidden shrink-0 z-10">
                    <motion.div 
                      className="absolute inset-0 bg-padel-emerald origin-bottom"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    />
                    <ArrowRight size={20} className="relative z-20 group-hover:text-padel-base transition-colors duration-500" />
                  </div>
                  
                  {/* Button Background Reveal */}
                  <motion.div 
                    className="absolute inset-0 -inset-x-8 bg-white rounded-full z-0 pointer-events-none origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  />
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
