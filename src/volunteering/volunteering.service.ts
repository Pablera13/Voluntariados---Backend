/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateVolunteeringDto } from './dto/create-volunteering.dto';
import { UpdateVolunteeringDto } from './dto/update-volunteering.dto';
import { Volunteering } from './entities/volunteering.entity';
import  { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from '../organization/entities/organization.entity';

@Injectable()
export class VolunteeringService {

  constructor(
    @InjectRepository(Volunteering)
    private readonly volunteringRepository: Repository<Volunteering>,
    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>
  ){}

  async create(createVolunteeringDto: CreateVolunteeringDto) {
    const organization = await this.validateOrganization(createVolunteeringDto.organizationId);
    return await this.volunteringRepository.save({
      ...createVolunteeringDto,
      organization: organization
    });
  }

  async findAll() {
    return await this.volunteringRepository.find();
  }

  // async findOne(id: number) {
  //   return await this.volunteringRepository.findOneBy({id});
  // }

  async findOne(id: number) {
    return await this.volunteringRepository.findOne({
      where: { id },
      relations: ['volunteeringvolunteers', 'volunteeringvolunteers.volunteer'],
    });
  }
  

  async update(id: number, updateVolunteeringDto: UpdateVolunteeringDto) {
    await this.volunteringRepository.update({id}, updateVolunteeringDto);
    const event = await this.findOne(id)
    return event;
  }

  async remove(id: number) {
    return await this.volunteringRepository.delete(id);
  }

  private async validateOrganization(organizationId: number) {
    const organization = await this.organizationRepository.findOneBy({ id: organizationId });
    if (!organization) {
      throw new BadRequestException('Organization not found');
    }
    return organization;
  }

}
