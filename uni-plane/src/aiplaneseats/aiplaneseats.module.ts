import { Module } from '@nestjs/common';
import { AiplaneseatsController } from './aiplaneseats.controller';
import { AiplaneseatsService } from './aiplaneseats.service';

@Module({
  controllers: [AiplaneseatsController],
  providers: [AiplaneseatsService]
})
export class AiplaneseatsModule {}
