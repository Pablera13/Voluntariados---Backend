import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventVolunteerService } from './event_volunteer.service';
import { CreateEventVolunteerDto } from './dto/create-event_volunteer.dto';
import { UpdateEventVolunteerDto } from './dto/update-event_volunteer.dto';

@Controller('event-volunteer')
export class EventVolunteerController {
  constructor(private readonly eventVolunteerService: EventVolunteerService) {}

  @Post()
  create(@Body() createEventVolunteerDto: CreateEventVolunteerDto) {
    return this.eventVolunteerService.create(createEventVolunteerDto);
  }

  @Get()
  findAll() {
    return this.eventVolunteerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventVolunteerService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEventVolunteerDto: UpdateEventVolunteerDto) {
  //   return this.eventVolunteerService.update(+id, updateEventVolunteerDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventVolunteerService.remove(+id);
  }
}
