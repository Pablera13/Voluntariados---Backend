import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { Response } from 'express';
import { SponsorshipService } from './sponsorship.service';
import { CreateSponsorshipDto } from './dto/create-sponsorship.dto';
import { UpdateSponsorshipDto } from './dto/update-sponsorship.dto';

@Controller('sponsorship')
export class SponsorshipController {
  constructor(private readonly sponsorshipService: SponsorshipService) {}

  @Post()
  create(@Body() createSponsorshipDto: CreateSponsorshipDto) {
    return this.sponsorshipService.create(createSponsorshipDto);
  }

  @Get()
  findAll() {
    return this.sponsorshipService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    const sponsorship = await this.sponsorshipService.findOne(+id);
    if (sponsorship){
      return res.status(200).json(sponsorship);
    } else {
      return res.status(404).json({ error: 'Sponsorship not found' });
  }}

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateSponsorshipDto: UpdateSponsorshipDto, @Res() res: Response) {

    const sponsorship = await this.sponsorshipService.update(+id, updateSponsorshipDto);
    if (sponsorship){
      return res.status(200).json(sponsorship);
    } else {
      return res.status(404).json({ error: 'Sponsorship not found' });
    }}

  @Delete(':id')
    async remove(@Param('id') id: number, @Res() res: Response) {

      const sponsorship = await this.sponsorshipService.findOne(+id);
      if (sponsorship){
      this.sponsorshipService.remove(+id);
      return res.status(200).json({ message: 'Sponsorship deleted successfully' });
    } else {
      return res.status(404).json({ error: 'Sponsorship not found' });
    }}


}
