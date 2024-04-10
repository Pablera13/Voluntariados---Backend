import { EventVolunteer } from 'src/event_volunteer/entities/event_volunteer.entity';
import { Organization } from '../../organization/entities/organization.entity';
import { Volunteer } from '../../volunteer/entities/volunteer.entity';

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn,ManyToMany, OneToMany } from 'typeorm';

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
  
  @Column({ type: 'int' })
  quota:number;

  @Column()
  contact:string;

  @ManyToOne(() => Organization, organization => organization.events)
  organization : Organization;

  // @ManyToMany(() => Volunteer, volunteer => volunteer.events)
  // volunteers: Volunteer[];

  @OneToMany(() => EventVolunteer, eventvolunteer => eventvolunteer.event, {eager: true})
  eventvolunteers: EventVolunteer[];
}



