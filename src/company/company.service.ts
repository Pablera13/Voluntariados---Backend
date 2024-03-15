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
    private CompanyRepository: Repository<Company>,
  ){}

  async create(createCompanyDto: CreateCompanyDto) {
    return await this.CompanyRepository.save(createCompanyDto);
  }

  async findAll() {
    return await this.CompanyRepository.find();
  }

  async findOne(id: number) {
    return await this.CompanyRepository.findOneBy({id});
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    var updateUser = await this.CompanyRepository.update({id}, updateCompanyDto);
    return updateUser;
  }

  async remove(id: number) {
    return await this.CompanyRepository.delete(id);
  }
}
