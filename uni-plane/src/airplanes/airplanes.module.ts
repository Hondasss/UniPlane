import { Module } from '@nestjs/common';
import { AirplanesController } from './airplanes.controller';
import { AirplanesService } from './airplanes.service';

@Module({
  controllers: [AirplanesController],
  providers: [AirplanesService]
})
export class AirplanesModule {}
