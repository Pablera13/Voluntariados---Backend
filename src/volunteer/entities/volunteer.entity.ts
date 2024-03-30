/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Rating } from '../../ratings/entities/rating.entity';
import { Event } from '../../event/entities/event.entity';
import { User } from '../../users/entities/user.entity';
import { Donation } from '../../donation/entities/donation.entity';
import { Volunteering } from 'src/volunteering/entities/volunteering.entity';

import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable, ManyToMany, OneToOne, JoinColumn } from 'typeorm';
@Entity()
export class Volunteer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
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

  @OneToMany(type => Rating, rating => rating.volunteer)
  ratings: Rating[]

  @ManyToMany(() => Event, event => event.volunteers)
  @JoinTable()
  events: Event[];

  @OneToOne(() => User)
  @JoinColumn()
  user: User

  @OneToMany(type => Donation, donation => donation.volunteer)
  donations: Donation[];

  @ManyToMany(() => Volunteer, volunteer => volunteer.volunteerings)
  @JoinTable()
  volunteerings: Volunteer[];
  
  /*@OneToOne(() => Volunteer)
  @JoinColumn()
  volunteer: Volunteer;*/
}
