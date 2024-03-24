/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { VolunteeringService } from './volunteering.service';
import { VolunteeringController } from './volunteering.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Volunteering } from './entities/volunteering.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Volunteering])],
  controllers: [VolunteeringController],
  providers: [VolunteeringService],
})
export class VolunteeringModule {}
