import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany } from 'typeorm';
import { Company } from '../../company/entities/company.entity';
import { Rating } from '../../ratings/entities/rating.entity';
import { Volunteer } from '../../volunteer/entities/volunteer.entity';


@Entity()
export class Volunteering {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    cedula: number;

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
    contact: string;

    @ManyToOne(() => Company, company => company.volunteerings)
    company: Company;

    @OneToMany(() => Rating, rating => rating.volunteering)
    ratings: Rating[];

    @ManyToMany(() => Volunteer, volunteer => volunteer.volunteerings)
    volunteers: Volunteer[];
}
