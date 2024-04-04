import { Volunteer } from "src/volunteer/entities/volunteer.entity";
import { Event } from "src/event/entities/event.entity";

import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EventVolunteer {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Event, (event) => event.eventvolunteers)
    event: Event

    @ManyToOne(() => Volunteer, (volunteer) => volunteer.eventvolunteers)
    volunteer: Volunteer
    
}
