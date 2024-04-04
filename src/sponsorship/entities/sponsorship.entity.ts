import { Donation } from "src/donation/entities/donation.entity";
import { Organization } from "src/organization/entities/organization.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @ManyToOne (() => Organization, organization => organization.sponsorships)
  organization:Organization;

  @OneToMany (() => Donation, donation => donation.sponsorship, {eager: true})
  donations:Donation[];

}
