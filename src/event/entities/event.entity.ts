import { Company } from '../../company/entities/company.entity';
import { Volunteer } from '../../volunteer/entities/volunteer.entity';

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn,ManyToMany } from 'typeorm';

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
  
  @Column('int')
  quota:number;

  @Column()
  contact:string;

  @ManyToOne(() => Company, company => company.events)
  company : Company;

  @ManyToMany(() => Volunteer, volunteer => volunteer.events)
  volunteers: Volunteer[];
}



