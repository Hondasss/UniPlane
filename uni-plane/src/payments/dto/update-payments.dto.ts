import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentDto } from './create-payments.dto';

// PartialType(CreateAirportDto) = Pega todos os campos do CreateAirportDto
// e os torna opcionais.
export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {}