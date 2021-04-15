import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany} from "typeorm";
import { Post } from "./Post";
import { Book } from "./Book";
import { Borrow } from "./Borrow";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(() => Post, post => post.user)
    posts: Post[];

    // @ManyToMany(() => Book, book => book.users)
    // books: Book[];

    @OneToMany(() => Borrow, borrow => borrow.user)
    borrows: Borrow[];
}
