import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne} from "typeorm";
import { User } from "./User";


@Entity()
export class Post{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'int', width: 11 })
  view: number;

  @CreateDateColumn()
  createdAt: string;
  
  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => User, user => user.posts, {
    cascade: true, // equal: pass true
    onDelete: 'CASCADE' // "RESTRICT"|"CASCADE"|"SET NULL"
  })
  user: User;
}
