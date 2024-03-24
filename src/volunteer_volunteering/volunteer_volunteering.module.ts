/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { VolunteerVolunteeringService } from './volunteer_volunteering.service';
import { VolunteerVolunteeringController } from './volunteer_volunteering.controller';
import { VolunteerVolunteering } from './entities/volunteer_volunteering.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([VolunteerVolunteering])],
  controllers: [VolunteerVolunteeringController],
  providers: [VolunteerVolunteeringService],
})
export class VolunteerVolunteeringModule {}
