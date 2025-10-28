'use client';

import * as React from 'react';
import { Flight } from '@/lib/types';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface SeatSelectionProps {
  flight: Flight;
  numPassengers: number;
  onConfirm: (seats: string[]) => void;
  onCancel: () => void;
}

export function SeatSelection({ flight, numPassengers, onConfirm, onCancel }: SeatSelectionProps) {
  const [selectedSeats, setSelectedSeats] = React.useState<string[]>([]);

  const handleSeatClick = (seat: string) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else if (selectedSeats.length < numPassengers) {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleConfirm = () => {
    if (selectedSeats.length === numPassengers) {
      onConfirm(selectedSeats);
    }
  };

  // Generate mock seats (rows A-E, columns 1-6)
  const rows = ['A', 'B', 'C', 'D', 'E'];
  const cols = Array.from({ length: 6 }, (_, i) => i + 1);
  const allSeats = rows.flatMap((row) => cols.map((col) => `${row}${col}`));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Seleção de Assentos - Voo {flight.flightNumber}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Selecione {numPassengers} assento(s)
        </p>
        <div className="bg-muted p-6 rounded">
          <div className="grid grid-cols-6 gap-2 max-w-xs mx-auto">
            {allSeats.map((seat) => (
              <button
                key={seat}
                onClick={() => handleSeatClick(seat)}
                className={`p-2 rounded text-sm font-semibold transition-colors ${
                  selectedSeats.includes(seat)
                    ? 'bg-primary text-white'
                    : 'bg-white border border-border hover:bg-accent'
                }`}
              >
                {seat}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-4 justify-end">
          <Button variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
          <Button onClick={handleConfirm} disabled={selectedSeats.length !== numPassengers}>
            Confirmar Assentos ({selectedSeats.length}/{numPassengers})
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
