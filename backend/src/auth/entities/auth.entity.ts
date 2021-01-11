import { Entity, Column, PrimaryGeneratedColumn, Index, BeforeInsert } from 'typeorm';
import * as bcrypt from "bcryptjs";

@Entity()
// @Index(['user_id']) 
export class User {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column({ length: 40, unique: true }) 
  user_id: string;    

  @Column({ length: 256, nullable: false })
  password: string;
 
  @Column({ length: 100 })
  nickname: string;  

  // @Column()  
  // level: number; 

  @Column()  
  sex: string;  

  @BeforeInsert() 
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 10);
  }

}