import { IsString, IsNotEmpty, Length, IsInt, IsDateString } from 'class-validator';

export class CreateCoworkersDto {

  @IsInt()
  @IsNotEmpty()
  id_funcionario: number;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsDateString()
  @IsNotEmpty()
  data_nas: string;

  @IsString()
  @IsNotEmpty()
  telefone: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;
}