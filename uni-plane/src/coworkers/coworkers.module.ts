import { Module } from '@nestjs/common';
import { CoworkersController } from './coworkers.controller';
import { CoworkersService } from './coworkers.service';

@Module({
  controllers: [CoworkersController],
  providers: [CoworkersService]
})
export class CoworkersModule {}
