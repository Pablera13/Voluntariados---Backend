/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
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

  @OneToOne(() => Company, company => company.user)
  company: Company;

  @OneToOne(() => Volunteer, volunteer => volunteer.user)
  volunteer: Volunteer;

} 
