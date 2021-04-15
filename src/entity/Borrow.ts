import {Entity, PrimaryGeneratedColumn, ManyToOne, DeleteDateColumn, CreateDateColumn} from "typeorm";
import { User } from "./User";
import { Book } from "./Book";

@Entity()
export class Borrow {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: string;

    @DeleteDateColumn()
    deletedAt: string;

    @ManyToOne(() => User, user => user.borrows)
    user: User;

    @ManyToOne(() => Book, book => book.borrows)
    book: Book;
}
