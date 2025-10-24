import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersDto } from './create-users.dto'

// PartialType(CreateAirportDto) = Pega todos os campos do CreateAirportDto
// e os torna opcionais.
export class UpdateUsersDto extends PartialType(CreateUsersDto) {}