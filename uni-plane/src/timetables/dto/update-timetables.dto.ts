import { PartialType } from '@nestjs/mapped-types';
import { CreateTimetablesDto } from './create-timetables.dto';

// PartialType(CreateAirportDto) = Pega todos os campos do CreateAirportDto
// e os torna opcionais.
export class UpdateTimeTablesDto extends PartialType(CreateTimetablesDto) {}