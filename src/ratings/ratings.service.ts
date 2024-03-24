/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { Rating } from './entities/rating.entity';
import { Repository } from 'typeorm/repository/Repository';
import  { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RatingsService {

  constructor(
    @InjectRepository(Rating)
    private ratingRepository: Repository<Rating>
  ){}

  async create(createRatingDto: CreateRatingDto) {
    return await this.ratingRepository.save(createRatingDto)
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
}
