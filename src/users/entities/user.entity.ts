/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Volunteer } from '../../volunteer/entities/volunteer.entity';
import { Organization } from 'src/organization/entities/organization.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mail: string;

  @Column()
  password: string;

  

  @OneToOne(() => Organization, organization => organization.user)
  organization: Organization;

  @OneToOne(() => Volunteer, volunteer => volunteer.user)
  volunteer: Volunteer;

} 
