import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { EventVolunteerService } from './event_volunteer.service';
import { CreateEventVolunteerDto } from './dto/create-event_volunteer.dto';
import { Response } from 'express';

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

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.eventVolunteerService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEventVolunteerDto: UpdateEventVolunteerDto) {
  //   return this.eventVolunteerService.update(+id, updateEventVolunteerDto);
  // }

  @Delete(':id')
    async remove(@Param('id') id: number, @Res() res: Response) {

      const eventVolunteer = await this.eventVolunteerService.findOne(+id);
      if (eventVolunteer){
      this.eventVolunteerService.remove(+id);
      return res.status(200).json({ message: 'Relationship deleted successfully' });
    } else {
      return res.status(404).json({ error: 'Relationship not found' });
    }}


}
