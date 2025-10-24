import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirportsService } from './airports.service';
import { AirportsController } from './airports.controller';
import { Airport } from './entities/airport.entity';

@Module({
  imports: [
    // 1. Importamos o TypeOrmModule.forFeature([Airport])
    // Isso "registra" a entidade Airport neste módulo,
    // permitindo que o Service a injete com @InjectRepository
    TypeOrmModule.forFeature([Airport]),
  ],
  controllers: [AirportsController], // 2. Declaramos o Controller
  providers: [AirportsService], // 3. Declaramos o Service
})
export class AirportsModule {}