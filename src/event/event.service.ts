import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-Event.dto';
import { UpdateEventDto } from './dto/update-Event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './entities/Event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventService {

  constructor(
    @InjectRepository(Event)
    private EventRepository: Repository<Event>,
  ){}

  async create(createEventDto: CreateEventDto) {
    return await this.EventRepository.save(createEventDto);
  }

  async findAll() {
    return await this.EventRepository.find();
  }

  async findOne(id: number) {
    return await this.EventRepository.findOneBy({id});
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    var updateUser = await this.EventRepository.update({id}, updateEventDto);
    return updateUser;

  }

  async remove(id: number) {
    return await this.EventRepository.delete(id);
  }
}
