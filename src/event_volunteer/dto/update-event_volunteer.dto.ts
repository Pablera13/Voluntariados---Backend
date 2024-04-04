import { PartialType } from '@nestjs/mapped-types';
import { CreateEventVolunteerDto } from './create-event_volunteer.dto';

export class UpdateEventVolunteerDto extends PartialType(CreateEventVolunteerDto) {}
