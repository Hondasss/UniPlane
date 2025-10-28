'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { FlightSearch, SearchCriteria } from '@/components/FlightSearch';
import { FlightResults } from '@/components/FlightResults';
import { SeatSelection } from '@/components/SeatSelection';
import { BookingForm, BookingData } from '@/components/BookingForm';
import { BookingConfirmation } from '@/components/BookingConfirmation';
import { AuthDialog } from '@/components/AuthDialog';
import { AdminPanel } from '@/components/AdminPanel';
import { Flight, User, Booking } from '@/lib/types';
import { flights as mockFlights } from '@/lib/mockData';

type AppView = 'home' | 'results' | 'seat-selection' | 'booking' | 'confirmation' | 'admin';

export default function Home() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [user, setUser] = useState<User | null>(null);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);

  const [searchResults, setSearchResults] = useState<Flight[]>([]);
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [currentBooking, setCurrentBooking] = useState<Booking | null>(null);

  const handleSearch = (criteria: SearchCriteria) => {
    const results = mockFlights.filter(
      (flight) =>
        flight.origin === criteria.origin &&
        flight.destination === criteria.destination &&
        flight.date === criteria.date
    );
    setSearchResults(results);
    setCurrentView('results');
  };

  const handleSelectFlight = (flight: Flight) => {
    if (!user) {
      setAuthDialogOpen(true);
      setSelectedFlight(flight);
      return;
    }
    setSelectedFlight(flight);
    setCurrentView('seat-selection');
  };

  const handleConfirmSeats = (seats: string[]) => {
    setSelectedSeats(seats);
    setCurrentView('booking');
  };

  const handleConfirmBooking = (bookingData: BookingData) => {
    if (!selectedFlight || !user) return;

    const reservationNumber = 'RES' + Date.now().toString().slice(-8);

    const booking: Booking = {
      id: 'book_' + Date.now(),
      reservationNumber,
      passengerId: user.id,
      flightId: selectedFlight.id,
      passengers: bookingData.passengers,
      seats: selectedSeats,
      totalAmount: selectedFlight.price * selectedSeats.length,
      paymentMethod: bookingData.paymentMethod,
      paymentStatus: bookingData.paymentMethod === 'credit_card' ? 'confirmed' : 'pending',
      bookingDate: new Date().toISOString(),
      paymentDetails: bookingData.paymentDetails,
    };

    setCurrentBooking(booking);
    setCurrentView('confirmation');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSearchResults([]);
    setSelectedFlight(null);
    setSelectedSeats([]);
    setCurrentBooking(null);
  };

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
    if (selectedFlight && loggedInUser.type === 'passenger') {
      setCurrentView('seat-selection');
    }
  };

  const handleLogout = () => {
    setUser(null);
    handleBackToHome();
  };

  const handleShowAdminPanel = () => {
    setCurrentView('admin');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header
        user={user}
        onLogin={() => setAuthDialogOpen(true)}
        onLogout={handleLogout}
        onAdminPanel={user?.type === 'admin' ? handleShowAdminPanel : undefined}
      />

      {currentView === 'home' && (
        <main className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <div className="relative h-64 rounded-2xl overflow-hidden mb-8 shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1720876439493-6dbf2fcb0b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHdpbmRvdyUyMGNsb3Vkc3xlbnwxfHx8fDE3NjE0NDM2Mjl8MA&ixlib=rb-4.0.0&q=80&w=1080"
                alt="Airplane view"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8">
                <div className="text-white">
                  <h1 className="text-4xl mb-2 font-bold">Bem-vindo ao SkyFly Airlines</h1>
                  <p className="text-lg">Encontre seu próximo destino</p>
                </div>
              </div>
            </div>

            <FlightSearch onSearch={handleSearch} />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold">Voos Diretos</h3>
              <p className="text-muted-foreground mt-2">
                Rotas diretas para os principais destinos do Brasil
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold">Melhor Preço</h3>
              <p className="text-muted-foreground mt-2">
                Tarifas competitivas e promoções especiais
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold">Reserva Fácil</h3>
              <p className="text-muted-foreground mt-2">
                Sistema simples e seguro de reservas online
              </p>
            </div>
          </div>
        </main>
      )}

      {currentView === 'results' && (
        <main className="container mx-auto px-4 py-8">
          <div className="mb-4">
            <button
              onClick={handleBackToHome}
              className="text-primary hover:underline"
            >
              ← Nova Busca
            </button>
          </div>
          <FlightResults flights={searchResults} onSelectFlight={handleSelectFlight} />
        </main>
      )}

      {currentView === 'seat-selection' && selectedFlight && (
        <main className="container mx-auto px-4 py-8">
          <SeatSelection
            flight={selectedFlight}
            numPassengers={1}
            onConfirm={handleConfirmSeats}
            onCancel={() => setCurrentView('results')}
          />
        </main>
      )}

      {currentView === 'booking' && selectedFlight && (
        <main className="container mx-auto px-4 py-8">
          <BookingForm
            flight={selectedFlight}
            seats={selectedSeats}
            onConfirm={handleConfirmBooking}
            onCancel={() => setCurrentView('seat-selection')}
          />
        </main>
      )}

      {currentView === 'confirmation' && selectedFlight && currentBooking && (
        <main className="container mx-auto px-4 py-8">
          <BookingConfirmation
            flight={selectedFlight}
            reservationNumber={currentBooking.reservationNumber}
            passengers={currentBooking.passengers}
            totalAmount={currentBooking.totalAmount}
            paymentMethod={currentBooking.paymentMethod}
            onClose={handleBackToHome}
          />
        </main>
      )}

      {currentView === 'admin' && user?.type === 'admin' && (
        <main className="container mx-auto px-4 py-8">
          <AdminPanel onBack={handleBackToHome} />
        </main>
      )}

      <AuthDialog
        open={authDialogOpen}
        onClose={() => setAuthDialogOpen(false)}
        onLogin={handleLogin}
      />

      <footer className="border-t mt-16 py-8 bg-white">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 SkyFly Airlines. Sistema de Voos - Todos os direitos reservados.</p>
          <p className="mt-2">Suporte: suporte@skyfly.com | Tel: 0800 123 4567</p>
        </div>
      </footer>
    </div>
  );
}
