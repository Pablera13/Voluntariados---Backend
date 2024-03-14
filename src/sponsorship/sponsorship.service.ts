import { Injectable } from '@nestjs/common';
import { CreateSponsorshipDto } from './dto/create-sponsorship.dto';
import { UpdateSponsorshipDto } from './dto/update-sponsorship.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sponsorship } from './entities/Sponsorship.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SponsorshipService {

  constructor(
    @InjectRepository(Sponsorship)
    private SponsorshipRepository: Repository<Sponsorship>,
  ){}

  async create(createSponsorshipDto: CreateSponsorshipDto) {
    return await this.SponsorshipRepository.save(createSponsorshipDto);
  }

  async findAll() {
    return await this.SponsorshipRepository.find();
  }

  async findOne(id: number) {
    return await this.SponsorshipRepository.findOneBy({id});
  }

  async update(id: number, updateSponsorshipDto: UpdateSponsorshipDto) {
    var updateUser = await this.SponsorshipRepository.update({id}, updateSponsorshipDto);
    return updateUser;
  }
  
  async remove(id: number) {
    return await this.SponsorshipRepository.delete(id);
  }
}
