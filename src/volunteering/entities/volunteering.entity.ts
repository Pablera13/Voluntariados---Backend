/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Volunteering {

@PrimaryGeneratedColumn()
id: number;

@Column('int')
Cedula: number;

@Column({ length: 500 })
ProyectName: string;

@Column()
StartDate: Date;

@Column()
FinishDate: Date;

@Column()
Category: string;

@Column()
quotas: string;

@Column({length: 500})
descripcion: string;

@Column()
CompanyId: number;

@Column({ length: 500 })
Contact: string;
}
