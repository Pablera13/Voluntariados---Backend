import { Module } from '@nestjs/common';
import { DonationService } from './donation.service';
import { DonationController } from './donation.controller';
import { Donation } from './entities/donation.entity';
import { SponsorshipModule } from 'src/sponsorship/sponsorship.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VolunteerModule } from 'src/volunteer/volunteer.module';

@Module({
  imports: [TypeOrmModule.forFeature([Donation]), SponsorshipModule, VolunteerModule],
  controllers: [DonationController],
  providers: [DonationService],
  exports: [TypeOrmModule, DonationService]

})
export class DonationModule {}
