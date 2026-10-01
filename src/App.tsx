import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Phone, Calendar } from 'lucide-react';
import { HOTEL_INFO } from './data/hotelData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [selectedBookingRoomId, setSelectedBookingRoomId] = useState<string | undefined>(undefined);

  // Sync browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
  };

  const handleOpenBooking = (roomId?: string) => {
    setSelectedBookingRoomId(roomId);
    setBookingModalOpen(true);
  };

  // Render Page based on path
  const renderPage = () => {
    switch (currentPath) {
      case '/rooms':
        return <RoomsPage onOpenBooking={handleOpenBooking} />;
      case '/about':
        return <AboutPage navigate={navigate} onOpenBooking={() => handleOpenBooking()} />;
      case '/contact':
        return <ContactPage />;
      case '/':
      default:
        return <HomePage navigate={navigate} onOpenBooking={handleOpenBooking} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6] font-sans selection:bg-[#C5A059] selection:text-white">
      
      {/* Sticky Header Navigation */}
      <Navbar
        currentPath={currentPath}
        navigate={navigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Page View */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Global Footer */}
      <Footer
        navigate={navigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedRoomId={selectedBookingRoomId}
      />

      {/* Floating Mobile Quick Action Bar */}
      <div className="fixed bottom-4 right-4 z-40 sm:hidden flex items-center gap-2">
        <a
          href={`tel:${HOTEL_INFO.phoneRaw}`}
          className="bg-[#1E0E32] text-[#C084FC] p-3.5 rounded-full shadow-2xl border border-purple-500/40 flex items-center justify-center active:scale-95"
          aria-label="Call Güner Hotel"
        >
          <Phone className="w-5 h-5" />
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="bg-[#8B5CF6] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-5 rounded-full shadow-2xl flex items-center gap-2 active:scale-95 cursor-pointer border border-purple-300/30"
        >
          <Calendar className="w-4 h-4 text-purple-200" />
          <span>Book Stay</span>
        </button>
      </div>

    </div>
  );
}
