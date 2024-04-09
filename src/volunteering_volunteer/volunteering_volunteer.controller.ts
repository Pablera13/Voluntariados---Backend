import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { Response } from 'express';
import { VolunteeringVolunteerService } from './volunteering_volunteer.service';
import { CreateVolunteeringVolunteerDto } from './dto/create-volunteering_volunteer.dto';

@Controller('volunteering-volunteer')
export class VolunteeringVolunteerController {
  constructor(private readonly volunteeringVolunteerService: VolunteeringVolunteerService) {}

  @Post()
  create(@Body() createVolunteeringVolunteerDto: CreateVolunteeringVolunteerDto) {
    return this.volunteeringVolunteerService.create(createVolunteeringVolunteerDto);
  }

  @Get()
  findAll() {
    return this.volunteeringVolunteerService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.volunteeringVolunteerService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateVolunteeringVolunteerDto: UpdateVolunteeringVolunteerDto) {
  //   return this.volunteeringVolunteerService.update(+id, updateVolunteeringVolunteerDto);
  // }

  @Delete(':id')
    async remove(@Param('id') id: number, @Res() res: Response) {

      const volunteeringVolunteer = await this.volunteeringVolunteerService.findOne(+id);
      if (volunteeringVolunteer){
      this.volunteeringVolunteerService.remove(+id);
      return res.status(200).json({ message: 'Relationship deleted successfully' });
    } else {
      return res.status(404).json({ error: 'Relationship not found' });
    }}



}
