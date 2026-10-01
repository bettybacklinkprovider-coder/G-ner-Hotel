import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, CheckCircle2, BedDouble, AlertCircle, Sparkles } from 'lucide-react';
import { ROOMS_DATA, HOTEL_INFO } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedRoomId }) => {
  const [roomId, setRoomId] = useState<string>(selectedRoomId || 'standard-room');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
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
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const currentRoom = ROOMS_DATA.find((r) => r.id === roomId) || ROOMS_DATA[0];

  // Calculate nights
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = Math.max(0, end.getTime() - start.getTime());
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  const estimatedTotal = currentRoom.priceNumeric * nights;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'GH-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF5FF] text-[#1E1B4B] rounded-lg shadow-2xl overflow-hidden border border-[#E9D5FF] my-auto max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#1E0E32] text-white p-5 sm:p-6 flex items-center justify-between border-b border-[#3B1D5F] shrink-0">
          <div>
            <span className="text-[10px] tracking-[0.25em] text-[#C084FC] uppercase block font-sans font-bold">
              RESERVATION REQUEST
            </span>
            <h3 className="font-serif-display text-2xl font-bold tracking-wide">
              Book Your Stay at Güner Hotel
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-purple-300 hover:text-white rounded-full hover:bg-purple-900/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 bg-[#3B0764] text-[#C084FC] rounded-full flex items-center justify-center mx-auto shadow-inner border border-purple-400/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="inline-block bg-[#F3E8FF] border border-[#C084FC]/40 text-[#4C1D95] font-mono text-xs px-3 py-1 rounded font-bold">
                  BOOKING REFERENCE: {bookingRef}
                </span>
                <h4 className="font-serif-display text-2xl font-bold mt-3 text-purple-950">
                  Thank You, {fullName}!
                </h4>
                <p className="text-sm text-purple-900/80 mt-2 max-w-md mx-auto leading-relaxed">
                  Your reservation request for <strong>{currentRoom.name}</strong> ({nights} night{nights > 1 ? 's' : ''}) has been received successfully. Our reception team will contact you shortly to confirm your booking.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-[#F3E8FF] rounded p-4 text-left border border-[#E9D5FF] max-w-md mx-auto text-xs space-y-2">
                <div className="flex justify-between py-1 border-b border-purple-200">
                  <span className="text-purple-700">Room Type:</span>
                  <span className="font-semibold text-purple-950">{currentRoom.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-purple-200">
                  <span className="text-purple-700">Dates:</span>
                  <span className="font-semibold text-purple-950">{checkIn} to {checkOut} ({nights} nights)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-purple-200">
                  <span className="text-purple-700">Guests:</span>
                  <span className="font-semibold text-purple-950">{guests} Guest(s)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-purple-200">
                  <span className="text-purple-700">Phone:</span>
                  <span className="font-semibold text-purple-950 font-mono">{phone}</span>
                </div>
                <div className="flex justify-between pt-1 text-sm font-bold text-[#581C87]">
                  <span>Estimated Total:</span>
                  <span>₺{estimatedTotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#581C87] hover:bg-[#4c1d95] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C084FC]" />
                  <span>Call Reception Now</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-900 text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Room Selection */}
              <div>
                <label className="block text-xs font-semibold text-purple-950 uppercase tracking-wider mb-2">
                  Select Room Accommodation
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {ROOMS_DATA.map((r) => {
                    const isSelected = r.id === roomId;
                    return (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => setRoomId(r.id)}
                        className={`p-3 rounded text-left border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#2E1065] text-white border-[#C084FC] shadow-md'
                            : 'bg-white text-purple-950 border-purple-200 hover:border-[#C084FC]'
                        }`}
                      >
                        <div>
                          <div className="font-serif text-base font-bold">{r.name}</div>
                          <div className={`text-[11px] mt-0.5 ${isSelected ? 'text-purple-200' : 'text-purple-600'}`}>
                            {r.capacity}
                          </div>
                        </div>
                        <div className={`text-xs font-mono font-bold mt-2 ${isSelected ? 'text-[#C084FC]' : 'text-[#6B21A8]'}`}>
                          {r.pricePerNight} / night
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#F3E8FF] p-4 rounded border border-[#E9D5FF]">
                <div>
                  <label className="block text-[11px] font-semibold text-purple-900 uppercase mb-1">
                    Check-in Date
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
                  <label className="block text-[11px] font-semibold text-purple-900 uppercase mb-1">
                    Check-out Date
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
                  <label className="block text-[11px] font-semibold text-purple-900 uppercase mb-1">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-white border border-purple-300 rounded px-3 py-2 text-xs focus:ring-1 focus:ring-[#9333EA] focus:outline-none"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-4">
                <div className="text-xs font-semibold text-purple-900 uppercase tracking-wider border-b border-purple-200 pb-1">
                  Guest Contact Information
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-purple-800 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ahmet Yılmaz"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white border border-purple-300 rounded px-3 py-2 text-xs focus:ring-1 focus:ring-[#9333EA] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-purple-800 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +90 5XX XXX XX XX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-purple-300 rounded px-3 py-2 text-xs focus:ring-1 focus:ring-[#9333EA] focus:outline-none font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-purple-800 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. guest@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-purple-300 rounded px-3 py-2 text-xs focus:ring-1 focus:ring-[#9333EA] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-purple-800 mb-1">
                    Special Requests / Expected Arrival Time
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Quiet room preferred, early check-in request, airport transfer..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-purple-300 rounded px-3 py-2 text-xs focus:ring-1 focus:ring-[#9333EA] focus:outline-none"
                  ></textarea>
                </div>
              </div>

              {/* Price Calculation Bar */}
              <div className="flex items-center justify-between p-4 bg-[#2E1065] text-white rounded border border-[#6B21A8]">
                <div>
                  <div className="text-[10px] text-[#C084FC] uppercase tracking-wider font-sans font-semibold">
                    Estimated Total ({nights} Night{nights > 1 ? 's' : ''})
                  </div>
                  <div className="font-serif text-xl font-bold">
                    ₺{estimatedTotal.toLocaleString()}{' '}
                    <span className="text-xs font-sans font-normal text-purple-200">(Taxes Included)</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-[#9333EA] hover:bg-[#7e22ce] text-white font-bold text-xs uppercase tracking-widest py-3 px-6 rounded transition-all shadow-lg hover:shadow-xl cursor-pointer border border-purple-400/30"
                >
                  Submit Reservation
                </button>
              </div>

              <div className="text-center text-[11px] text-purple-700 flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#9333EA]" />
                <span>No instant payment required. Pay upon check-in at Güner Hotel reception.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
