/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { Response } from 'express';

@Controller('rating')
export class RatingsController {
  constructor(private readonly ratingsService: RatingsService) {}

  @Post()
  create(@Body() createRatingDto: CreateRatingDto) {
    return this.ratingsService.create(createRatingDto);
  }

  @Get()
  findAll() {
    return this.ratingsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    const rating = await this.ratingsService.findOne(+id);
    if (rating){
      return res.status(200).json(rating);
    } else {
      return res.status(404).json({ error: 'Rating not found' });
  }}


  @Patch(':id')
  update(@Param('id') id: number, @Body() updateRatingDto: UpdateRatingDto) {
    return this.ratingsService.update(+id, updateRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ratingsService.remove(+id);
  }
}
