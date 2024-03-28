import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn  } from 'typeorm';
import { Volunteering } from '../../volunteering/entities/volunteering.entity';
import { Event } from '../../event/entities/event.entity';
import { Sponsorship } from '../../sponsorship/entities/sponsorship.entity';
import { User } from '../../users/entities/user.entity';


@Entity()
export class Company {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cedula: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  bankaccount: string;

  @Column()
  verified: boolean;

  @OneToMany(type => Volunteering, volunteering => volunteering.company)
  volunteerings: Volunteering[];

  @OneToMany(type => Event, event => event.company)
  events: Event[];

  @OneToMany(type => Sponsorship, sponsorship => sponsorship.company)
  sponsorships: Sponsorship[];

  @OneToOne (type => User, user => user.company , {onDelete: 'CASCADE'})
  user: number;
}


