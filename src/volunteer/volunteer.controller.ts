/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { Response } from 'express';
import { VolunteerService } from './volunteer.service';
import { CreateVolunteerDto } from './dto/create-volunteer.dto';
import { UpdateVolunteerDto } from './dto/update-volunteer.dto';

@Controller('volunteer')
export class VolunteerController {
  constructor(private readonly volunteerService: VolunteerService) {}

  @Post()
  create(@Body() createVolunteerDto: CreateVolunteerDto) {
    return this.volunteerService.create(createVolunteerDto);
  }

  @Get()
  findAll() {
    return this.volunteerService.findAll();
  }


  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    const volunteer = await this.volunteerService.findOne(+id);
    if (volunteer){
      return res.status(200).json(volunteer);
    } else {
      return res.status(404).json({ error: 'Volunteer not found' });
  }}

@Patch(':id')
  async update(@Param('id') id: number, @Body() updateVolunteerDto: UpdateVolunteerDto, @Res() res: Response) {

    const volunteer = await this.volunteerService.update(+id, updateVolunteerDto);
    if (volunteer){
      return res.status(200).json(volunteer);
    } else {
      return res.status(404).json({ error: 'Volunteer not found' });
    }}


    @Delete(':id')
    async remove(@Param('id') id: number, @Res() res: Response) {

      const volunteer = await this.volunteerService.findOne(+id);
      if (volunteer){
      this.volunteerService.remove(+id);
      return res.status(200).json({ message: 'Volunteer deleted successfully' });
    } else {
      return res.status(404).json({ error: 'Volunteer not found' });
    }}

}
