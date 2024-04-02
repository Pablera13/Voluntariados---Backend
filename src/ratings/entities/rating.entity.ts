/* eslint-disable @typescript-eslint/no-unused-vars */
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

  @Column({ type: 'int' })
  stars: number;

  @CreateDateColumn()
  date: Date;

  @ManyToOne(() => Volunteering, volunteering => volunteering.ratings)
  volunteering : Volunteering;

  @ManyToOne(() => Volunteer, volunteer => volunteer.ratings)
  volunteer : Volunteer;
}

