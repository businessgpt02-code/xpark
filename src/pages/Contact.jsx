import { motion } from 'framer-motion';
import PageSEO from '../components/PageSEO';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-padel-base min-h-screen relative overflow-hidden pt-32 pb-32">
      <PageSEO 
        title="Concierge" 
        description="Contact the XPARK Padel Academy concierge to secure your reservation."
      />
      
      <div className="bg-noise"></div>

      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-padel-emerald/5 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-inter text-xs uppercase tracking-[0.4em] text-padel-emerald mb-6">Concierge</p>
            <h1 className="text-5xl md:text-7xl font-cinzel text-white uppercase tracking-tighter leading-[0.9] mb-12">
              Secure Your <br/>
              <span className="text-padel-emerald italic font-light">Reservation</span>
            </h1>

            <div className="flex flex-col gap-10">
              <div className="border-l border-white/20 pl-6">
                <p className="font-inter text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Direct Line</p>
                <p className="font-cinzel text-2xl text-white">+971 50 000 0000</p>
              </div>
              <div className="border-l border-white/20 pl-6">
                <p className="font-inter text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Digital Correspondence</p>
                <p className="font-cinzel text-xl text-white">concierge@xparkpadel.ae</p>
              </div>
              <div className="border-l border-white/20 pl-6">
                <p className="font-inter text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">The Estate</p>
                <p className="font-inter text-sm text-gray-400 leading-relaxed max-w-xs">
                  Dubai, United Arab Emirates<br/>
                  (Exclusive Location Details Provided Upon Membership Approval)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-padel-charcoal/30 border border-white/10 p-10 md:p-14 backdrop-blur-md relative"
          >
            <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-padel-emerald/50"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-padel-emerald/50"></div>

            <h2 className="font-cinzel text-2xl text-white uppercase mb-10">Submit Inquiry</h2>
            
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-inter text-sm focus:outline-none focus:border-padel-emerald transition-colors placeholder:text-gray-600 uppercase tracking-widest"
                />
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-inter text-sm focus:outline-none focus:border-padel-emerald transition-colors placeholder:text-gray-600 uppercase tracking-widest"
                />
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Subject of Inquiry" 
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-inter text-sm focus:outline-none focus:border-padel-emerald transition-colors placeholder:text-gray-600 uppercase tracking-widest"
                />
              </div>
              
              <button className="mt-8 group flex items-center gap-6 text-white hover:text-padel-emerald transition-colors duration-500 w-max">
                <span className="font-inter text-xs uppercase tracking-[0.2em]">Transmit Message</span>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-padel-emerald transition-colors duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-padel-emerald translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
                  <ArrowRight size={16} className="relative z-10 group-hover:text-padel-base transition-colors duration-500" />
                </div>
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
