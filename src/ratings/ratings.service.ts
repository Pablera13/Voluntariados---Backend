/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { Rating } from './entities/rating.entity';
import { Repository } from 'typeorm/repository/Repository';
import  { InjectRepository } from '@nestjs/typeorm';
import { Volunteer } from 'src/volunteer/entities/volunteer.entity';
import { Volunteering } from 'src/volunteering/entities/volunteering.entity';

@Injectable()
export class RatingsService {

  constructor(
    @InjectRepository(Rating)
    private readonly ratingRepository: Repository<Rating>,
    @InjectRepository(Volunteer)
    private readonly volunteerRepository: Repository<Volunteer>,
    @InjectRepository(Volunteering)
    private readonly volunteeringRepository: Repository<Volunteering>
  ){}


  async create(createRatingDto: CreateRatingDto) {

    const volunteering = await this.validateVolunteering(createRatingDto.volunteeringId);
    const volunteer = await this.validateVolunteer(createRatingDto.volunteerId);

    return await this.ratingRepository.save({
      ...createRatingDto,
      volunteering: volunteering,
      volunteer: volunteer
    });
  }

  async findAll() {
    return await  this.ratingRepository.find();
  }

  async findOne(id: number) {
    return await this.ratingRepository.findOneBy({id});
  }

  async update(id: number, updateRatingDto: UpdateRatingDto) {
    const updateRating = await this.ratingRepository.update({id}, updateRatingDto)
    return updateRating;
  }

  async remove(id: number) {
    return await this.ratingRepository.delete({id});
  }

  private async validateVolunteer(volunteerId: number) {
    const volunteer = await this.volunteerRepository.findOneBy({ id: volunteerId });
    if (!volunteer) {
      throw new BadRequestException('Volunteer not found');
    }
    return volunteer;
  }

  private async validateVolunteering(volunteeringId: number) {
    const volunteering = await this.volunteeringRepository.findOneBy({ id: volunteeringId });
    if (!volunteering) {
      throw new BadRequestException('Volunteering not found');
    }
    return volunteering;
  }
}
