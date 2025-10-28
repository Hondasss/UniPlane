'use client';

import { Flight } from '@/lib/types';
import { airports, flightTypes } from '@/lib/mockData';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Plane, Clock } from 'lucide-react';

interface FlightResultsProps {
  flights: Flight[];
  onSelectFlight: (flight: Flight) => void;
}

export function FlightResults({ flights, onSelectFlight }: FlightResultsProps) {
  const getAirportName = (code: string) => {
    const airport = airports.find((a) => a.code === code);
    return airport ? `${airport.city} (${airport.code})` : code;
  };

  const getFlightType = (id: string) => {
    return flightTypes.find((ft) => ft.id === id)?.abbreviation || '';
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}min`;
  };

  if (flights.length === 0) {
    return (
      <div className="text-center py-12">
        <Plane className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
        <h3>Nenhum voo encontrado</h3>
        <p className="text-muted-foreground">Tente ajustar os critérios de busca</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-xl">Voos Disponíveis ({flights.length})</h2>
      {flights.map((flight) => (
        <Card key={flight.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold">Voo {flight.flightNumber}</h3>
                  <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
                    {getFlightType(flight.flightTypeId)}
                  </span>
                </div>

                <div className="flex items-center gap-8">
                  <div>
                    <p className="text-muted-foreground text-sm">Origem</p>
                    <p className="font-medium">{getAirportName(flight.origin)}</p>
                    <p className="text-sm">{flight.departureTime}</p>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-px bg-border flex-1 w-16" />
                    <Plane className="w-4 h-4" />
                    <div className="h-px bg-border flex-1 w-16" />
                  </div>

                  <div>
                    <p className="text-muted-foreground text-sm">Destino</p>
                    <p className="font-medium">{getAirportName(flight.destination)}</p>
                    <p className="text-sm">{flight.arrivalTime}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Duração: {formatDuration(flight.duration)}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <p className="text-2xl font-bold text-primary mb-4">R$ {flight.price.toFixed(2)}</p>
                <Button onClick={() => onSelectFlight(flight)}>Selecionar</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
