/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { Response } from 'express';
import { VolunteeringService } from './volunteering.service';
import { CreateVolunteeringDto } from './dto/create-volunteering.dto';
import { UpdateVolunteeringDto } from './dto/update-volunteering.dto';

@Controller('volunteering')
export class VolunteeringController {
  constructor(private readonly volunteeringService: VolunteeringService) {}

  @Post()
  create(@Body() createVolunteeringDto: CreateVolunteeringDto) {
    return this.volunteeringService.create(createVolunteeringDto);
  }

  @Get()
  findAll() {
    return this.volunteeringService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    const volunteering = await this.volunteeringService.findOne(+id);
    if (volunteering){
      return res.status(200).json(volunteering);
    } else {
      return res.status(404).json({ error: 'Volunteering not found' });
  }}

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateVolunteeringDto: UpdateVolunteeringDto, @Res() res: Response) {

    const volunteering = await this.volunteeringService.update(+id, updateVolunteeringDto);
    if (volunteering){
      return res.status(200).json(volunteering);
    } else {
      return res.status(404).json({ error: 'Volunteering not found' });
    }}

  @Delete(':id')
    async remove(@Param('id') id: number, @Res() res: Response) {

      const volunteering = await this.volunteeringService.findOne(+id);
      if (volunteering){
      this.volunteeringService.remove(+id);
      return res.status(200).json({ message: 'Volunteering deleted successfully' });
    } else {
      return res.status(404).json({ error: 'Volunteering not found' });
    }}



}
