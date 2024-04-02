/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-Company.dto';
import { UpdateCompanyDto } from './dto/update-Company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/Company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {

  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ){}

  async create(createCompanyDto: CreateCompanyDto) {
    return await this.companyRepository.save(createCompanyDto);
  }

  async findAll() {
    return await this.companyRepository.find();
  }

  async findOne(id: number) {
    return await this.companyRepository.findOneBy({id});
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    var updateUser = await this.companyRepository.update({id}, updateCompanyDto);
    return updateUser;
  }

  async remove(id: number) {
    return await this.companyRepository.delete(id);
  }
}
