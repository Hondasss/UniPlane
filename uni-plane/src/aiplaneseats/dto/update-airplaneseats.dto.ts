import { PartialType } from '@nestjs/mapped-types';
import { CreateAirplaneseatsDto } from './create-airplaneseats.dto';

// PartialType(CreateAirportDto) = Pega todos os campos do CreateAirportDto
// e os torna opcionais.
export class UpdateAirplaneseatsDto extends PartialType(CreateAirplaneseatsDto) {}