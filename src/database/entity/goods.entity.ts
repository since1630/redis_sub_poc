import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Goods {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookingLimit: number;

  @Column()
  bookingCount: number;
}
