import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VolunteeringVolunteerService } from './volunteering_volunteer.service';
import { CreateVolunteeringVolunteerDto } from './dto/create-volunteering_volunteer.dto';
import { UpdateVolunteeringVolunteerDto } from './dto/update-volunteering_volunteer.dto';

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.volunteeringVolunteerService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateVolunteeringVolunteerDto: UpdateVolunteeringVolunteerDto) {
  //   return this.volunteeringVolunteerService.update(+id, updateVolunteeringVolunteerDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.volunteeringVolunteerService.remove(+id);
  }
}
