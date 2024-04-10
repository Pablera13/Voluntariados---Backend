import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany } from 'typeorm';
import { Organization } from '../../organization/entities/organization.entity';
import { Rating } from '../../ratings/entities/rating.entity';
import { Volunteer } from '../../volunteer/entities/volunteer.entity';
import { VolunteeringVolunteer } from 'src/volunteering_volunteer/entities/volunteering_volunteer.entity';


@Entity()
export class Volunteering {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    projectName: string;

    @Column()
    startDate: Date;

    @Column()
    finishDate: Date;

    @Column()
    category: string;

    @Column({ type: 'int' })
    quotas: string;

    @Column({ length: 500 })
    description: string;

    @Column({ length: 500 })
    requirements : string;

    @Column({ length: 500 })
    contact: string;

    @ManyToOne(() => Organization, organization => organization.volunteerings)
    organization: Organization;

    @OneToMany(() => Rating, rating => rating.volunteering, {eager: true})
    ratings: Rating[];

    // @ManyToMany(() => Volunteer, volunteer => volunteer.volunteerings, {eager: true})
    // volunteers: Volunteer[];

    @OneToMany(() => VolunteeringVolunteer, volunteeringvolunteer => volunteeringvolunteer.volunteering, {eager: true})
    volunteeringvolunteers: VolunteeringVolunteer[];
}
