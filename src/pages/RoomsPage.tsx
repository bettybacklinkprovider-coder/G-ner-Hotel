import React, { useState } from 'react';
import {
  Wifi,
  Tv,
  Coffee,
  Wind,
  Shield,
  Bath,
  Sparkles,
  Users,
  Maximize,
  Bed,
  CheckCircle2,
  Calendar,
  Phone
} from 'lucide-react';
import { ROOMS_DATA, HOTEL_INFO, HOTEL_IMAGES, Room } from '../data/hotelData';

interface RoomsPageProps {
  onOpenBooking: (roomId?: string) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredRooms = filter === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.category === filter);

  return (
    <div className="min-h-screen bg-[#FAF5FF]">
      
      {/* Rooms Hero */}
      <section className="relative py-28 bg-[#1E0E32] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_IMAGES.hero}
            alt="Güner Hotel Rooms Luxury"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E0E32] via-[#1E0E32]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4 pt-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C084FC] uppercase block font-sans">
            ACCOMMODATIONS & SUITES
          </span>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold tracking-tight">
            Rooms & Comfort
          </h1>
          <p className="text-purple-200 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Every room at Güner Hotel is designed for deep relaxation, featuring orthopedic bedding, quiet soundproofing, and refined Turkish boutique touches.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-lg shadow-lg border border-[#E9D5FF] p-2 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
              filter === 'all'
                ? 'bg-[#2E1065] text-[#C084FC] shadow-sm'
                : 'text-purple-900 hover:text-purple-950 hover:bg-purple-100/60'
            }`}
          >
            All Rooms ({ROOMS_DATA.length})
          </button>
          <button
            onClick={() => setFilter('standard')}
            className={`px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
              filter === 'standard'
                ? 'bg-[#2E1065] text-[#C084FC] shadow-sm'
                : 'text-purple-900 hover:text-purple-950 hover:bg-purple-100/60'
            }`}
          >
            Standard Room
          </button>
          <button
            onClick={() => setFilter('deluxe')}
            className={`px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
              filter === 'deluxe'
                ? 'bg-[#2E1065] text-[#C084FC] shadow-sm'
                : 'text-purple-900 hover:text-purple-950 hover:bg-purple-100/60'
            }`}
          >
            Deluxe Room
          </button>
          <button
            onClick={() => setFilter('family')}
            className={`px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
              filter === 'family'
                ? 'bg-[#2E1065] text-[#C084FC] shadow-sm'
                : 'text-purple-900 hover:text-purple-950 hover:bg-purple-100/60'
            }`}
          >
            Family Room
          </button>
        </div>
      </section>

      {/* Detailed Room Cards List */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredRooms.map((room, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={room.id}
              className="bg-white rounded-xl overflow-hidden shadow-xl border border-[#E9D5FF] grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Image Side */}
              <div
                className={`lg:col-span-7 relative min-h-[320px] lg:min-h-[480px] ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#1E0E32]/90 text-white font-mono text-xs font-bold px-4 py-2 rounded backdrop-blur-md border border-[#C084FC]/40">
                  <span className="text-[#C084FC]">{room.pricePerNight}</span> / NIGHT
                </div>
              </div>

              {/* Content Side */}
              <div
                className={`lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#9333EA] block font-bold">
                      BOUTIQUE ACCOMMODATION
                    </span>
                    <h2 className="font-serif-display text-3xl font-bold text-purple-950 mt-1">
                      {room.name}
                    </h2>
                    <p className="text-xs text-[#581C87] font-semibold italic mt-1">
                      "{room.tagline}"
                    </p>
                  </div>

                  {/* Key specs badge strip */}
                  <div className="grid grid-cols-3 gap-2 py-3 bg-[#F3E8FF] rounded px-3 text-center border border-[#E9D5FF]">
                    <div>
                      <div className="text-[10px] text-purple-700 uppercase font-mono">Room Size</div>
                      <div className="text-xs font-bold text-purple-950 mt-0.5">{room.size}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-purple-700 uppercase font-mono">Max Occupancy</div>
                      <div className="text-xs font-bold text-purple-950 mt-0.5">{room.capacity}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-purple-700 uppercase font-mono">Bed Setup</div>
                      <div className="text-xs font-bold text-purple-950 mt-0.5">{room.bedInfo}</div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-purple-900/80 leading-relaxed font-sans">
                    {room.fullDescription}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-purple-950">
                      Room Features & Highlights
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-purple-900">
                      {room.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#9333EA] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-purple-950 mb-2">
                      Included Amenities
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-purple-50 text-purple-900 px-2.5 py-1 rounded border border-purple-200"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-purple-200 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] text-purple-600 block font-mono">Rate per night</span>
                    <span className="font-serif text-2xl font-bold text-[#581C87]">{room.pricePerNight}</span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="inline-flex items-center gap-2 bg-[#9333EA] hover:bg-[#7e22ce] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book This Room</span>
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Hotel Amenities Grid */}
      <section className="py-20 bg-[#F3E8FF] border-t border-[#E9D5FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#9333EA] uppercase block font-sans">
              STANDARD ACROSS ALL ROOMS
            </span>
            <h2 className="font-serif-display text-3xl font-bold text-purple-950">
              Guaranteed Hotel Standards
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-purple-200 text-center space-y-3">
              <Wifi className="w-6 h-6 text-[#9333EA] mx-auto" />
              <h4 className="text-xs font-bold uppercase text-purple-950">High-Speed Wi-Fi</h4>
              <p className="text-[11px] text-purple-700">Fast wireless internet in all rooms and public spaces</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-purple-200 text-center space-y-3">
              <Wind className="w-6 h-6 text-[#9333EA] mx-auto" />
              <h4 className="text-xs font-bold uppercase text-purple-950">Climate Control</h4>
              <p className="text-[11px] text-purple-700">Individual air conditioning & heating controls</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-purple-200 text-center space-y-3">
              <Bath className="w-6 h-6 text-[#9333EA] mx-auto" />
              <h4 className="text-xs font-bold uppercase text-purple-950">Luxury Bathrooms</h4>
              <p className="text-[11px] text-purple-700">Rain showers, hairdryer, slippers & bath products</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-purple-200 text-center space-y-3">
              <Shield className="w-6 h-6 text-[#9333EA] mx-auto" />
              <h4 className="text-xs font-bold uppercase text-purple-950">Digital Safe</h4>
              <p className="text-[11px] text-purple-700">Secure in-room laptop deposit box for your valuables</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="py-16 bg-[#1E0E32] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold">
            Ready to Reserve Your Stay in Bursa?
          </h2>
          <p className="text-purple-200 text-xs sm:text-sm max-w-xl mx-auto font-light">
            Book directly online or contact our reception desk for immediate confirmation and special room requests.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#9333EA] hover:bg-[#7e22ce] text-white font-bold text-xs uppercase tracking-widest py-3.5 px-8 rounded shadow-lg transition-all"
            >
              Book Your Room Online
            </button>
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 border border-purple-500/50 hover:border-[#C084FC] text-white font-bold text-xs uppercase tracking-widest py-3.5 px-8 rounded transition-all"
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
