/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class OrganizationService {


  constructor(
    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  async create(createOrganizationDto: CreateOrganizationDto) {
    const user = await this.validateUser(createOrganizationDto.userId);
    return await this.organizationRepository.save({
      ...createOrganizationDto,
      user: user
    });
  }

  async findAll() {
    return await this.organizationRepository.find();
  }

  async findOne(id: number) {
    return await this.organizationRepository.findOneBy({id});
  }

  async update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    await this.organizationRepository.update({id}, updateOrganizationDto);
    const organization = await this.findOne(id)
    return organization;
  }

  async remove(id: number) {
    return await this.organizationRepository.delete(id);
  }

  private async validateUser(userId: number) {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return user;
  }
}
