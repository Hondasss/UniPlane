import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('coworkers')
export class Coworker {
  @PrimaryGeneratedColumn()
  id_funcionario: number;

  @Column()
  nome: string;

  @Column()
  data_nas: Date;

  @Column()
  telefone: string;

  @Column()
  categoria: string;
}
