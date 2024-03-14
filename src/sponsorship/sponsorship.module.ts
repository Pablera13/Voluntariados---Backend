import { Module } from '@nestjs/common';
import { SponsorshipService } from './sponsorship.service';
import { SponsorshipController } from './sponsorship.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sponsorship } from './entities/Sponsorship.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sponsorship])],
  controllers: [SponsorshipController],
  providers: [SponsorshipService],
})
export class SponsorshipModule {}
