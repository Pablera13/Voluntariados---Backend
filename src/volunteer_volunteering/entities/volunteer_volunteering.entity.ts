/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class VolunteerVolunteering {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    volunteerId: number;

    @Column('int')
    volunteeringId: number;
}
