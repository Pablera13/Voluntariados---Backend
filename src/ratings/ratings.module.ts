/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { RatingsController } from './ratings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rating } from './entities/rating.entity';
import { VolunteerModule } from 'src/volunteer/volunteer.module';
import { VolunteeringModule } from 'src/volunteering/volunteering.module';
@Module({
  imports:[TypeOrmModule.forFeature([Rating]), VolunteeringModule, VolunteerModule],
  controllers: [RatingsController],
  providers: [RatingsService],
  exports: [TypeOrmModule, RatingsService]

})
export class RatingsModule {}
