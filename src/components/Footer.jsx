import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-padel-base pt-32 pb-10 relative overflow-hidden border-t border-white/5">
      <div className="bg-noise"></div>
      
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-32">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link to="/" className="flex items-center group mb-8" aria-label="XPARK Home">
              <img 
                src="/padel.png" 
                alt="XPARK Logo" 
                className="h-28 md:h-36 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </Link>
            <p className="text-gray-500 font-inter text-xs leading-[2] max-w-sm uppercase tracking-widest">
              The apex of professional padel in the United Arab Emirates. Where architectural mastery meets athletic supremacy.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-cinzel text-white mb-8 uppercase tracking-[0.2em] text-sm">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Padel Courts Location', path: '/courts' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-500 text-xs font-inter uppercase tracking-[0.2em] hover:text-white transition-colors duration-500"
                  >
                    {item.name}
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
