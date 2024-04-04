/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { VolunteeringService } from './volunteering.service';
import { VolunteeringController } from './volunteering.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Volunteering } from './entities/volunteering.entity';
import { OrganizationModule } from 'src/organization/organization.module';


@Module({
  imports:[TypeOrmModule.forFeature([Volunteering]), OrganizationModule],
  controllers: [VolunteeringController],
  providers: [VolunteeringService],
  exports: [TypeOrmModule, VolunteeringService]
})
export class VolunteeringModule {}
