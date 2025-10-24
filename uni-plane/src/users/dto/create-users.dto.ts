import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateUsersDto {

  @IsString()
  @IsNotEmpty()
  tipo: string;
}