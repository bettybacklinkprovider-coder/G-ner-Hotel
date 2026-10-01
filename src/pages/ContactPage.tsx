import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  CheckCircle2,
  Calendar,
  Send,
  Navigation,
  Sparkles,
  Car,
  Plane,
  Ship
} from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [checkOut, setCheckOut] = useState(() => {
    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 3);
    return dayAfter.toISOString().split('T')[0];
  });
  const [guests, setGuests] = useState('2');
  const [roomType, setRoomType] = useState('standard-room');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  const selectedRoom = ROOMS_DATA.find((r) => r.id === roomType) || ROOMS_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'GH-' + Math.floor(100000 + Math.random() * 900000);
    setRefCode(code);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF5FF]">
      
      {/* Hero Section */}
      <section className="relative py-28 bg-[#1E0E32] text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4 pt-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C084FC] uppercase block font-sans">
            GET IN TOUCH
          </span>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold tracking-tight">
            Contact & Booking
          </h1>
          <p className="text-purple-200 max-w-2xl mx-auto text-sm sm:text-base font-light">
            We are at your service 24 hours a day, 7 days a week. Book your stay or ask us any questions regarding your visit to Bursa.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-xl shadow-xl border border-[#E9D5FF] space-y-6">
            <div>
              <span className="text-[11px] font-mono text-[#9333EA] uppercase tracking-widest font-bold">
                DIRECT RESERVATION & INQUIRY
              </span>
              <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-purple-950 mt-1">
                Book Your Reservation Request
              </h2>
              <p className="text-xs text-purple-900/80 mt-1 font-sans">
                Fill out your details below. Our reception team will confirm your room availability promptly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 bg-[#F3E8FF] border border-[#C084FC]/40 rounded-lg text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-[#3B0764] text-[#C084FC] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="bg-[#1E0E32] text-[#C084FC] font-mono text-xs px-3 py-1 rounded uppercase font-bold inline-block">
                    CONFIRMATION REF: {refCode}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-purple-950 mt-3">
                    Reservation Request Received!
                  </h3>
                  <p className="text-xs text-purple-900/80 mt-2 max-w-md mx-auto leading-relaxed font-sans">
                    Thank you, <strong>{fullName}</strong>. We have received your booking request for <strong>{selectedRoom.name}</strong> from {checkIn} to {checkOut}.
                  </p>
                </div>

                <div className="p-4 bg-white rounded border border-purple-200 text-left text-xs space-y-1.5 max-w-sm mx-auto">
                  <div className="flex justify-between">
                    <span className="text-purple-700">Guest Phone:</span>
                    <span className="font-mono font-bold text-purple-950">{phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-700">Email:</span>
                    <span className="font-semibold text-purple-950">{email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-700">Guests:</span>
                    <span className="font-semibold text-purple-950">{guests} Person(s)</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`tel:${HOTEL_INFO.phoneRaw}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#581C87] hover:bg-[#4c1d95] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#C084FC]" />
                    <span>Call Desk +90 530 377 7516</span>
                  </a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-900 text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-purple-950 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mehmet Kaya"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#FAF5FF] border border-purple-300 rounded px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-[#9333EA] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-purple-950 uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+90 530 377 7516"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#FAF5FF] border border-purple-300 rounded px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-[#9333EA] focus:outline-none font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-purple-950 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. user@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#FAF5FF] border border-purple-300 rounded px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-[#9333EA] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-purple-950 uppercase mb-1">
                      Room Type
                    </label>
                    <select
                      value={roomType}
                      onChange={(e) => setRoomType(e.target.value)}
                      className="w-full bg-[#FAF5FF] border border-purple-300 rounded px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-[#9333EA] focus:outline-none font-medium"
                    >
                      {ROOMS_DATA.map((r) => (
                        <option key={r.id} value={r.id}>
                          {r.name} ({r.pricePerNight} / night)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#F3E8FF] p-4 rounded border border-[#E9D5FF]">
                  <div>
                    <label className="block text-[11px] font-semibold text-purple-950 uppercase mb-1">
                      Check-in Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-white border border-purple-300 rounded px-3 py-2 text-xs focus:ring-1 focus:ring-[#9333EA] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-purple-950 uppercase mb-1">
                      Check-out Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-white border border-purple-300 rounded px-3 py-2 text-xs focus:ring-1 focus:ring-[#9333EA] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-purple-950 uppercase mb-1">
                      Number of Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-white border border-purple-300 rounded px-3 py-2 text-xs focus:ring-1 focus:ring-[#9333EA] focus:outline-none"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-purple-950 uppercase mb-1">
                    Special Requests & Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Let us know if you require early check-in, late arrival, twin bed configuration, or local transfer assistance..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#FAF5FF] border border-purple-300 rounded px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-[#9333EA] focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#9333EA] hover:bg-[#7e22ce] text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Booking Request</span>
                </button>

                <div className="text-center text-[11px] text-purple-800">
                  Instant confirmation support available by phone at <strong>+90 530 377 7516</strong>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Hotel Contact Info & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Info Card */}
            <div className="bg-[#1E0E32] text-white p-8 rounded-xl shadow-xl border border-purple-900/80 space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] tracking-[0.25em] text-[#C084FC] uppercase font-mono font-bold">
                  HOTEL INFORMATION
                </span>
                <h3 className="font-serif-display text-2xl font-bold">
                  Güner Hotel Bursa
                </h3>
              </div>

              <div className="space-y-4 text-xs font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C084FC] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-purple-200 block mb-0.5 font-sans">Hotel Address:</strong>
                    <span className="text-purple-100 leading-relaxed block">
                      General, Karaağaç, Gn. Şükrü Nailli Cd. No:10, 16360 Yıldırım/Bursa, Türkiye
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-purple-900/60">
                  <Phone className="w-5 h-5 text-[#C084FC] shrink-0" />
                  <div>
                    <strong className="text-purple-200 block mb-0.5 font-sans">Telephone:</strong>
                    <a
                      href={`tel:${HOTEL_INFO.phoneRaw}`}
                      className="font-mono text-white hover:text-[#C084FC] text-sm font-bold"
                    >
                      {HOTEL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-purple-900/60">
                  <Mail className="w-5 h-5 text-[#C084FC] shrink-0" />
                  <div>
                    <strong className="text-purple-200 block mb-0.5 font-sans">Email Contact:</strong>
                    <span className="text-purple-100">{HOTEL_INFO.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-purple-900/60">
                  <Clock className="w-5 h-5 text-[#C084FC] shrink-0" />
                  <div>
                    <strong className="text-purple-200 block mb-0.5 font-sans">Front Desk Hours:</strong>
                    <span className="text-purple-100">24 Hours / 7 Days a Week</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold text-xs uppercase tracking-wider py-3 rounded text-center transition-colors border border-purple-400/30"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now (+90 530 377 7516)</span>
                </a>
              </div>
            </div>

            {/* Interactive Location & Directions Card */}
            <div className="bg-white p-6 rounded-xl border border-purple-200 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-lg font-bold text-purple-950 flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#9333EA]" />
                  <span>Location & Access Guide</span>
                </h4>
                <span className="text-[10px] bg-[#F3E8FF] text-[#581C87] font-mono px-2 py-0.5 rounded font-bold">
                  YILDIRIM
                </span>
              </div>

              {/* Map Container */}
              <div className="relative rounded overflow-hidden border border-purple-200 aspect-[16/9] bg-purple-50 flex items-center justify-center">
                <iframe
                  title="Güner Hotel Bursa Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.887823485!2d29.0669!3d40.1828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca150000000000%3A0x0!2zR2VuZXJhbCwgS2FyYWHEn2HDpywgR24uIMWedWtyw7sgTmFpbGxpIENkLiBObzoxMCwgMTYzNjAgWcSxbGTEsXJ1bS9CdXJzYSwgVMO8cmtpeWU!5e0!3m2!1sen!2str!4v1700000000000!5m2!1sen!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="filter contrast-125 hover:contrast-100 transition-all duration-500"
                ></iframe>
              </div>

              {/* Transit Options */}
              <div className="space-y-2 text-xs text-purple-900/80 pt-1 font-sans">
                <div className="flex items-start gap-2">
                  <Car className="w-4 h-4 text-[#9333EA] shrink-0 mt-0.5" />
                  <span><strong>By Car:</strong> Accessible via Gn. Şükrü Nailli Cd. in Yıldırım with free guest parking.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Plane className="w-4 h-4 text-[#9333EA] shrink-0 mt-0.5" />
                  <span><strong>Airports:</strong> Bursa Yenişehir Airport (45 mins) or Istanbul Sabiha Gökçen (90 mins).</span>
                </div>
                <div className="flex items-start gap-2">
                  <Ship className="w-4 h-4 text-[#9333EA] shrink-0 mt-0.5" />
                  <span><strong>Ferry Port:</strong> Güzelyalı / Mudanya Ferry Terminals (35 mins) connects directly to Istanbul.</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
