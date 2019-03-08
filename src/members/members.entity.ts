import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  firstName: string;

  @Column('text')
  middleName: string;

  @Column()
  lastName: string;

  @Column()
  callSign: string;

  @Column()
  weaponIds: string;

  @Column()
  rank: string;
}
