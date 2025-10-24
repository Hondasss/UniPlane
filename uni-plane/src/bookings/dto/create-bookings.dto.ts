import { IsString, IsNotEmpty, Length, IsInt, IsDateString } from 'class-validator';

export class CreateBookingsDto {
  @IsInt()
  @IsNotEmpty()
  id_compra: number;

  @IsInt()
  @IsNotEmpty()
  id_passageiro: number;

  @IsInt()
  @IsNotEmpty()
  id_voo: number;

  @IsDateString()
  @IsNotEmpty()
  data_compra: string;

  @IsString()
  @IsNotEmpty()
  numero_reserva: string;

  @IsNotEmpty()
  status: Enumerator;
}