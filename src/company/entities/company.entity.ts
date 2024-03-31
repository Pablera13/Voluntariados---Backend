/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, JoinColumn  } from 'typeorm';
import { Volunteering } from '../../volunteering/entities/volunteering.entity';
import { Event } from '../../event/entities/event.entity';
import { Sponsorship } from '../../sponsorship/entities/sponsorship.entity';
import { User } from '../../users/entities/user.entity';


@Entity()
export class Company {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  cedula: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column('int')
  bankaccount: string;

  @Column()
  verified: boolean;

  @OneToMany(() => Volunteering, volunteering => volunteering.company)
  volunteerings: Volunteering[];

  @OneToMany(() => Event, event => event.company)
  events: Event[];

  @OneToMany(() => Sponsorship, sponsorship => sponsorship.company)
  sponsorships: Sponsorship[];

  @OneToOne(() => User)
  @JoinColumn()
  user: User
}


