import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Airport } from './entities/airport.entity';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';

@Injectable()
export class AirportsService {
  // 1. "Injetamos" o repositório do Airport.
  // É com 'this.airportRepository' que falamos com o banco de dados.
  constructor(
    @InjectRepository(Airport)
    private readonly airportRepository: Repository<Airport>,
  ) {}

  // Lógica para o Requisito F7: "inclusão"
  async create(createAirportDto: CreateAirportDto): Promise<Airport> {
    // O 'create' apenas cria o objeto no JS
    const airport = this.airportRepository.create(createAirportDto);
    // O 'save' de fato salva no banco de dados
    return this.airportRepository.save(airport);
  }

  // Lógica para buscar todos os aeroportos
  async findAll(): Promise<Airport[]> {
    return this.airportRepository.find();
  }

  // Lógica para buscar UM aeroporto pela sigla
  async findOne(sigla: string): Promise<Airport> {
    const airport = await this.airportRepository.findOneBy({ sigla: sigla });

    if (!airport) {
      throw new NotFoundException(`Aeroporto com sigla '${sigla}' não encontrado.`);
    }
    return airport;
  }

  // Lógica para o Requisito F7: "alteração"
  async update(sigla: string, updateAirportDto: UpdateAirportDto): Promise<Airport> {
    // O 'preload' busca o aeroporto existente pela 'sigla' e
    // mescla os dados novos (updateAirportDto) nele.
    const airport = await this.airportRepository.preload({
      sigla: sigla,
      ...updateAirportDto,
    });

    if (!airport) {
      throw new NotFoundException(`Aeroporto com sigla '${sigla}' não encontrado.`);
    }

    // Salva o aeroporto mesclado
    return this.airportRepository.save(airport);
  }

  // Lógica para o Requisito F7: "exclusão"
  async remove(sigla: string): Promise<Airport> {
    // Primeiro, encontramos o aeroporto
    const airport = await this.findOne(sigla);
    // Depois, removemos
    return this.airportRepository.remove(airport);
  }
}