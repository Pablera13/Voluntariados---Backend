import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name:string;

  @Column()
  description:string;

  @Column()
  date:Date;
  
  @Column()
  address:string;

  @Column()
  category:string;
  
  @Column()
  quota:number;

  @Column()
  contact:string;
}


