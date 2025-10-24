import { PartialType } from '@nestjs/mapped-types';
import { CreateAirplanesDto } from './create-airplanes.dro';

// PartialType(CreateAirportDto) = Pega todos os campos do CreateAirportDto
// e os torna opcionais.
export class UpdateAirplanesDto extends PartialType(CreateAirplanesDto) {}