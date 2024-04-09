import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Response } from 'express';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    const event = await this.eventService.findOne(+id);
    if (event){
      return res.status(200).json(event);
    } else {
      return res.status(404).json({ error: 'Event not found' });
  }}

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateEventDto: UpdateEventDto, @Res() res: Response) {

    const event = await this.eventService.update(+id, updateEventDto);
    if (event){
      return res.status(200).json(event);
    } else {
      return res.status(404).json({ error: 'Event not found' });
    }}


    @Delete(':id')
    async remove(@Param('id') id: number, @Res() res: Response) {

      const event = await this.eventService.findOne(+id);
      if (event){
      this.eventService.remove(+id);
      return res.status(200).json({ message: 'Event deleted successfully' });
    } else {
      return res.status(404).json({ error: 'Event not found' });
    }}
  }

