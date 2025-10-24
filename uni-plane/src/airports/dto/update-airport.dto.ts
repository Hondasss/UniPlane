import { PartialType } from '@nestjs/mapped-types';
import { CreateAirportDto } from './create-airport.dto';

// PartialType(CreateAirportDto) = Pega todos os campos do CreateAirportDto
// e os torna opcionais.
export class UpdateAirportDto extends PartialType(CreateAirportDto) {}