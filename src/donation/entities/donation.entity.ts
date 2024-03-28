import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Sponsorship } from '../../sponsorship/entities/sponsorship.entity';

@Entity()
export class Donation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount:number;

  @ManyToOne(type => Sponsorship, sponsorship => sponsorship.donations)
  sponsorship: number

}


