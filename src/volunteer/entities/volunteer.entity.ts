import { Rating } from '../../ratings/entities/rating.entity';
import { Event } from '../../event/entities/event.entity';
import { User } from '../../users/entities/user.entity';
import { Volunteering } from '../../volunteering/entities/volunteering.entity';

import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable, ManyToMany, OneToOne, JoinColumn } from 'typeorm';
import { Donation } from 'src/donation/entities/donation.entity';
import { VolunteeringVolunteer } from 'src/volunteering_volunteer/entities/volunteering_volunteer.entity';
import { EventVolunteer } from 'src/event_volunteer/entities/event_volunteer.entity';
@Entity()
export class Volunteer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  cedula: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  lastName1: string;

  @Column({ length: 500 })
  lastName2: string;

  @Column()
  birthday: Date;

  @Column()
  address: string;

  @Column()
  itsVerified: boolean = false;

  @OneToMany(() => Rating, rating => rating.volunteer, {eager: true})
  ratings: Rating[]

  // @ManyToMany(() => Event, event => event.volunteers)
  // @JoinTable()
  // events: Event[];

  @Column()
  userId:number;
  
  @OneToOne(() => User, {eager: true})
  @JoinColumn()
  user: User;

  @OneToMany(() => Donation, donation => donation.volunteer, {eager: true})
  donations: Donation[];

  // @ManyToMany(() => Volunteering, volunteering => volunteering.volunteers)
  // @JoinTable()
  // volunteerings: Volunteering[];
  
  @OneToMany(() => VolunteeringVolunteer, volunteeringvolunteer => volunteeringvolunteer.volunteering, {eager: true})
  volunteeringvolunteers: VolunteeringVolunteer[];

  @OneToMany(() => EventVolunteer, eventvolunteer => eventvolunteer.volunteer, {eager: true})
  eventvolunteers: EventVolunteer[];
}
