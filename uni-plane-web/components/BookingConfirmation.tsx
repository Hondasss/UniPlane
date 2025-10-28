'use client';

import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CheckCircle } from 'lucide-react';
import { BookingPassenger } from '@/lib/types';

interface BookingConfirmationProps {
  flight: { flightNumber: string; origin: string; destination: string };
  reservationNumber: string;
  passengers: BookingPassenger[];
  totalAmount: number;
  paymentMethod: 'credit_card' | 'bank_slip';
  onClose: () => void;
}

export function BookingConfirmation({
  flight,
  reservationNumber,
  passengers,
  totalAmount,
  paymentMethod,
  onClose,
}: BookingConfirmationProps) {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
        <CardTitle>Reserva Confirmada!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-muted p-4 rounded">
          <p className="text-sm text-muted-foreground mb-1">Número de Reserva</p>
          <p className="text-2xl font-bold text-primary">{reservationNumber}</p>
        </div>

        <div className="border-t pt-4">
          <h3 className="font-semibold mb-3">Detalhes do Voo</h3>
          <div className="grid gap-2">
            <p>
              <span className="text-muted-foreground">Voo:</span> {flight.flightNumber}
            </p>
            <p>
              <span className="text-muted-foreground">Rota:</span> {flight.origin} → {flight.destination}
            </p>
            <p>
              <span className="text-muted-foreground">Passageiros:</span> {passengers.length}
            </p>
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="font-semibold mb-3">Assentos</h3>
          <p className="text-sm">{passengers.map((p) => p.seat).join(', ')}</p>
        </div>

        <div className="border-t pt-4 bg-muted p-4 rounded">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Total:</span>
            <span className="text-2xl font-bold text-primary">R$ {totalAmount.toFixed(2)}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Método: {paymentMethod === 'credit_card' ? 'Cartão de Crédito' : 'Boleto Bancário'}
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-4 rounded">
          <p className="text-sm text-blue-900">
            Um e-mail de confirmação será enviado em breve. Por favor, verifique sua caixa de entrada.
          </p>
        </div>

        <Button onClick={onClose} className="w-full">
          Voltar ao Início
        </Button>
      </CardContent>
    </Card>
  );
}
