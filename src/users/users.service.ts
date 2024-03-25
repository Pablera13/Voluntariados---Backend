import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ){}


  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(mail: string) {
    return await this.userRepository.findOneBy({mail});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    var updateUser = await this.userRepository.update({id}, updateUserDto);
    return updateUser;
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
