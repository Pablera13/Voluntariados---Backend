import { PartialType } from '@nestjs/mapped-types';
import { CreateVolunteeringVolunteerDto } from './create-volunteering_volunteer.dto';

export class UpdateVolunteeringVolunteerDto extends PartialType(CreateVolunteeringVolunteerDto) {}
