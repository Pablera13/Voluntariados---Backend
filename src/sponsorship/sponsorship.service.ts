import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSponsorshipDto } from './dto/create-sponsorship.dto';
import { UpdateSponsorshipDto } from './dto/update-sponsorship.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sponsorship } from './entities/sponsorship.entity';
import { Organization } from 'src/organization/entities/organization.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SponsorshipService {

  constructor(
    @InjectRepository(Sponsorship)
    private readonly sponsorshiRepository: Repository<Sponsorship>,
    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>
  ){}

  async create(createSponsorshipDto: CreateSponsorshipDto) {
    const organization = await this.validateOrganization(createSponsorshipDto.organizationId);
    return await this.sponsorshiRepository.save({
      ...createSponsorshipDto,
      organization: organization
    });
  }

  async findAll() {
    return await this.sponsorshiRepository.find();
  }

  async findOne(id: number) {
    return await this.sponsorshiRepository.findOneBy({id});
  }

  async update(id: number, updateSponsorshipDto: UpdateSponsorshipDto) {
    const updateSponsorship = await this.sponsorshiRepository.update({id}, updateSponsorshipDto);
    return updateSponsorship;
  }

  async remove(id: number) {
    return await this.sponsorshiRepository.delete(id);
  }

  private async validateOrganization(organizationId: number) {
    const organization = await this.organizationRepository.findOneBy({ id: organizationId });
    if (!organization) {
      throw new BadRequestException('Organization not found');
    }
    return organization;
  }
}
