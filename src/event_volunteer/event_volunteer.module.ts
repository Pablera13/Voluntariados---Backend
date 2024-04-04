import { Module } from '@nestjs/common';
import { EventVolunteerService } from './event_volunteer.service';
import { EventVolunteerController } from './event_volunteer.controller';
import { VolunteerModule } from 'src/volunteer/volunteer.module';
import { EventModule } from 'src/event/event.module';
import { EventVolunteer } from './entities/event_volunteer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([EventVolunteer]), VolunteerModule, EventModule],
  controllers: [EventVolunteerController],
  providers: [EventVolunteerService],
  exports: [TypeOrmModule,EventVolunteerService]
})
export class EventVolunteerModule {}
