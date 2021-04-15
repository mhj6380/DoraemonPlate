import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  BeforeInsert,
} from 'typeorm';

@Entity()
export class Splash {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  liveVersionAndroid: string;

  @Column({ length: 50 })
  liveVersionIOS: string;

  @Column({ length: 255 })
  splashImage: string;

  @Column()
  splashDuration: number;
}
