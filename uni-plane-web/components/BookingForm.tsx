'use client';

import * as React from 'react';
import { Flight } from '@/lib/types';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export interface BookingData {
  passengers: Array<{ name: string; seat: string }>;
  paymentMethod: 'credit_card' | 'bank_slip';
  paymentDetails?: {
    cardType?: string;
    cardNumber?: string;
    expiryDate?: string;
    bankSlipDueDate?: string;
  };
}

interface BookingFormProps {
  flight: Flight;
  seats: string[];
  onConfirm: (data: BookingData) => void;
  onCancel: () => void;
}

export function BookingForm({ flight, seats, onConfirm, onCancel }: BookingFormProps) {
  const [paymentMethod, setPaymentMethod] = React.useState<'credit_card' | 'bank_slip'>('credit_card');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const passengers = seats.map((seat) => ({
      name: 'Passageiro', // Simplified for now
      seat,
    }));

    onConfirm({
      passengers,
      paymentMethod,
      paymentDetails: {},
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dados da Reserva - Voo {flight.flightNumber}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-muted p-4 rounded mb-6">
            <p className="text-sm text-muted-foreground mb-2">Resumo da Reserva:</p>
            <p className="font-semibold">{flight.origin} → {flight.destination}</p>
            <p className="text-sm">Assentos: {seats.join(', ')}</p>
            <p className="text-sm">Total: R$ {(flight.price * seats.length).toFixed(2)}</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="payment">Método de Pagamento</Label>
            <Select value={paymentMethod} onValueChange={(value: any) => setPaymentMethod(value)}>
              <SelectTrigger id="payment">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="credit_card">Cartão de Crédito</SelectItem>
                <SelectItem value="bank_slip">Boleto Bancário</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-4 justify-end">
            <Button type="button" variant="outline" onClick={onCancel}>
              Voltar
            </Button>
            <Button type="submit">Confirmar Reserva</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
