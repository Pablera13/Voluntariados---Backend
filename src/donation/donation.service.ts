import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
import { Donation } from './entities/donation.entity';
import { Repository } from 'typeorm';
import { Sponsorship } from 'src/sponsorship/entities/sponsorship.entity';
import { Volunteer } from 'src/volunteer/entities/volunteer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DonationService {

  constructor(
    @InjectRepository(Donation)
    private readonly donationRepository: Repository<Donation>,
    @InjectRepository(Sponsorship)
    private readonly sponsorshipRepository: Repository<Sponsorship>,
    @InjectRepository(Volunteer)
    private readonly volunteerRepository: Repository<Volunteer>
    
  ) { }

  async create(createDonationDto: CreateDonationDto) {
    const sponsorship = await this.validateDonation(createDonationDto.sponsorshipId);
    const volunteer = await this.validateVolunteer(createDonationDto.volunteerId);

    return await this.donationRepository.save({
      ...createDonationDto,
      sponsorship: sponsorship,
      volunteer: volunteer
    });
  }

  async findAll() {
    return await this.donationRepository.find();
  }

  async findOne(id: number) {
    return await this.donationRepository.findOneBy({ id })
  }

  async update(id: number, updateDonationDto: UpdateDonationDto) {
    await this.donationRepository.update({id}, updateDonationDto);
    const donation = await this.findOne(id)
    return donation;
  }

  async remove(id: number) {
    return await this.donationRepository.delete(id);
  }

  private async validateDonation(sponsorshipId: number) {
    const sponsorship = await this.sponsorshipRepository.findOneBy({ id: sponsorshipId });
    if (!sponsorship) {
      throw new BadRequestException('Sponsorship not found');
    }
    return sponsorship;
  }

  private async validateVolunteer(volunteerId: number) {
    const volunteer = await this.volunteerRepository.findOneBy({ id: volunteerId });
    if (!volunteer) {
      throw new BadRequestException('Volunteer not found');
    }
    return volunteer;
  }

}
