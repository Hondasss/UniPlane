import { Module } from '@nestjs/common';
import { CoworkersService } from './coworkers.service';
import { CoworkersController } from './coworkers.controller';

@Module({
  controllers: [CoworkersController],
  providers: [CoworkersService],
})
export class CoworkersModule {}
