/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Volunteering } from '../../volunteering/entities/volunteering.entity';
import { Event } from '../../event/entities/event.entity';
import { User } from '../../users/entities/user.entity';
import { Sponsorship } from 'src/sponsorship/entities/sponsorship.entity';

@Entity()
export class Organization {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'int' })
    cedula: number;
  
    @Column()
    name: string;
  
    @Column()
    address: string;

    @Column({ nullable: true })
    imageUrl: string; 
  
    @Column({ type: 'int' })
    bankaccount: number;
  
    @Column()
    verified: boolean;

    @OneToMany(() => Volunteering, volunteering => volunteering.organization, { eager: true })
    volunteerings: Volunteering[];
  
    @OneToMany(() => Event, event => event.organization, { eager: true })
    events: Event[];

    @OneToMany(() => Sponsorship, sponsorship => sponsorship.organization, { eager: true })
    sponsorships: Sponsorship[];
  
    @OneToOne(() => User, { eager: true })
    @JoinColumn()
    user: User;
}

