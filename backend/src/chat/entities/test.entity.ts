import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @OneToMany((type) => Tweet, (tweet) => tweet.user)
  tweets: Tweet[];
}

@Entity({ name: 'tweets' })
export class Tweet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 80 })
  title: string;

  @Column({ type: 'varchar', length: 300 })
  content: string;

  // @ManyToOne((type) => User, (user) => user.tweets, {onDelete:'CASCADE'})
  @JoinColumn({ name: 'user_id' })
  @ManyToOne((type) => User, (user) => user.tweets)
  user: User;
}
