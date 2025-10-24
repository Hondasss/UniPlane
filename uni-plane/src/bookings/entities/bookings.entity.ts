import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Passenger } from '../../passengers/entities/passengers.entity';
import { Flight } from '../../flights/entities/flights.entity';
import { Payment } from '../../payments/entities/payments.entity';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn()
  id_compra: number;

  @Column()
  id_passageiro: number;

  @Column()
  id_voo: number;

  @Column()
  data_compra: Date;

  @Column()
  numero_reserva: string;

  @Column()
  status: string;

  @ManyToOne(() => Passenger, (passageiro) => passageiro.reservas, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_passageiro' })
  passageiro: Passenger;

  @ManyToOne(() => Flight, (voo) => voo.reservas, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_voo' })
  voo: Flight;

  @OneToOne(() => Payment, (pagamento) => pagamento.reserva)
  pagamento: Payment;
}
