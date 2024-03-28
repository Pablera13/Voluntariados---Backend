/* eslint-disable prettier/prettier */
import { Volunteer } from '../../volunteer/entities/volunteer.entity';
import { Volunteering } from '../../volunteering/entities/volunteering.entity';

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Rating {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column('int')
  stars: number;

  @Column()
  date: Date;

  @ManyToOne(type => Volunteering, volunteering => volunteering.ratings)
  volunteering : number

  @ManyToOne(type => Volunteer, volunteer => volunteer.ratings)
  volunteer : number
}

