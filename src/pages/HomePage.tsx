import React from 'react';
import {
  Phone,
  Calendar,
  ArrowRight,
  BedDouble,
  HeartHandshake,
  MapPin,
  Sparkles,
  CheckCircle,
  Wifi,
  Coffee,
  Tv,
  Clock,
  Car,
  Compass
} from 'lucide-react';
import { ROOMS_DATA, HOTEL_INFO, HOTEL_IMAGES, BURSA_HIGHLIGHTS, EXPERIENCE_FEATURES } from '../data/hotelData';

interface HomePageProps {
  navigate: (path: string) => void;
  onOpenBooking: (roomId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate, onOpenBooking }) => {
  return (
    <div className="min-h-screen bg-[#FAF5FF]">
      
      {/* ==================================================
          SECTION 1 — HERO
          ================================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Deep Purple Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_IMAGES.hero}
            alt="Güner Hotel Exterior Bursa"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140824] via-[#1E0E32]/80 to-black/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20 space-y-8 animate-in fade-in zoom-in-95 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A855F7]/25 border border-[#C084FC]/40 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#E9D5FF]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E9D5FF] font-semibold font-sans">
              Boutique Hotel in Yıldırım, Bursa
            </span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] max-w-4xl mx-auto drop-shadow-md">
            Welcome to Güner Hotel
          </h1>

          <p className="text-base sm:text-xl text-purple-100 font-light max-w-2xl mx-auto leading-relaxed font-sans">
            Comfort, Elegance & Authentic Turkish Hospitality in Bursa
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold text-xs sm:text-sm uppercase tracking-widest py-4 px-8 rounded transition-all shadow-xl hover:shadow-2xl active:scale-95 cursor-pointer border border-purple-400/30"
            >
              <Calendar className="w-4 h-4 text-purple-200" />
              <span>Book Your Stay</span>
            </button>

            <button
              onClick={() => {
                navigate('/rooms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2E1065]/80 hover:bg-[#1E0E32] text-white border border-purple-500/40 font-semibold text-xs sm:text-sm uppercase tracking-widest py-4 px-8 rounded backdrop-blur-md transition-all cursor-pointer"
            >
              <span>Explore Rooms</span>
              <ArrowRight className="w-4 h-4 text-[#C084FC]" />
            </button>
          </div>

          {/* Quick Info Strip */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-purple-900/50 text-left text-xs">
            <div className="p-3 bg-[#180B28]/60 backdrop-blur-sm rounded border border-purple-900/60">
              <span className="text-[#C084FC] block font-mono text-[11px] uppercase font-bold">Location</span>
              <span className="font-medium text-white block mt-0.5">Yıldırım / Bursa</span>
            </div>
            <div className="p-3 bg-[#180B28]/60 backdrop-blur-sm rounded border border-purple-900/60">
              <span className="text-[#C084FC] block font-mono text-[11px] uppercase font-bold">Direct Phone</span>
              <span className="font-medium text-white block mt-0.5 font-mono">{HOTEL_INFO.phone}</span>
            </div>
            <div className="p-3 bg-[#180B28]/60 backdrop-blur-sm rounded border border-purple-900/60">
              <span className="text-[#C084FC] block font-mono text-[11px] uppercase font-bold">Front Desk</span>
              <span className="font-medium text-white block mt-0.5">24/7 Service</span>
            </div>
            <div className="p-3 bg-[#180B28]/60 backdrop-blur-sm rounded border border-purple-900/60">
              <span className="text-[#C084FC] block font-mono text-[11px] uppercase font-bold">Wi-Fi & Parking</span>
              <span className="font-medium text-white block mt-0.5">Free For Guests</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 2 — WELCOME / INTRODUCTION
          ================================================== */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Hotel Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-purple-200/80 aspect-[4/3]">
              <img
                src={HOTEL_IMAGES.welcome}
                alt="Güner Hotel Reception & Hospitality"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E1065]/50 via-transparent to-transparent" />
            </div>

            {/* Accent Floating Badge */}
            <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-right-6 bg-[#1E0E32] text-white p-6 rounded-lg shadow-2xl border border-[#C084FC]/40 max-w-xs hidden sm:block">
              <div className="text-3xl font-serif font-bold text-[#C084FC]">Bursa, TR</div>
              <div className="text-xs text-purple-200 mt-1">
                Authentic Turkish hospitality in historical Yıldırım district.
              </div>
            </div>
          </div>

          {/* Right Column: Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#9333EA] uppercase font-sans block">
                WELCOME TO GÜNER HOTEL
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-purple-950 leading-tight">
                Your Stay in Bursa, Made Special
              </h2>
            </div>

            <p className="text-purple-900/80 leading-relaxed text-sm sm:text-base font-sans">
              Welcome to <strong>Güner Hotel</strong>, where traditional Turkish warmth meets modern boutique accommodation. Located in the picturesque Karaağaç area of Yıldırım, our hotel offers a peaceful retreat for travelers, families, and business visitors exploring Bursa.
            </p>

            <p className="text-purple-900/80 leading-relaxed text-sm sm:text-base font-sans">
              Whether you are visiting Bursa to explore Ottoman historic landmarks like Ulu Cami, shop at the famous Silk Bazaar, or venture up to Mount Uludağ, Güner Hotel ensures your return is filled with quiet luxury, immaculate cleanliness, and dedicated guest support.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#9333EA] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-purple-950">Prime Location</h4>
                  <p className="text-xs text-purple-700 mt-0.5">Quick access to city landmarks & transport</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#9333EA] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-purple-950">24/7 Front Desk</h4>
                  <p className="text-xs text-purple-700 mt-0.5">Attentive guest care anytime</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  navigate('/about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-[#2E1065] hover:bg-[#1E0E32] text-white font-semibold text-xs tracking-widest uppercase py-3.5 px-7 rounded transition-all shadow-md cursor-pointer"
              >
                <span>Discover Güner Hotel</span>
                <ArrowRight className="w-4 h-4 text-[#C084FC]" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 3 — ROOMS & COMFORT
          ================================================== */}
      <section className="py-20 bg-[#F3E8FF] border-y border-[#E9D5FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#9333EA] uppercase block font-sans">
              ACCOMMODATIONS
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-purple-950">
              Rooms & Comfort
            </h2>
            <p className="text-purple-900/80 text-sm sm:text-base">
              Designed with soothing natural palettes, soundproofing, and premium mattresses for deep, refreshing sleep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS_DATA.map((room) => (
              <div
                key={room.id}
                className="group bg-white rounded-lg overflow-hidden shadow-lg border border-[#E9D5FF] flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  {/* Room Image with Zoom on Hover */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 bg-[#1E0E32]/90 text-[#C084FC] font-mono text-xs font-bold px-3 py-1 rounded backdrop-blur-sm border border-purple-400/40">
                      {room.pricePerNight} / night
                    </div>
                  </div>

                  {/* Room Info */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs text-purple-700 font-sans border-b border-purple-100 pb-2">
                      <span>{room.size}</span>
                      <span>·</span>
                      <span>{room.capacity}</span>
                      <span>·</span>
                      <span>{room.bedInfo}</span>
                    </div>

                    <h3 className="font-serif-display text-2xl font-bold text-purple-950 group-hover:text-[#9333EA] transition-colors">
                      {room.name}
                    </h3>

                    <p className="text-xs text-purple-900/80 leading-relaxed line-clamp-3">
                      {room.shortDescription}
                    </p>

                    {/* Room Highlights */}
                    <div className="space-y-1.5 pt-2">
                      {room.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-purple-900">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <button
                    onClick={() => {
                      navigate('/rooms');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex-1 bg-purple-50 hover:bg-purple-100 text-purple-950 font-semibold text-xs tracking-wider uppercase py-2.5 rounded transition-colors text-center border border-purple-200"
                  >
                    View Room
                  </button>
                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="bg-[#9333EA] hover:bg-[#7e22ce] text-white font-bold text-xs tracking-wider uppercase py-2.5 px-4 rounded transition-colors shadow cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => {
                navigate('/rooms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 border-b-2 border-[#9333EA] text-purple-950 font-semibold text-sm uppercase tracking-wider pb-1 hover:text-[#9333EA] transition-colors cursor-pointer"
            >
              <span>Explore All Accommodations & Amenities</span>
              <ArrowRight className="w-4 h-4 text-[#9333EA]" />
            </button>
          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 4 — HOTEL EXPERIENCE
          ================================================== */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#9333EA] uppercase block font-sans">
            YOUR GÜNER HOTEL EXPERIENCE
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-purple-950">
            Thoughtful Amenities & Services
          </h2>
          <p className="text-purple-900/80 text-sm sm:text-base">
            Every detail is tailored to ensure effortless ease and genuine comfort throughout your stay in Bursa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERIENCE_FEATURES.map((feat) => {
            const Icon = feat.id === 'comfort' ? BedDouble : feat.id === 'hospitality' ? HeartHandshake : feat.id === 'location' ? MapPin : Sparkles;
            return (
              <div
                key={feat.id}
                className="bg-white rounded-xl border border-purple-200/80 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col"
              >
                {/* Feature Image Header with Icon Badge */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={feat.image}
                    alt={feat.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E0E32]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 w-10 h-10 bg-white/95 backdrop-blur-md text-[#581C87] rounded-lg flex items-center justify-center shadow-lg border border-purple-200">
                    <Icon className="w-5 h-5 text-[#9333EA]" />
                  </div>
                </div>

                {/* Feature Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-2 text-left">
                  <div>
                    <span className="text-[10px] font-bold font-mono tracking-wider text-[#9333EA] uppercase block mb-1">
                      {feat.subtitle}
                    </span>
                    <h3 className="font-serif-display text-xl font-bold text-purple-950 group-hover:text-[#9333EA] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-purple-900/80 leading-relaxed mt-2 font-sans">
                      {feat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================================================
          SECTION 5 — DISCOVER BURSA
          ================================================== */}
      <section className="relative py-24 bg-[#140824] text-white overflow-hidden">
        {/* Background Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_IMAGES.bursa}
            alt="Bursa Türkiye Landscape & Uludağ"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#140824] via-[#140824]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#C084FC]/20 border border-[#C084FC]/40 text-[#C084FC] text-xs uppercase tracking-widest font-mono font-semibold">
                <Compass className="w-3.5 h-3.5" />
                <span>CITY EXPLORATION</span>
              </div>

              <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-white leading-tight">
                Discover the Historic Charm of Bursa
              </h2>

              <p className="text-purple-200/90 text-sm sm:text-base leading-relaxed font-sans">
                Known as "Yeşil Bursa" (Green Bursa) and the first major capital of the Ottoman Empire, Bursa is rich in historical treasures, thermal springs, world-renowned silk bazaars, and mountain landscapes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {BURSA_HIGHLIGHTS.map((item) => (
                  <div key={item.id} className="p-4 bg-[#1E0E32]/90 border border-purple-900/60 rounded">
                    <span className="text-[#C084FC] font-mono text-[11px] block uppercase font-semibold">
                      {item.category} · {item.distance}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white mt-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-purple-200/70 mt-1 leading-normal font-sans">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    navigate('/about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold text-xs tracking-widest uppercase py-3.5 px-8 rounded transition-all shadow-lg cursor-pointer border border-purple-400/30"
                >
                  <span>Explore Bursa & Local Guide</span>
                  <ArrowRight className="w-4 h-4 text-purple-200" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#1E0E32]/95 border border-purple-900/80 p-8 rounded-lg space-y-6">
              <h3 className="font-serif-display text-2xl font-bold text-[#C084FC]">
                Why Guests Love Bursa
              </h3>
              
              <ul className="space-y-4 text-xs text-purple-200/90 font-sans">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C084FC]/20 text-[#C084FC] flex items-center justify-center shrink-0 font-bold">1</div>
                  <div>
                    <strong className="text-white block font-serif text-sm">Mount Uludağ Ski & Nature</strong>
                    Top skiing resort in winter and cool pine forest hiking trails during summer.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C084FC]/20 text-[#C084FC] flex items-center justify-center shrink-0 font-bold">2</div>
                  <div>
                    <strong className="text-white block font-serif text-sm">Famous Culinary Heritage</strong>
                    Sample authentic Iskender Kebab at its origin, candied chestnuts (Kestane Şekeri), and fresh Turkish tea.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C084FC]/20 text-[#C084FC] flex items-center justify-center shrink-0 font-bold">3</div>
                  <div>
                    <strong className="text-white block font-serif text-sm">UNESCO Ottoman Landmarks</strong>
                    Wander ancient Silk Bazaars, grand mosques, and preserved timbered villages like Cumalıkızık.
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 6 — CONTACT / BOOKING CTA
          ================================================== */}
      <section className="py-20 sm:py-28 bg-[#FAF5FF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 bg-white p-8 sm:p-14 rounded-2xl shadow-xl border border-[#E9D5FF]">
          
          <div className="inline-block bg-[#F3E8FF] border border-[#C084FC]/40 text-[#581C87] font-mono text-xs px-4 py-1.5 rounded-full uppercase tracking-widest font-bold">
            GÜNER HOTEL · YILDIRIM / BURSA
          </div>

          <div className="space-y-3">
            <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-purple-950">
              Plan Your Stay at Güner Hotel
            </h2>
            <p className="text-purple-900/80 text-sm sm:text-base max-w-2xl mx-auto font-sans">
              Experience comfort and warm Turkish hospitality in Bursa. We look forward to welcoming you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-4 text-xs font-mono text-purple-950">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="flex items-center gap-2 hover:text-[#9333EA] transition-colors p-2 bg-[#FAF5FF] rounded border border-purple-200"
            >
              <Phone className="w-4 h-4 text-[#9333EA]" />
              <span className="font-bold">{HOTEL_INFO.phone}</span>
            </a>

            <div className="flex items-center gap-2 p-2 bg-[#FAF5FF] rounded border border-purple-200 text-purple-900">
              <MapPin className="w-4 h-4 text-[#9333EA]" />
              <span>General, Karaağaç, Gn. Şükrü Nailli Cd. No:10, Yıldırım/Bursa</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#9333EA] hover:bg-[#7e22ce] text-white font-bold text-xs uppercase tracking-widest py-4 px-9 rounded transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
            </button>

            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2E1065] hover:bg-[#1E0E32] text-white font-bold text-xs uppercase tracking-widest py-4 px-9 rounded transition-all shadow cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#C084FC]" />
              <span>Call Now</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
