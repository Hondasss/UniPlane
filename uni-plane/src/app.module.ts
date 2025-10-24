import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightsModule } from './flights/flights.module';
import { AirportsModule } from './airports/airports.module';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { ConfigModule, ConfigService } from '@nestjs/config'; 
import { AirplanesModule } from './airplanes/airplanes.module';
import { AiplaneseatsModule } from './aiplaneseats/aiplaneseats.module';
import { BookingsModule } from './bookings/bookings.module';
import { CoworkersModule } from './coworkers/coworkers.module';
import { UsersModule } from './users/users.module';
import { PassengersModule } from './passengers/passengers.module';
import { PaymentsModule } from './payments/payments.module';
import { TimetablesModule } from './timetables/timetables.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql', 
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, 
      }),
    }),
    FlightsModule, 
    AirportsModule, AirplanesModule, AiplaneseatsModule, BookingsModule, CoworkersModule, UsersModule, PassengersModule, PaymentsModule, TimetablesModule],

  controllers: [AppController],
  
  providers: [AppService],
})
export class AppModule {}
