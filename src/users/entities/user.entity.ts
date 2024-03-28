import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from '../../company/entities/company.entity';
import { Volunteer } from '../../volunteer/entities/volunteer.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mail: string;

  @Column()
  password: string;

  @OneToOne(type => Company, company => company.user)
  company: number;

  @OneToOne(type => Volunteer, volunteer => volunteer.user)
  volunteer: number;
} 
