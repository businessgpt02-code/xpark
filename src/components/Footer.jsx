import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-padel-base pt-32 pb-10 relative overflow-hidden border-t border-white/5">
      <div className="bg-noise"></div>
      
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-32">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-3 group mb-8">
              <div className="w-10 h-10 rounded-full border border-padel-emerald/30 flex items-center justify-center bg-padel-emerald/5 group-hover:bg-padel-emerald/20 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-padel-emerald/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="font-cinzel font-bold text-padel-emerald text-xl relative z-10">X</span>
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel font-bold text-lg tracking-[0.2em] text-white leading-none">XPARK</span>
                <span className="font-inter text-[8px] tracking-[0.3em] text-padel-emerald uppercase mt-1">Padel Academy</span>
              </div>
            </Link>
            <p className="text-gray-500 font-inter text-xs leading-[2] max-w-sm uppercase tracking-widest">
              The apex of professional padel in the United Arab Emirates. Where architectural mastery meets athletic supremacy.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-cinzel text-white mb-8 uppercase tracking-[0.2em] text-sm">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About', 'Courts', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-500 text-xs font-inter uppercase tracking-[0.2em] hover:text-white transition-colors duration-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <h4 className="font-cinzel text-white mb-8 uppercase tracking-[0.2em] text-sm">The Network</h4>
            <ul className="flex flex-col gap-4 mb-10">
              <li>
                <a href="#" className="text-gray-500 text-xs font-inter uppercase tracking-[0.2em] hover:text-padel-emerald transition-colors duration-500">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 text-xs font-inter uppercase tracking-[0.2em] hover:text-padel-emerald transition-colors duration-500">
                  LinkedIn
                </a>
              </li>
            </ul>
            
            <h4 className="font-cinzel text-white mb-6 uppercase tracking-[0.2em] text-sm">Exclusive Dispatch</h4>
            <form className="flex border-b border-white/20 pb-2 relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent w-full text-white font-inter text-xs tracking-[0.2em] focus:outline-none placeholder:text-gray-600 uppercase"
                required
              />
              <button 
                type="submit"
                className="text-padel-emerald font-cinzel text-sm uppercase tracking-widest hover:text-white transition-colors duration-500 ml-4"
              >
                Join
              </button>
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-padel-emerald group-hover:w-full transition-all duration-700"></div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] font-inter uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} XPARK Padel Academy.
          </p>
          <div className="flex items-center gap-8 text-gray-600 text-[10px] font-inter uppercase tracking-[0.3em]">
            <Link to="#" className="hover:text-white transition-colors duration-500">Privacy</Link>
            <Link to="#" className="hover:text-white transition-colors duration-500">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
