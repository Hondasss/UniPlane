import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Passenger } from '../../passengers/entities/passengers.entity';
import { Booking } from '../../bookings/entities/bookings.entity';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn()
  id_pagamento: number;

  @Column()
  id_passageiro: number;

  @Column()
  id_reserva: number;

  @Column()
  forma_pagamento: string;

  @Column()
  tipo_cartao: string;

  @Column()
  numero_cartao: string;

  @Column()
  validade_cartao: string;

  @Column()
  data_vencimento: Date;

  @ManyToOne(() => Passenger, (passageiro) => passageiro.pagamentos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_passageiro' })
  passageiro: Passenger;

  @OneToOne(() => Booking, (reserva) => reserva.pagamento)
  @JoinColumn({ name: 'id_reserva' })
  reserva: Booking;
}
