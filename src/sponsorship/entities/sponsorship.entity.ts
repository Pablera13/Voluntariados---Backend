import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from '../../company/entities/company.entity';
import { Donation } from '../../donation/entities/donation.entity';

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

  @ManyToOne (type => Company, company => company.sponsorships)
  company:number;

  @OneToMany (type => Donation, donation => donation.sponsorship)
  donations:Donation[];
}


