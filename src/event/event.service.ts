import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-Event.dto';
import { UpdateEventDto } from './dto/update-Event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './entities/Event.entity';
import { Repository } from 'typeorm';
import { Organization } from 'src/organization/entities/organization.entity';

@Injectable()
export class EventService {

  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>
  ){}

  async create(createEventDto: CreateEventDto) {
    const organization = await this.validateOrganization(createEventDto.organizationId);
    return await this.eventRepository.save({
      ...createEventDto,
      organization: organization
    });
  }

  async findAll() {
    return await this.eventRepository.find();
  }

  // async findOne(id: number) {
  //   return await this.eventRepository.findOneBy({id});
  // }

  async findOne(id: number) {
    return await this.eventRepository.findOne({
      where: { id },
      relations: ['eventvolunteers', 'eventvolunteers.volunteer'],
    });
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    await this.eventRepository.update({id}, updateEventDto);
    const event = await this.findOne(id)
    return event;
  }

  async remove(id: number) {
    return await this.eventRepository.delete(id);
  }

  private async validateOrganization(organizationId: number) {
    const organization = await this.organizationRepository.findOneBy({ id: organizationId });
    if (!organization) {
      throw new BadRequestException('Organization not found');
    }
    return organization;
  }
}
