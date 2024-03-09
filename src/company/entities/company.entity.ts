import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cedula:number;

  @Column()
  name:string;

  @Column()
  address:string;
  
  @Column()
  bankaccount:string;

  @Column()
  verified:boolean;  
}


