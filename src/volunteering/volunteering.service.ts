/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateVolunteeringDto } from './dto/create-volunteering.dto';
import { UpdateVolunteeringDto } from './dto/update-volunteering.dto';
import { Volunteering } from './entities/volunteering.entity';
import  { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VolunteeringService {

  constructor(
    @InjectRepository(Volunteering)
    private volunteringRepository: Repository<Volunteering>
  ){}

  async create(createVolunteeringDto: CreateVolunteeringDto) {
    return await this.volunteringRepository.save(createVolunteeringDto);
  }

  async findAll() {
    return await this.volunteringRepository.find();
  }

  async findOne(id: number) {
    return await this.volunteringRepository.findOneBy({id});
  }

  async update(id: number, updateVolunteeringDto: UpdateVolunteeringDto) {
    const updateVoluntering = await this.volunteringRepository.update({id}, updateVolunteeringDto);
    return updateVoluntering;
  }

  async remove(id: number) {
    return await this.volunteringRepository.delete(id);
  }
}
