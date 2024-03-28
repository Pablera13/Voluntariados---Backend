import { Company } from '../../company/entities/company.entity';
import { Volunteer } from '../../volunteer/entities/volunteer.entity';

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn,ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name:string;

  @Column()
  description:string;

  @Column()
  date:Date;
  
  @Column()
  address:string;

  @Column()
  category:string;
  
  @Column()
  quota:number;

  @Column()
  contact:string;

  @ManyToOne(type => Company, company => company.events)
  company :number;

  @ManyToMany(() => Volunteer, volunteer => volunteer.events)
  @JoinTable()
  volunteers: Volunteer[];
}



