import { PartialType } from '@nestjs/mapped-types';
import { CreateVolunteerVolunteeringDto } from './create-volunteer_volunteering.dto';

export class UpdateVolunteerVolunteeringDto extends PartialType(CreateVolunteerVolunteeringDto) {}
