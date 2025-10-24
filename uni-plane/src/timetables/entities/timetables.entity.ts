import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Flight } from '../../flights/entities/flights.entity';
import { Airport } from '../../airports/entities/airport.entity';

@Entity('timetables')
export class Timetable {
  @PrimaryGeneratedColumn()
  id_horario: number;

  @Column()
  id_voo: number;

  @Column()
  id_aeroporto: number;

  @Column()
  horario_chegada: Date;

  @Column()
  horario_saida: Date;

  @ManyToOne(() => Flight, (voo) => voo.horarios)
  @JoinColumn({ name: 'id_voo' })
  voo: Flight;

  @ManyToOne(() => Airport, (aeroporto) => aeroporto.horarios)
  @JoinColumn({ name: 'id_aeroporto' })
  aeroporto: Airport;
}
