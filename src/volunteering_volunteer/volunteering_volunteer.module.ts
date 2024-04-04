import { Module } from '@nestjs/common';
import { VolunteeringVolunteerService } from './volunteering_volunteer.service';
import { VolunteeringVolunteerController } from './volunteering_volunteer.controller';
import { VolunteerModule } from 'src/volunteer/volunteer.module';
import { VolunteeringVolunteer } from './entities/volunteering_volunteer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VolunteeringModule } from 'src/volunteering/volunteering.module';

@Module({
  imports: [TypeOrmModule.forFeature([VolunteeringVolunteer]), VolunteerModule, VolunteeringModule],
  controllers: [VolunteeringVolunteerController],
  providers: [VolunteeringVolunteerService],
  exports: [TypeOrmModule, VolunteeringVolunteerService]
})
export class VolunteeringVolunteerModule {}
