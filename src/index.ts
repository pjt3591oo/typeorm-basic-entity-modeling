import "reflect-metadata";
import {createConnection} from "typeorm";
import { User } from "./entity/User";
import { Book } from "./entity/Book";
import { Post } from "./entity/Post";
import { Borrow } from "./entity/Borrow";

import { PostRepository } from './repository/Post';

createConnection().then(async connection => {
    // const postRepository = connection.getCustomRepository(PostRepository);
    // let post = await postRepository.find({
    //     // where: { id: 14 },
    //     relations: ['user']
    // });
    // console.log(post)
    
    // console.log(posts);


    // const user = new User();
    // user.lastName = 'new'
    // user.firstName = 'mung'
    // user.age = 20;

    // const book = new Book();
    // book.name = 'very hard typescript!!'
    // book.count = 17;

    // const savedUser = await connection.manager.save(user);
    // book.save();
    
    // const borrow = new Borrow()
    // borrow.user = user
    // borrow.book = book
    // const savedBorrow = await connection.manager.save(borrow);


    // await connection.manager.softDelete(Borrow, {id: 1});
    // let users = await connection.manager.find(User, {
    //     where: {id: 4},
    //     relations: ["posts", "books"]
    // })
    // console.log(users);

    // let book = await Book.findOne({
    //     where: {id: 4},
    // })
    // let user = await connection.manager.findOne(User, {
    //     where: {id: 8},
    // })
    // await connection.manager.remove(user);
    

    // const postRepository = connection.getCustomRepository(PostRepository);
    // const post = await new Post();
    // post.title = "very easy!!!";
    // post.view = 0;
    // post.user = user;
    // postRepository.save(post);

    // console.log(books);
    // // active record pattern
    // const books = await Book.find();
    // console.log(books);

    // const book = await Book.findByName("mung-1618384046387");
    // console.log(book);

    // // data mapper pattern
    // const postRepository = connection.getCustomRepository(PostRepository);
    
    // const post = new Post();
    // post.title = 'leared typeorm';
    // post.view = 10;
    // postRepository.save(post);
    
    // const post1 = await postRepository.findByTitle('leared typeorm');
    // console.log(post1)
}).catch(error => console.log(error));


   // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");