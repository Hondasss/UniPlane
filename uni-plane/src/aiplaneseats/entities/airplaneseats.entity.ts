import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Flight } from '../../flights/entities/flights.entity';

@Entity('airplaneseats')
export class AirplaneSeat {
  @PrimaryGeneratedColumn()
  id_assento: number;

  @Column()
  id_voo: number;

  @Column()
  codigo_assento: number;

  @Column()
  status: string;

  @ManyToOne(() => Flight, (voo) => voo.assentos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_voo' })
  voo: Flight;
}
