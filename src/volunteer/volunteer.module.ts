/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { VolunteerService } from './volunteer.service';
import { VolunteerController } from './volunteer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Volunteer } from './entities/volunteer.entity';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[TypeOrmModule.forFeature([Volunteer]), UsersModule],
  controllers: [VolunteerController],
  providers: [VolunteerService, UsersService],
})
export class VolunteerModule {}