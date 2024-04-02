import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CompanyModule } from './company/company.module';
import { SponsorshipModule } from './sponsorship/sponsorship.module';
import { EventModule } from './event/event.module';
import { DonationModule } from './donation/donation.module';
import { VolunteerModule } from './volunteer/volunteer.module';
import { VolunteeringModule } from './volunteering/volunteering.module';
import { RatingsModule } from './ratings/ratings.module';
import { AuthModule } from './auth/auth.module';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'voluntariadodb',
        entities: [join(__dirname, '**', '*.entity.js')],
        synchronize: true, //cuando se vaya a correr el API por primera vez ponerlo en TRUE
        retryAttempts: 3,
      }),
    }),
    UsersModule,
    CompanyModule,
    SponsorshipModule,
    EventModule,
    DonationModule,
    AuthModule,
    VolunteerModule,
    VolunteeringModule,
    RatingsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
