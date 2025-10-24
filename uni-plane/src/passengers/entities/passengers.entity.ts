import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Booking } from '../../bookings/entities/bookings.entity';
import { Payment } from '../../payments/entities/payments.entity';

@Entity('passengers')
export class Passenger {
  @PrimaryGeneratedColumn()
  id_passageiro: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  username: string;

  @Column()
  senha: string;

  @Column()
  endereco: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @Column()
  data_nas: Date;

  @Column()
  cpf: string;

  @Column()
  passaporte: string;

  @OneToMany(() => Booking, (r) => r.passageiro)
  reservas: Booking[];

  @OneToMany(() => Payment, (p) => p.passageiro)
  pagamentos: Payment[];
}
