import React from 'react';
import { Phone, MapPin, Mail, ChevronRight, Clock, ShieldCheck } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FooterProps {
  navigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate, onOpenBooking }) => {
  const handleNav = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#140824] text-purple-200 pt-16 pb-8 border-t border-[#2A1248]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-purple-900/40">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/');
              }}
              className="inline-block"
            >
              <span className="font-serif-display text-2xl font-bold tracking-wider text-white block">
                GÜNER HOTEL
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#C084FC] uppercase block -mt-1 font-sans font-semibold">
                BURSA · TÜRKİYE
              </span>
            </a>
            <p className="text-xs text-purple-200/70 leading-relaxed">
              Modern boutique hospitality in historical Yıldırım, Bursa. Experience ultimate guest comfort, elegant rooms, and genuine Turkish care.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#C084FC]">
              <ShieldCheck className="w-4 h-4" />
              <span>Best Direct Booking Guarantee</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-widest text-[#C084FC] uppercase font-sans">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="/"
                  onClick={(e) => { e.preventDefault(); handleNav('/'); }}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#C084FC]" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="/rooms"
                  onClick={(e) => { e.preventDefault(); handleNav('/rooms'); }}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#C084FC]" />
                  <span>Rooms & Comfort</span>
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => { e.preventDefault(); handleNav('/about'); }}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#C084FC]" />
                  <span>About & Experience</span>
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); handleNav('/contact'); }}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#C084FC]" />
                  <span>Contact & Booking</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Accommodations */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-widest text-[#C084FC] uppercase font-sans">
              Room Categories
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="/rooms"
                  onClick={(e) => { e.preventDefault(); handleNav('/rooms'); }}
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Standard Room</span>
                  <span className="text-purple-300/60 text-[11px] group-hover:text-[#C084FC]">24 m²</span>
                </a>
              </li>
              <li>
                <a
                  href="/rooms"
                  onClick={(e) => { e.preventDefault(); handleNav('/rooms'); }}
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Deluxe Room</span>
                  <span className="text-purple-300/60 text-[11px] group-hover:text-[#C084FC]">32 m²</span>
                </a>
              </li>
              <li>
                <a
                  href="/rooms"
                  onClick={(e) => { e.preventDefault(); handleNav('/rooms'); }}
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Family Room</span>
                  <span className="text-purple-300/60 text-[11px] group-hover:text-[#C084FC]">42 m²</span>
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="text-xs text-[#C084FC] hover:underline flex items-center gap-1"
              >
                <span>Reserve your preferred room &rarr;</span>
              </button>
            </div>
          </div>

          {/* Col 4: Direct Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-widest text-[#C084FC] uppercase font-sans">
              Contact & Address
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C084FC] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-purple-100/90">
                  {HOTEL_INFO.address.full}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C084FC] shrink-0" />
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="font-mono text-white hover:text-[#C084FC] transition-colors"
                >
                  {HOTEL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C084FC] shrink-0" />
                <span>{HOTEL_INFO.email}</span>
              </li>
              <li className="flex items-center gap-3 text-purple-300/70 text-[11px]">
                <Clock className="w-4 h-4 text-[#C084FC] shrink-0" />
                <span>Check-in: {HOTEL_INFO.checkIn} · Check-out: {HOTEL_INFO.checkOut}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300/60">
          <div>
            &copy; {new Date().getFullYear()} <span className="text-purple-100 font-medium">Güner Hotel</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <span>Yıldırım / Bursa, Türkiye</span>
            <span>·</span>
            <span>Turkish Hospitality Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
