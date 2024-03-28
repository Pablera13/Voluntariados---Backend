import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Company } from '../../company/entities/company.entity';
import { Rating } from '../../ratings/entities/rating.entity';


@Entity()
export class Volunteering {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cedula: number;

    @Column({ length: 500 })
    projectName: string;

    @Column()
    startDate: Date;

    @Column()
    finishDate: Date;

    @Column()
    category: string;

    @Column()
    quotas: string;

    @Column({ length: 500 })
    description: string;

    @Column({ length: 500 })
    contact: string;

    @ManyToOne(type => Company, company => company.volunteerings)
    company: number;

    @OneToMany(type => Rating, rating => rating.volunteering)
    ratings: Rating[];
}
