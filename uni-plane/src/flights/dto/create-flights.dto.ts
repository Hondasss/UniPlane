import { IsString, IsNotEmpty, Length, IsDateString, IsInt } from 'class-validator';

export class CreateFlightsDto {
  @IsInt()
  @IsNotEmpty()
  id_voo: number;

  @IsString()
  @IsNotEmpty()
  numero_voo: string;

  @IsInt()
  @IsNotEmpty()
  id_aeronave: number;

  @IsInt()
  @IsNotEmpty()
  id_aeroporto_origem: number;

  @IsInt()
  @IsNotEmpty()
  id_aeroporto_destino: number;

  @IsDateString()
  @IsNotEmpty()
  horario_saida: string;

  @IsDateString()
  @IsNotEmpty()
  horario_chegada: string;
}