import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  firstName: string;

  @Column('text')
  middleName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
