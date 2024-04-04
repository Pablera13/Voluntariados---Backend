import { Volunteer } from "src/volunteer/entities/volunteer.entity";
import { Volunteering } from "src/volunteering/entities/volunteering.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class VolunteeringVolunteer {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Volunteering, (volunteering) => volunteering.volunteeringvolunteers)
    volunteering: Volunteering

    @ManyToOne(() => Volunteer, (volunteer) => volunteer.volunteeringvolunteers)
    volunteer: Volunteer
}
