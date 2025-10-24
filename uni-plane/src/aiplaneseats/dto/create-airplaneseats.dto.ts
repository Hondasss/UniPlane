import { IsString, IsNotEmpty, Length, IsInt } from 'class-validator';

export class CreateAirplaneseatsDto {
  @IsInt()
  @IsNotEmpty()
  id_assento: number;

  @IsInt()
  @IsNotEmpty()
  id_voo: number;

  @IsInt()
  @IsNotEmpty()
  codigo_assento: number;

  @IsString()
  @IsNotEmpty()
  status: string;

}