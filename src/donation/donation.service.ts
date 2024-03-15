import { Injectable } from '@nestjs/common';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Donation } from './entities/Donation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DonationService {

  constructor(
    @InjectRepository(Donation)
    private DonationRepository: Repository<Donation>,
  ){}

  async create(createDonationDto: CreateDonationDto) {
    return await this.DonationRepository.save(createDonationDto);
  }

  async findAll() {
    return await this.DonationRepository.find();
  }

  async findOne(id: number) {
    return await this.DonationRepository.findOneBy({id});
  }

  async update(id: number, updateDonationDto: UpdateDonationDto) {
    var updateUser = await this.DonationRepository.update({id}, updateDonationDto);
    return updateUser;
  }

  async remove(id: number) {
    return await this.DonationRepository.delete(id);
  }
}
