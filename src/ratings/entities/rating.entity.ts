/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column('int')
  volunteeringId: number;

  @Column('int')
  volunteerId: number;
}
