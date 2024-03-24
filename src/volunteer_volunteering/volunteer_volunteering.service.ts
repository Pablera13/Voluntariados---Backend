/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateVolunteerVolunteeringDto } from './dto/create-volunteer_volunteering.dto';
import { UpdateVolunteerVolunteeringDto } from './dto/update-volunteer_volunteering.dto';
import { VolunteerVolunteering } from './entities/volunteer_volunteering.entity';
import { Repository } from 'typeorm/repository/Repository';
import  { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VolunteerVolunteeringService {
  constructor(
    @InjectRepository(VolunteerVolunteering)
    private volunteerVolunteeringRepository: Repository<VolunteerVolunteering>
  ){}

  async create(createVolunteerVolunteeringDto: CreateVolunteerVolunteeringDto) {
    return await this.volunteerVolunteeringRepository.save(createVolunteerVolunteeringDto);
  }

  async findAll() {
    return await this.volunteerVolunteeringRepository.find();
  }

  async findOne(id: number) {
    return await this.volunteerVolunteeringRepository.findBy({id});
  }

  async update(id: number, updateVolunteerVolunteeringDto: UpdateVolunteerVolunteeringDto) {
   const updateVolunteerVolunteering = await this.volunteerVolunteeringRepository.update({id}, updateVolunteerVolunteeringDto);
    return updateVolunteerVolunteering;
  }

  async remove(id: number) {
    return await this.volunteerVolunteeringRepository.delete(id);
  }
}
