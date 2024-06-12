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
      useFactory: async () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'volunteeringdb',
        entities: [join(__dirname, '**', '*.entity.js')],
        synchronize: false, 
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
