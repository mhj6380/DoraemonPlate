import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
// import { User } from '../../auth/entities/auth.entity';
// @Index(['user_id'])
@Entity()
export class ChatMessage {
  @PrimaryGeneratedColumn()
  id: number;

  // @JoinColumn({
  //   name: 'room_key',
  // })
  // @Column({ length: 200, unique: true })
  @JoinColumn({ name: 'room_key' })
  @ManyToOne((type) => ChatRoom, (chatRoom) => chatRoom.room_key)
  room_key: string;

  @Column({ length: 1000 })
  message: string;

  @Column({ length: 200 })
  from_user: string;

  @Column({ length: 200 })
  to_user: string;

  @Column({ length: 100, nullable: false })
  nickname: string;

  @Column()
  profile: string;

  @Column()
  insert_datetime: string;

  @Column()
  message_type: string;

  @Column()
  source: string;
}

@Entity()
export class ChatRoom {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({ length: 200, unique: true })
  @JoinColumn({ name: 'room_key' })
  @OneToMany((type) => ChatMessage, (chatMessage) => chatMessage.room_key)
  room_key: string;

  @Column({ length: 1000 })
  last_message: string;

  @Column({ length: 100 })
  last_datetime: string;

  @Column({ length: 150 })
  user_A: string;

  @Column({ length: 150 })
  user_B: string;

  @Column()
  user_A_escape: boolean;

  @Column()
  user_B_escape: boolean;
}
