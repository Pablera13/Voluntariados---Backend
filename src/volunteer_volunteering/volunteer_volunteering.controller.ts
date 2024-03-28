/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VolunteerVolunteeringService } from './volunteer_volunteering.service';
import { CreateVolunteerVolunteeringDto } from './dto/create-volunteer_volunteering.dto';
import { UpdateVolunteerVolunteeringDto } from './dto/update-volunteer_volunteering.dto';

@Controller('volunteer-volunteering')
export class VolunteerVolunteeringController {
  constructor(private readonly volunteerVolunteeringService: VolunteerVolunteeringService) {}

  @Post()
  create(@Body() createVolunteerVolunteeringDto: CreateVolunteerVolunteeringDto) {
    return this.volunteerVolunteeringService.create(createVolunteerVolunteeringDto);
  }

  @Get()
  findAll() {
    return this.volunteerVolunteeringService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.volunteerVolunteeringService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateVolunteerVolunteeringDto: UpdateVolunteerVolunteeringDto) {
    return this.volunteerVolunteeringService.update(+id, updateVolunteerVolunteeringDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.volunteerVolunteeringService.remove(+id);
  }
}
