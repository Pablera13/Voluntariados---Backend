import { Module } from '@nestjs/common';
import { SponsorshipService } from './sponsorship.service';
import { SponsorshipController } from './sponsorship.controller';
import { Sponsorship } from './entities/sponsorship.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationModule } from 'src/organization/organization.module';

@Module({

  imports: [TypeOrmModule.forFeature([Sponsorship]), OrganizationModule],
  controllers: [SponsorshipController],
  providers: [SponsorshipService],
  exports: [TypeOrmModule, SponsorshipService]

})
export class SponsorshipModule {}
