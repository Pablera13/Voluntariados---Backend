/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Response } from 'express';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Post()
  create(@Body() createOrganizationDto: CreateOrganizationDto) {
    return this.organizationService.create(createOrganizationDto);
  }

  @Get()
  findAll() {
    return this.organizationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    const organization = await this.organizationService.findOne(+id);
    if (organization){
      return res.status(200).json(organization);
    } else {
      return res.status(404).json({ error: 'Organization not found' });
  }}

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateOrganizationDto: UpdateOrganizationDto, @Res() res: Response) {

    const organization = await this.organizationService.update(+id, updateOrganizationDto);
    if (organization){
      return res.status(200).json(organization);
    } else {
      return res.status(404).json({ error: 'Organization not found' });
    }}


  @Delete(':id')
    async remove(@Param('id') id: number, @Res() res: Response) {

      const organization = await this.organizationService.findOne(+id);
      if (organization){
      this.organizationService.remove(+id);
      return res.status(200).json({ message: 'Organization deleted successfully' });
    } else {
      return res.status(404).json({ error: 'Organization not found' });
    }}


}
