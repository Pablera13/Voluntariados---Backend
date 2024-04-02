import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Sponsorship } from '../../sponsorship/entities/sponsorship.entity';
import { Volunteer } from '../../volunteer/entities/volunteer.entity';

@Entity()
export class Donation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount:number;

  @ManyToOne(() => Sponsorship, sponsorship => sponsorship.donations)
  sponsorship: Sponsorship;

  @ManyToOne(() => Volunteer, volunteer => volunteer.donations)
  volunteer: Volunteer;

}


