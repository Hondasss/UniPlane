import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateAirportDto {
  // @IsNotEmpty() = Não pode ser vazio
  // @IsString() = Tem que ser texto
  // @Length(3, 3) = Tem que ter exatamente 3 caracteres
  @IsString()
  @IsNotEmpty()
  @Length(3, 3, { message: 'A sigla deve ter exatamente 3 caracteres.' })
  sigla: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  cidade: string;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsString()
  @IsNotEmpty()
  pais: string;
}