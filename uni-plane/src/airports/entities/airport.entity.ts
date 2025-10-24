import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Flight } from '../../flights/entities/flights.entity';
import { Timetable } from '../../timetables/entities/timetables.entity';

@Entity('airports')
export class Airport {
  @PrimaryGeneratedColumn()
  id_aeroporto: number;

  @Column({ length: 3, unique: true })
  sigla: string;

  @Column()
  nome: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  pais: string;

  @OneToMany(() => Flight, (voo) => voo.origem)
  voosOrigem: Flight[];

  @OneToMany(() => Flight, (voo) => voo.destino)
  voosDestino: Flight[];

  @OneToMany(() => Timetable, (t) => t.aeroporto)
  horarios: Timetable[];
}
