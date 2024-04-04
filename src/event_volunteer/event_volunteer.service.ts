import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEventVolunteerDto } from './dto/create-event_volunteer.dto';
import { UpdateEventVolunteerDto } from './dto/update-event_volunteer.dto';
import { EventVolunteer } from './entities/event_volunteer.entity';
import { Volunteer } from 'src/volunteer/entities/volunteer.entity';
import { Event } from 'src/event/entities/event.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EventVolunteerService {

  constructor(
    @InjectRepository(EventVolunteer)
    private readonly eventvolunteerRepository: Repository<EventVolunteer>,
    @InjectRepository(Volunteer)
    private readonly volunterRepository: Repository<Volunteer>,
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>
  ) { }


  async create(createEventVolunteerDto: CreateEventVolunteerDto) {
    const event = await this.validateEvent(createEventVolunteerDto.eventId);
    const volunteer = await this.validateVolunteer(createEventVolunteerDto.volunteerId);

    return await this.eventvolunteerRepository.save({
      event: event,
      volunteer: volunteer
    });
  }

  async findAll() {
    return await  this.eventvolunteerRepository.find();
  }

  async findOne(id: number) {
    return await this.eventvolunteerRepository.findOneBy({id});
  }

  // update(id: number, updateEventVolunteerDto: UpdateEventVolunteerDto) {
  //   return `This action updates a #${id} eventVolunteer`;
  // }

  async remove(id: number) {
    return await this.eventvolunteerRepository.delete(id);
  }

  private async validateVolunteer(volunteerId: number) {
    const volunteer = await this.volunterRepository.findOneBy({ id: volunteerId });
    if (!volunteer) {
      throw new BadRequestException('User not found');
    }
    return volunteer;
  }

  private async validateEvent(eventId: number) {
    const event = await this.eventRepository.findOneBy({ id: eventId });
    if (!event) {
      throw new BadRequestException('Event not found');
    }
    return event;
  }
}
