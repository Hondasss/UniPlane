import { Airport, Flight, FlightType, AircraftType, Employee, Passenger, Booking } from './types';

export const airports: Airport[] = [
  { code: 'GRU', name: 'Aeroporto Internacional de Guarulhos', city: 'São Paulo', state: 'SP', country: 'Brasil' },
  { code: 'GIG', name: 'Aeroporto Internacional do Galeão', city: 'Rio de Janeiro', state: 'RJ', country: 'Brasil' },
  { code: 'BSB', name: 'Aeroporto Internacional de Brasília', city: 'Brasília', state: 'DF', country: 'Brasil' },
  { code: 'SSA', name: 'Aeroporto Internacional de Salvador', city: 'Salvador', state: 'BA', country: 'Brasil' },
  { code: 'FOR', name: 'Aeroporto Internacional de Fortaleza', city: 'Fortaleza', state: 'CE', country: 'Brasil' },
  { code: 'REC', name: 'Aeroporto Internacional do Recife', city: 'Recife', state: 'PE', country: 'Brasil' },
  { code: 'POA', name: 'Aeroporto Internacional Salgado Filho', city: 'Porto Alegre', state: 'RS', country: 'Brasil' },
  { code: 'CNF', name: 'Aeroporto Internacional de Confins', city: 'Belo Horizonte', state: 'MG', country: 'Brasil' },
  { code: 'CWB', name: 'Aeroporto Internacional Afonso Pena', city: 'Curitiba', state: 'PR', country: 'Brasil' },
  { code: 'MAO', name: 'Aeroporto Internacional Eduardo Gomes', city: 'Manaus', state: 'AM', country: 'Brasil' },
];

export const flightTypes: FlightType[] = [
  { id: '1', abbreviation: 'DOM', description: 'Voo Doméstico' },
  { id: '2', abbreviation: 'INT', description: 'Voo Internacional' },
  { id: '3', abbreviation: 'FRT', description: 'Voo Fretado' },
];

export const aircraftTypes: AircraftType[] = [
  {
    id: '1',
    type: 'Boeing 737-800',
    description: 'Aeronave de médio porte',
    totalSeats: 189,
    seatMap: {
      rows: 32,
      columns: ['A', 'B', 'C', 'D', 'E', 'F'],
      layout: '3-3'
    }
  },
  {
    id: '2',
    type: 'Airbus A320',
    description: 'Aeronave de médio porte',
    totalSeats: 180,
    seatMap: {
      rows: 30,
      columns: ['A', 'B', 'C', 'D', 'E', 'F'],
      layout: '3-3'
    }
  },
  {
    id: '3',
    type: 'Embraer E195',
    description: 'Aeronave de pequeno porte',
    totalSeats: 124,
    seatMap: {
      rows: 31,
      columns: ['A', 'B', 'C', 'D'],
      layout: '2-2'
    }
  },
];

export const employees: Employee[] = [
  { id: '1', name: 'Carlos Silva', birthDate: '1980-05-15', phone: '11987654321', email: 'carlos@airline.com', category: 'pilot' },
  { id: '2', name: 'Ana Santos', birthDate: '1985-08-22', phone: '11987654322', email: 'ana@airline.com', category: 'pilot' },
  { id: '3', name: 'João Oliveira', birthDate: '1982-03-10', phone: '11987654323', email: 'joao@airline.com', category: 'copilot' },
  { id: '4', name: 'Maria Costa', birthDate: '1990-11-30', phone: '11987654324', email: 'maria@airline.com', category: 'flight_attendant' },
  { id: '5', name: 'Pedro Ferreira', birthDate: '1988-07-18', phone: '11987654325', email: 'pedro@airline.com', category: 'flight_attendant' },
];

export const flights: Flight[] = [
  {
    id: '1',
    flightNumber: 'LA4001',
    flightTypeId: '1',
    aircraftTypeId: '1',
    origin: 'GRU',
    destination: 'GIG',
    stopovers: [],
    departureTime: '08:00',
    arrivalTime: '09:15',
    duration: 75,
    crew: { pilot: '1', copilot: '3', attendants: ['4', '5'] },
    price: 450,
    date: '2025-10-30'
  },
  {
    id: '2',
    flightNumber: 'LA4002',
    flightTypeId: '1',
    aircraftTypeId: '2',
    origin: 'GRU',
    destination: 'BSB',
    stopovers: [],
    departureTime: '10:30',
    arrivalTime: '12:15',
    duration: 105,
    crew: { pilot: '2', copilot: '3', attendants: ['4', '5'] },
    price: 520,
    date: '2025-10-30'
  },
  {
    id: '3',
    flightNumber: 'LA4003',
    flightTypeId: '1',
    aircraftTypeId: '3',
    origin: 'GIG',
    destination: 'SSA',
    stopovers: [],
    departureTime: '14:00',
    arrivalTime: '16:30',
    duration: 150,
    crew: { pilot: '1', copilot: '3', attendants: ['4'] },
    price: 680,
    date: '2025-10-30'
  },
  {
    id: '4',
    flightNumber: 'LA4004',
    flightTypeId: '1',
    aircraftTypeId: '1',
    origin: 'GRU',
    destination: 'FOR',
    stopovers: [{ airport: 'REC', arrivalTime: '16:00', departureTime: '16:30' }],
    departureTime: '13:00',
    arrivalTime: '17:45',
    duration: 285,
    crew: { pilot: '2', copilot: '3', attendants: ['4', '5'] },
    price: 750,
    date: '2025-10-31'
  },
  {
    id: '5',
    flightNumber: 'LA4005',
    flightTypeId: '1',
    aircraftTypeId: '2',
    origin: 'BSB',
    destination: 'POA',
    stopovers: [],
    departureTime: '15:30',
    arrivalTime: '17:45',
    duration: 135,
    crew: { pilot: '1', copilot: '3', attendants: ['4'] },
    price: 590,
    date: '2025-10-31'
  },
  {
    id: '6',
    flightNumber: 'LA4006',
    flightTypeId: '1',
    aircraftTypeId: '1',
    origin: 'GRU',
    destination: 'CNF',
    stopovers: [],
    departureTime: '07:00',
    arrivalTime: '08:15',
    duration: 75,
    crew: { pilot: '2', copilot: '3', attendants: ['4', '5'] },
    price: 420,
    date: '2025-11-01'
  },
  {
    id: '7',
    flightNumber: 'LA4007',
    flightTypeId: '1',
    aircraftTypeId: '3',
    origin: 'GRU',
    destination: 'CWB',
    stopovers: [],
    departureTime: '09:30',
    arrivalTime: '10:30',
    duration: 60,
    crew: { pilot: '1', copilot: '3', attendants: ['4'] },
    price: 380,
    date: '2025-11-01'
  },
  {
    id: '8',
    flightNumber: 'LA4008',
    flightTypeId: '1',
    aircraftTypeId: '2',
    origin: 'GIG',
    destination: 'MAO',
    stopovers: [{ airport: 'BSB', arrivalTime: '12:00', departureTime: '12:45' }],
    departureTime: '10:00',
    arrivalTime: '15:30',
    duration: 330,
    crew: { pilot: '2', copilot: '3', attendants: ['4', '5'] },
    price: 980,
    date: '2025-11-02'
  },
];

// Mock occupied seats for each flight
export const occupiedSeats: Record<string, string[]> = {
  '1': ['1A', '1B', '2C', '3D', '5E', '5F', '8A', '10B'],
  '2': ['2A', '2B', '4C', '6D', '7E'],
  '3': ['1A', '3B', '5C', '7D'],
  '4': ['3A', '3B', '5C', '8D', '9E', '9F'],
  '5': ['1A', '2B', '4C'],
  '6': ['2A', '4B', '6C'],
  '7': ['1A', '1B'],
  '8': ['3A', '5B', '7C', '9D'],
};

// Mock user data
export const mockPassenger: Passenger = {
  id: 'p1',
  name: 'João da Silva',
  email: 'joao@email.com',
  username: 'joao.silva',
  password: 'senha123',
  address: {
    street: 'Rua das Flores, 123',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01234-567'
  },
  phones: {
    mobile: '11987654321',
    home: '1133334444'
  },
  workplace: 'Empresa ABC',
  workAddress: 'Av. Paulista, 1000',
  birthDate: '1990-05-15',
  cpf: '123.456.789-00',
  rg: {
    number: '12.345.678-9',
    issueDate: '2010-01-15',
    issuer: 'SSP/SP'
  }
};

export const mockBookings: Booking[] = [];
