import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Weapon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  manufacturer: string;

  @Column()
  attachments: string;

  @Column()
  color: string;

  @Column()
  magType: string;

  @Column()
  image: string;
}
