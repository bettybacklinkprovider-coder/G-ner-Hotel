import React from 'react';
import {
  HeartHandshake,
  MapPin,
  BedDouble,
  Sparkles,
  ShieldCheck,
  Compass,
  Utensils,
  Sun,
  Mountain,
  ArrowRight,
  Calendar,
  Phone
} from 'lucide-react';
import { HOTEL_INFO, HOTEL_IMAGES, BURSA_HIGHLIGHTS } from '../data/hotelData';

interface AboutPageProps {
  navigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate, onOpenBooking }) => {
  return (
    <div className="min-h-screen bg-[#FAF5FF]">
      
      {/* Hero Section */}
      <section className="relative py-28 bg-[#1E0E32] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_IMAGES.welcome}
            alt="Experience Güner Hotel"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E0E32] via-[#1E0E32]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4 pt-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C084FC] uppercase block font-sans">
            OUR STORY & HOSPITALITY
          </span>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold tracking-tight">
            Experience Güner Hotel
          </h1>
          <p className="text-purple-200 max-w-2xl mx-auto text-sm sm:text-base font-light">
            A sanctuary of peace, elegance, and genuine Turkish hospitality in historic Yıldırım, Bursa.
          </p>
        </div>
      </section>

      {/* Main Story & Philosophy */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#9333EA] uppercase block font-sans">
                TRADITIONAL CARE & MODERN ELEGANCE
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-purple-950 leading-tight">
                Authentic Turkish Hospitality in the Heart of Bursa
              </h2>
            </div>

            <p className="text-purple-900/80 text-sm sm:text-base leading-relaxed font-sans">
              At <strong>Güner Hotel</strong>, our philosophy is rooted in the timeless tradition of Turkish hospitality—treating every guest not merely as a visitor, but as a cherished friend. Situated in the historic Yıldırım district, our hotel combines serene contemporary design with the rich cultural backdrop of Bursa.
            </p>

            <p className="text-purple-900/80 text-sm sm:text-base leading-relaxed font-sans">
              From the moment you walk through our reception doors, our dedicated team is committed to making your stay effortless. Whether offering tailored travel advice for exploring Bursa’s ancient Silk Bazaars or ensuring your room is perfectly prepared after a day on Mount Uludağ, we take pride in every detail.
            </p>

            <div className="p-6 bg-[#F3E8FF] rounded-lg border-l-4 border-[#9333EA] space-y-2">
              <p className="font-serif text-lg text-purple-950 italic">
                "Hospitality in Bursa is an art passed through generations. At Güner Hotel, we craft every guest moment with care, comfort, and sincere attention."
              </p>
              <div className="text-xs font-bold uppercase tracking-wider text-[#581C87]">
                — Güner Hotel Reception & Management
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg aspect-[3/4] border border-purple-200">
              <img
                src={HOTEL_IMAGES.welcome}
                alt="Güner Hotel Reception"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg aspect-[3/4] border border-purple-200 mt-8">
              <img
                src={HOTEL_IMAGES.standard}
                alt="Güner Hotel Bedroom"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="py-20 bg-[#F3E8FF] border-y border-[#E9D5FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#9333EA] uppercase block font-sans">
              WHY STAY WITH US
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-purple-950">
              The Güner Hotel Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-white p-8 rounded-lg border border-purple-200 shadow-sm space-y-3">
              <BedDouble className="w-8 h-8 text-[#9333EA]" />
              <h3 className="font-serif text-xl font-bold text-purple-950">
                Comfortable Rooms
              </h3>
              <p className="text-xs text-purple-900/80 leading-relaxed font-sans">
                Quiet acoustic insulation, orthopedic mattresses, crisp linens, and individual climate control in every room.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-purple-200 shadow-sm space-y-3">
              <HeartHandshake className="w-8 h-8 text-[#9333EA]" />
              <h3 className="font-serif text-xl font-bold text-purple-950">
                Warm Hospitality
              </h3>
              <p className="text-xs text-purple-900/80 leading-relaxed font-sans">
                Authentic Turkish tea, personalized city recommendations, and 24-hour attentive reception support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-purple-200 shadow-sm space-y-3">
              <MapPin className="w-8 h-8 text-[#9333EA]" />
              <h3 className="font-serif text-xl font-bold text-purple-950">
                Great Location
              </h3>
              <p className="text-xs text-purple-900/80 leading-relaxed font-sans">
                Centrally located in Yıldırım, Bursa with swift access to central monuments, cable car, and shopping.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-purple-200 shadow-sm space-y-3">
              <Sparkles className="w-8 h-8 text-[#9333EA]" />
              <h3 className="font-serif text-xl font-bold text-purple-950">
                Memorable Stays
              </h3>
              <p className="text-xs text-purple-900/80 leading-relaxed font-sans">
                Immaculate daily housekeeping, serene boutique ambiance, and seamless booking for a worry-free stay.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Discover Bursa - Editorial Deep Dive */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-purple-200 aspect-[4/5]">
              <img
                src={HOTEL_IMAGES.bursa}
                alt="Bursa Türkiye Landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#9333EA] uppercase block font-sans">
                DESTINATION GUIDE
              </span>
              <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-purple-950 leading-tight">
                Discover Bursa — City of History & Nature
              </h2>
            </div>

            <p className="text-purple-900/80 text-sm sm:text-base leading-relaxed font-sans">
              Bursa is one of Türkiye's most enchanting destinations. Nestled at the foot of Mount Uludağ, it offers a unique blend of Ottoman historical heritage, verdant natural landscapes, and famous culinary traditions.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 bg-white rounded border border-purple-200 shadow-sm">
                <Mountain className="w-6 h-6 text-[#9333EA] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base font-bold text-purple-950">Mount Uludağ & Teleferik</h4>
                  <p className="text-xs text-purple-900/80 mt-1 font-sans">
                    Ride Europe's longest cable car route up to Mount Uludağ for winter skiing or summer alpine air.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded border border-purple-200 shadow-sm">
                <Compass className="w-6 h-6 text-[#9333EA] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base font-bold text-purple-950">Ulu Cami & Silk Bazaar (Koza Han)</h4>
                  <p className="text-xs text-purple-900/80 mt-1 font-sans">
                    Explore 14th-century grand architecture and historic silk courtyards filled with traditional tea gardens.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded border border-purple-200 shadow-sm">
                <Utensils className="w-6 h-6 text-[#9333EA] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base font-bold text-purple-950">Iskender Kebab & Thermal Baths</h4>
                  <p className="text-xs text-purple-900/80 mt-1 font-sans">
                    Taste authentic Iskender Kebab with browned butter, and unwind in historic thermal hamam waters.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  navigate('/contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-[#2E1065] hover:bg-[#1E0E32] text-white font-semibold text-xs uppercase tracking-widest py-3.5 px-8 rounded shadow cursor-pointer"
              >
                <span>Plan Your Visit & Contact Us</span>
                <ArrowRight className="w-4 h-4 text-[#C084FC]" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1E0E32] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold">
            Plan Your Stay at Güner Hotel
          </h2>
          <p className="text-purple-200 text-sm max-w-xl mx-auto font-light">
            We invite you to experience the finest comfort and genuine Turkish hospitality in Bursa.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="bg-[#9333EA] hover:bg-[#7e22ce] text-white font-bold text-xs uppercase tracking-widest py-4 px-8 rounded shadow-lg transition-all"
            >
              Book Your Stay Online
            </button>
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 border border-purple-500/50 hover:border-[#C084FC] text-white font-bold text-xs uppercase tracking-widest py-4 px-8 rounded transition-all"
            >
              <Phone className="w-4 h-4 text-[#C084FC]" />
              <span>Call +90 530 377 7516</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
