import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Flight } from '../../flights/entities/flights.entity';

@Entity('airplanes')
export class Airplane {
  @PrimaryGeneratedColumn()
  id_aeronave: number;

  @Column()
  numero_aeronave: number;

  @Column()
  tipo: string;

  @OneToMany(() => Flight, (voo) => voo.aeronave)
  voos: Flight[];
}
