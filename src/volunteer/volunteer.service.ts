/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateVolunteerDto } from './dto/create-volunteer.dto';
import { UpdateVolunteerDto } from './dto/update-volunteer.dto';
import { Volunteer } from './entities/volunteer.entity';
import { Repository } from 'typeorm';
import  { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class VolunteerService {

    constructor(
      @InjectRepository(Volunteer)
      private volunterRepository: Repository<Volunteer>
    ){}

   async create(createVolunteerDto: CreateVolunteerDto) {
    return await this.volunterRepository.save(createVolunteerDto)
  }

  async findAll() {
   return await this.volunterRepository.find();
  }

  async findOne(id: number) {
    return await this.volunterRepository.findOneBy({id})
  }

  async update(id: number, updateVolunteerDto: UpdateVolunteerDto) {
    const updateVolunteer = await this.volunterRepository.update({id}, updateVolunteerDto);
    return updateVolunteer;
  }

  async remove(id: number) {
   return  await this.volunterRepository.delete(id);
  }
}
