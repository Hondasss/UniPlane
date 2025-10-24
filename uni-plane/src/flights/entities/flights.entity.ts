import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Airplane } from '../../airplanes/entities/airplane.entity'
import { Airport } from '../../airports/entities/airport.entity';
import { AirplaneSeat } from '../../aiplaneseats/entities/airplaneseats.entity';
import { Booking } from '../../bookings/entities/bookings.entity';
import { Timetable } from '../../timetables/entities/timetables.entity';

@Entity('flights')
export class Flight {
  @PrimaryGeneratedColumn()
  id_voo: number;

  @Column()
  numero_voo: string;

  @Column()
  id_aeronave: number;

  @Column()
  id_aeroporto_origem: number;

  @Column()
  id_aeroporto_destino: number;

  @Column()
  horario_saida: Date;

  @Column()
  horario_chegada: Date;

  @ManyToOne(() => Airplane, (aeronave) => aeronave.voos)
  @JoinColumn({ name: 'id_aeronave' })
  aeronave: Airplane;

  @ManyToOne(() => Airport, (aeroporto) => aeroporto.voosOrigem)
  @JoinColumn({ name: 'id_aeroporto_origem' })
  origem: Airport;

  @ManyToOne(() => Airport, (aeroporto) => aeroporto.voosDestino)
  @JoinColumn({ name: 'id_aeroporto_destino' })
  destino: Airport;

  @OneToMany(() => AirplaneSeat, (assento) => assento.voo)
  assentos: AirplaneSeat[];

  @OneToMany(() => Booking, (reserva) => reserva.voo)
  reservas: Booking[];

  @OneToMany(() => Timetable, (t) => t.voo)
  horarios: Timetable[];
}
