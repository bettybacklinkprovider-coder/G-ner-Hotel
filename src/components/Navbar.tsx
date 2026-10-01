import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, ChevronRight } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
  onOpenBooking: (roomType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ROOMS', path: '/rooms' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT & BOOKING', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1E0E32]/95 backdrop-blur-md text-white py-3 shadow-xl border-b border-[#3B1D5F]'
            : 'bg-gradient-to-b from-[#180B28]/90 via-[#180B28]/50 to-transparent text-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/');
              }}
              className="group flex flex-col focus:outline-none"
            >
              <span className="font-serif-display text-2xl sm:text-3xl font-bold tracking-wider text-white group-hover:text-[#C084FC] transition-colors">
                GÜNER HOTEL
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#C084FC] uppercase -mt-1 font-sans font-semibold">
                BURSA · TÜRKİYE
              </span>
            </a>

            {/* Zone 2: 4 Nav Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.path);
                    }}
                    className={`text-xs font-semibold tracking-widest transition-colors duration-200 relative py-1 uppercase ${
                      isActive
                        ? 'text-[#C084FC]'
                        : 'text-purple-100 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C084FC] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Call Now & Book Your Stay */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-xs font-medium text-purple-100 hover:text-[#C084FC] transition-colors px-3 py-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C084FC]" />
                <span className="tracking-wide font-mono">{HOTEL_INFO.phone}</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold text-xs tracking-wider uppercase py-2.5 px-5 rounded transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer border border-purple-400/30"
              >
                <Calendar className="w-3.5 h-3.5 text-purple-200" />
                <span>Book Your Stay</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="p-2 text-[#C084FC] hover:text-white sm:hidden"
                title="Call Now"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-purple-100 hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#180B28]/98 backdrop-blur-lg flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#C084FC] font-medium border-b border-purple-900/60 pb-2">
              Navigation
            </div>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.path);
                    }}
                    className={`flex items-center justify-between text-lg font-serif tracking-wider uppercase py-2 border-b border-purple-900/40 ${
                      isActive ? 'text-[#C084FC] font-semibold' : 'text-purple-100 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#C084FC]" />
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-purple-900/60">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded border border-[#C084FC]/40 text-[#C084FC] font-medium text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call +90 530 377 7516</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold text-sm tracking-wider uppercase py-3 px-4 rounded text-center transition-all shadow-lg"
            >
              Book Your Stay
            </button>

            <div className="text-center text-xs text-purple-300/60 font-sans">
              Yıldırım, Bursa, Türkiye
            </div>
          </div>
        </div>
      )}
    </>
  );
};
