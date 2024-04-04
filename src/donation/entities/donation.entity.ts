import { Sponsorship } from "src/sponsorship/entities/sponsorship.entity";
import { Volunteer } from "src/volunteer/entities/volunteer.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Donation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @ManyToOne(() => Sponsorship, sponsorship => sponsorship.donations)
    sponsorship: Sponsorship;

    @ManyToOne(() => Volunteer, volunteer => volunteer.donations)
    volunteer: Volunteer;

}
