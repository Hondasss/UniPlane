import { IsDateString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateTimetablesDto {
  @IsInt()
  @IsNotEmpty()
  id_voo: number;

  @IsInt()
  @IsNotEmpty()
  id_aeroporto: number;

  @IsDateString()
  @IsNotEmpty()
  horario_chegada: string;

  @IsDateString()
  @IsNotEmpty()
  horario_saida: string;
}
