// Type definitions for the Flight System

export interface Airport {
  code: string;
  name: string;
  city: string;
  state: string;
  country: string;
}

export interface AircraftType {
  id: string;
  type: string;
  description: string;
  totalSeats: number;
  seatMap: SeatMap;
}

export interface SeatMap {
  rows: number;
  columns: string[];
  layout: string; // e.g., "3-3" for 3 seats, aisle, 3 seats
}

export interface Aircraft {
  id: string;
  number: string;
  typeId: string;
}

export interface Employee {
  id: string;
  name: string;
  birthDate: string;
  phone: string;
  email: string;
  category: 'pilot' | 'copilot' | 'flight_attendant' | 'service';
}

export interface FlightType {
  id: string;
  abbreviation: string;
  description: string;
}

export interface Flight {
  id: string;
  flightNumber: string;
  flightTypeId: string;
  aircraftTypeId: string;
  origin: string;
  destination: string;
  stopovers: Stopover[];
  departureTime: string;
  arrivalTime: string;
  duration: number; // in minutes
  crew: {
    pilot: string;
    copilot: string;
    attendants: string[];
  };
  price: number;
  date: string;
}

export interface Stopover {
  airport: string;
  arrivalTime: string;
  departureTime: string;
}

export interface Passenger {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  phones: {
    home?: string;
    mobile: string;
  };
  workplace?: string;
  workAddress?: string;
  birthDate: string;
  cpf: string;
  rg: {
    number: string;
    issueDate: string;
    issuer: string;
  };
}

export interface Booking {
  id: string;
  reservationNumber: string;
  passengerId: string;
  flightId: string;
  passengers: BookingPassenger[];
  seats: string[];
  totalAmount: number;
  paymentMethod: 'credit_card' | 'bank_slip';
  paymentStatus: 'pending' | 'confirmed' | 'cancelled';
  bookingDate: string;
  paymentDetails?: {
    cardType?: string;
    cardNumber?: string;
    expiryDate?: string;
    bankSlipDueDate?: string;
  };
}

export interface BookingPassenger {
  name: string;
  seat: string;
}

export interface User {
  type: 'passenger' | 'admin';
  id: string;
  name: string;
  email: string;
}
