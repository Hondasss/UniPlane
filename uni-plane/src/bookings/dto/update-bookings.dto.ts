import { PartialType } from '@nestjs/mapped-types';
import { CreateBookingsDto } from './create-bookings.dto';

// PartialType(CreateAirportDto) = Pega todos os campos do CreateAirportDto
// e os torna opcionais.
export class UpdateBookingsDto extends PartialType(CreateBookingsDto) {}