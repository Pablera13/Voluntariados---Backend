/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateVolunteerDto } from './dto/create-volunteer.dto';
import { UpdateVolunteerDto } from './dto/update-volunteer.dto';
import { Volunteer } from './entities/volunteer.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class VolunteerService {

  constructor(
    @InjectRepository(Volunteer)
    private readonly volunterRepository: Repository<Volunteer>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async create(createVolunteerDto: CreateVolunteerDto) {
    const user = await this.validateUser(createVolunteerDto.userId);
    return await this.volunterRepository.save({
      ...createVolunteerDto,
      user: user
    });
  }

  async findAll() {
    return await this.volunterRepository.find({
      relations: {
          volunteeringvolunteers: true,
          eventvolunteers : true
      },
  });
  }

  async findOne(id: number) {
    return await this.volunterRepository.findOne({
      where: { id },
      relations: {
        volunteeringvolunteers: true,
        eventvolunteers : true
    },
    });
  }
  
  async update(id: number, updateVolunteerDto: UpdateVolunteerDto) {
    await this.volunterRepository.update({id}, updateVolunteerDto);
    const volunter = await this.findOne(id)
    return volunter;
  }

  async remove(id: number) {
    return await this.volunterRepository.delete(id);
  }

  private async validateUser(userId: number) {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return user;
  }
}
