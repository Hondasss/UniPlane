import { PartialType } from '@nestjs/mapped-types';
import { CreatePassengersDto } from './create-passengers.dto';

// PartialType(CreateAirportDto) = Pega todos os campos do CreateAirportDto
// e os torna opcionais.
export class UpdatePassengersDto extends PartialType(CreatePassengersDto) {}