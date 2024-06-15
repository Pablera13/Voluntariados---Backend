import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateVolunteeringVolunteerDto } from './dto/create-volunteering_volunteer.dto';
import { UpdateVolunteeringVolunteerDto } from './dto/update-volunteering_volunteer.dto';
import { Volunteer } from 'src/volunteer/entities/volunteer.entity';
import { Volunteering } from 'src/volunteering/entities/volunteering.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VolunteeringVolunteer } from './entities/volunteering_volunteer.entity';

@Injectable()
export class VolunteeringVolunteerService {

  constructor(
    
    @InjectRepository(VolunteeringVolunteer)
    private readonly VolunteeringVolunteerRepository: Repository<VolunteeringVolunteer>,
    @InjectRepository(Volunteer)
    private readonly volunteerRepository: Repository<Volunteer>,
    @InjectRepository(Volunteering)
    private readonly volunteeringRepository: Repository<Volunteering>
  ){}


  async create(createVolunteeringVolunteerDto: CreateVolunteeringVolunteerDto) {
    
    const volunteer = await this.volunteerRepository.findOneBy({
      id: createVolunteeringVolunteerDto.volunteerId,
    });

    const volunteering = await this.validateVolunteering(createVolunteeringVolunteerDto.volunteeringId);


    return await this.VolunteeringVolunteerRepository.save({
      volunteer: volunteer,
      volunteering: volunteering
    });
  }

  async findAll() {
    return await this.VolunteeringVolunteerRepository.find();
  }

  async findOne(id: number) {
    return await this.VolunteeringVolunteerRepository.findOneBy({ id })
  }

  async remove(id: number) {
    return await this.VolunteeringVolunteerRepository.delete(id);
  }

  private async validateVolunteer(volunteerId: number) {
    const volunteer = await this.volunteerRepository.findOneBy({ id: volunteerId });
    if (!volunteer) {
      throw new BadRequestException('Volunteer not found');
    }
    return volunteer;
  }

  private async validateVolunteering(volunteeringId: number) {
    const volunteering = await this.volunteeringRepository.findOneBy({ id: volunteeringId });
    if (!volunteering) {
      throw new BadRequestException('Volunteering not found');
    }
    return volunteering;
  }
}
