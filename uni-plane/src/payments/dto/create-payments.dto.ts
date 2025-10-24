import { IsString, IsNotEmpty, Length, isDateString, IsDateString, IsInt } from 'class-validator';

export class CreatePaymentDto {
  @IsInt()
  @IsNotEmpty()
  id_passageiro: number;

  @IsInt()
  @IsNotEmpty()
  id_reserva: number; //booking

  @IsString()
  @IsNotEmpty()
  forma_pagamento: string;

  @IsString()
  @IsNotEmpty()
  tipo_cartao: string;

  @IsString()
  @IsNotEmpty()
  numero_cartao: string;

  @IsString()
  @IsNotEmpty()
  validade_cartao: string;

  @IsDateString()
  @IsNotEmpty()
  data_vencimento: string;
}