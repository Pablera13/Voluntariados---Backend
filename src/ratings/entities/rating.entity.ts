/* eslint-disable prettier/prettier */
import { Volunteer } from '../../volunteer/entities/volunteer.entity';
import { Volunteering } from '../../volunteering/entities/volunteering.entity';

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';

@Entity()
export class Rating {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column('int')
  stars: number;

  @CreateDateColumn()
  date: Date;

  @ManyToOne(type => Volunteering, volunteering => volunteering.ratings)
  volunteering : Volunteering

  @ManyToOne(type => Volunteer, volunteer => volunteer.ratings)
  volunteer : Volunteer
}

