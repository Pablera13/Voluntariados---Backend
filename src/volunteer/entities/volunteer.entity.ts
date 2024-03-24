/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
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
  Address: string;

  @Column()
  itsVerified: boolean = false;

  @Column()
  userId: number;
}
