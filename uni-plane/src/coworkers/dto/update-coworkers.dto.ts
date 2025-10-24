import { PartialType } from '@nestjs/mapped-types';
import { CreateCoworkersDto } from './create-coworkers.dto';

// PartialType(CreateAirportDto) = Pega todos os campos do CreateAirportDto
// e os torna opcionais.
export class UpdateCoworkersDto extends PartialType(CreateCoworkersDto) {}