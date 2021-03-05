import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeUpdate,
  OneToOne,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';
import { User } from '../../auth/entities/auth.entity';

@Entity()
export class Board {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  topic: string;

  @Column({ length: 200 })
  title: string;

  @Column()
  content: string;

  @Column()
  author: string;

  @Column({ length: 200 })
  thumbnail?: string;

  @Column({ length: 100, nullable: false })
  tags: string;

  @Column()
  likeCount: number;

  @Column()
  scrapCount: number;

  @Column()
  shareCount: number;

  @Column()
  viewCount: number;

  @Column()
  commentCount: number;

  @Column()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @JoinColumn({ name: 'comments' })
  @OneToMany((type) => Comment, (comment) => comment.board)
  comments: Comment[];

  @OneToOne((type) => User)
  @JoinColumn({ name: 'author', referencedColumnName: 'user_id' })
  authorInfo: User;
}

@Entity('boardComment')
@Tree('materialized-path')
export class Comment {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  boardId: number;

  @Column({ length: 1000 })
  content: string;

  @Column({ length: 200 })
  author: string;

  @Column({ length: 200 })
  topic: string;

  @Column()
  likeCount: number;

  @Column()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  isChildren: boolean;

  @Column()
  childCount: number;

  @Column()
  parentId: number;

  @ManyToOne((type) => Board, (board) => board.comments)
  @JoinColumn({ name: 'boardId' })
  board: Board;

  @OneToOne((type) => User)
  @JoinColumn({ name: 'author', referencedColumnName: 'user_id' })
  authorInfo: User;

  // @OneToMany((type) => Comment, (comment) => comment.parent)
  @TreeChildren()
  children: Comment[];

  // @ManyToOne((type) => Comment, (comment) => comment.children)
  @TreeParent()
  parent: Comment;
}

@Entity('boardLike')
export class Like {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  boardId: number;

  @Column()
  createdAt: Date;
}

@Entity('boardScrap')
export class Scrap {
  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  boardId: number;

  @Column()
  createdAt: Date;
}
