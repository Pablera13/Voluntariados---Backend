/* eslint-disable prettier/prettier */
import { Rating } from '../../ratings/entities/rating.entity';
import { Event } from '../../event/entities/event.entity';
import { User } from '../../users/entities/user.entity';

import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable,ManyToMany,OneToOne } from 'typeorm';
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
  ratings : Rating[]

  @ManyToMany(() => Event, event => event.volunteers)
  @JoinTable()
  events: Event[];

  @OneToOne (type => User, user => user.volunteer , {onDelete: 'CASCADE'})
  user: number;
}
