import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }


  @Get(':mail')
  async findOne(@Param('mail') mail: string, @Res() res: Response) {
    const user = await this.usersService.findOne(mail);
    if (user){
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ error: 'User not found' });
  }}

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto, @Res() res: Response) {

    const user = await this.usersService.update(+id, updateUserDto);
    if (user){
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ error: 'User not found' });
    }}


    @Delete(':id')
    async remove(@Param('id') id: number, @Res() res: Response) {

      const user = await this.usersService.findOneById(+id);
      if (user){
      this.usersService.remove(+id);
      return res.status(200).json({ message: 'User deleted successfully' });
    } else {
      return res.status(404).json({ error: 'User not found' });
    }}
    
}
