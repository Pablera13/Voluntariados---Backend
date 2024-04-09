import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { DonationService } from './donation.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
import { Response } from 'express';

@Controller('donation')
export class DonationController {
  constructor(private readonly donationService: DonationService) {}

  @Post()
  create(@Body() createDonationDto: CreateDonationDto) {
    return this.donationService.create(createDonationDto);
  }

  @Get()
  findAll() {
    return this.donationService.findAll();
  }


  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    const donation = await this.donationService.findOne(+id);
    if (donation){
      return res.status(200).json(donation);
    } else {
      return res.status(404).json({ error: 'Donation not found' });
  }}

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateDonationDto: UpdateDonationDto, @Res() res: Response) {
    const donation = await this.donationService.update(+id, updateDonationDto);
    if (donation){
      return res.status(200).json(donation);
    } else {
      return res.status(404).json({ error: 'Donation not found' });
    }}


  @Delete(':id')
    async remove(@Param('id') id: number, @Res() res: Response) {
      const donation = await this.donationService.findOne(+id);
      if (donation){
      this.donationService.remove(+id);
      return res.status(200).json({ message: 'Donation deleted successfully' });
    } else {
      return res.status(404).json({ error: 'Donation not found' });
    }}


}
