import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable} from "typeorm";
import { User } from "./User";
import { Borrow } from "./Borrow";

@Entity()
export class Book extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'int', width: 11 })
  count: number;

  @CreateDateColumn()
  createdAt: string;
  
  @UpdateDateColumn()
  updatedAt: string;

  @ManyToMany(type => User, user => user.books, {
    cascade: true, // equal: pass true
    onDelete: 'CASCADE' // "RESTRICT"|"CASCADE"|"SET NULL"
  })
  @JoinTable()
  users: User[];

  @ManyToMany(() => Borrow, borrow => borrow.book)
  borrows: Borrow[];

  static findByName(name: string, count: number=0) {
    return this.createQueryBuilder("book")
        .where("book.name = :name", { name })
        .andWhere("book.count > :count", { count })
        .getMany();
  }
}
