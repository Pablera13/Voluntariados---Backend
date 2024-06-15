/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EventModule } from './event/event.module';
import { VolunteerModule } from './volunteer/volunteer.module';
import { VolunteeringModule } from './volunteering/volunteering.module';
import { RatingsModule } from './ratings/ratings.module';
import { AuthModule } from './auth/auth.module';
import { join } from 'path';
import { OrganizationModule } from './organization/organization.module';
import { SponsorshipModule } from './sponsorship/sponsorship.module';
import { DonationModule } from './donation/donation.module';
import { VolunteeringVolunteerModule } from './volunteering_volunteer/volunteering_volunteer.module';
import { EventVolunteerModule } from './event_volunteer/event_volunteer.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      // useFactory: async () => ({
      //   type: 'mysql',
      //   host: 'MYSQL5048.site4now.net',
      //   port: 3306,
      //   username: 'aa771b_volundb',
      //   // password: 'glorysecret123',
      //   database: 'db_aa771b_volundb',
      //   entities: [join(__dirname, '**', '*.entity.js')],
      //   synchronize: false, 
      //   retryAttempts: 3,
      // }),

      useFactory: async () => ({
        type: 'mysql',
        host: 'MYSQL8010.site4now.net',
        port: 3306,
        username: 'aa9b42_volundb',
        password: 'admin123',
        database: 'db_aa9b42_volundb',
        entities: [join(__dirname, '**', '*.entity.js')],
        synchronize: true, 
        retryAttempts: 3,
      }),
    }),
    UsersModule,
    EventModule,
    AuthModule,
    VolunteerModule,
    VolunteeringModule,
    RatingsModule,
    OrganizationModule,
    SponsorshipModule,
    DonationModule,
    VolunteeringVolunteerModule,
    EventVolunteerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
