import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sponsorship {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name:string;

  @Column()
  description:string;

  @Column()
  startdate: Date;
  
  @Column()
  enddate: Date;

  @Column()
  goal:number;
  
  @Column()
  state:boolean;
  
}


