import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AirportsService } from './airports.service';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';

// @Controller('airports') define que todas as rotas aqui
// começarão com '/airports'
@Controller('airports')
export class AirportsController {
  // 1. "Injetamos" o Service. O Controller (Garçom) chama o Service (Chef)
  constructor(private readonly airportsService: AirportsService) {}

  // ---
  // NOTA: Estas rotas (F7) são para o "mantenedor" 
  // No futuro, você deve protegê-las com 'Guards' para
  // que apenas o mantenedor possa acessá-las!
  // ---

  // Rota para CRIAR: POST /airports
  @Post()
  create(@Body() createAirportDto: CreateAirportDto) {
    // @Body() pega os dados da requisição e o NestJS valida
    // automaticamente usando o CreateAirportDto
    return this.airportsService.create(createAirportDto);
  }

  // Rota para LER TODOS: GET /airports
  @Get()
  findAll() {
    return this.airportsService.findAll();
  }

  // Rota para LER UM: GET /airports/GRU (ou /airports/LAX)
  @Get(':sigla')
  findOne(@Param('sigla') sigla: string) {
    // @Param('sigla') pega o 'GRU' da URL
    return this.airportsService.findOne(sigla);
  }

  // Rota para ATUALIZAR: PATCH /airports/GRU
  @Patch(':sigla')
  update(
    @Param('sigla') sigla: string,
    @Body() updateAirportDto: UpdateAirportDto,
  ) {
    return this.airportsService.update(sigla, updateAirportDto);
  }

  // Rota para DELETAR: DELETE /airports/GRU
  @Delete(':sigla')
  remove(@Param('sigla') sigla: string) {
    return this.airportsService.remove(sigla);
  }
}