import { IsString, IsNotEmpty, Length, IsInt } from 'class-validator';

export class CreateAirplanesDto {
  @IsInt()
  @IsNotEmpty()
  id_aeronave: number;

  @IsInt()
  @IsNotEmpty()
  numero_aeronave: number;

  @IsString()
  @IsNotEmpty()
  tipo: string;
}