# Awesome Project Build with TypeORM

[Relation](https://blog.naver.com/pjt3591oo/222310744958)
[Active Record](https://blog.naver.com/pjt3591oo/222309864102)

```sql
INSERT INTO user(firstName, lastName, age) VALUES("Mung", "1", 29);
INSERT INTO user(firstName, lastName, age) VALUES("Mung", "2", 29);
INSERT INTO user(firstName, lastName, age) VALUES("Mung", "3", 29);
INSERT INTO user(firstName, lastName, age) VALUES("Mung", "4", 29);
INSERT INTO user(firstName, lastName, age) VALUES("Mung", "5", 29);
INSERT INTO user(firstName, lastName, age) VALUES("Mung", "6", 29);
INSERT INTO user(firstName, lastName, age) VALUES("Mung", "7", 29);
INSERT INTO user(firstName, lastName, age) VALUES("Mung", "8", 29);
INSERT INTO user(firstName, lastName, age) VALUES("Mung", "9", 29);
```

```sql
INSERT INTO book(name, count) VALUES("Python", 10);
INSERT INTO book(name, count) VALUES("Javascript", 10);
INSERT INTO book(name, count) VALUES("Dart", 11);
INSERT INTO book(name, count) VALUES("Django", 13);
INSERT INTO book(name, count) VALUES("Express", 9);
INSERT INTO book(name, count) VALUES("Nest", 13);
INSERT INTO book(name, count) VALUES("Typescript", 8);
INSERT INTO book(name, count) VALUES("Flutter", 0);
INSERT INTO book(name, count) VALUES("Kotlin", 3);
```

```sql
INSERT INTO post(title, view, userId) VALUES("Python Hard", 10, 4);
INSERT INTO post(title, view, userId) VALUES("Javascript Easy", 10, 4);
INSERT INTO post(title, view, userId) VALUES("Dart Fun!!", 11, 6);
INSERT INTO post(title, view, userId) VALUES("What is Django", 13, 6);
INSERT INTO post(title, view, userId) VALUES("Hard Express", 9, 6);
INSERT INTO post(title, view, userId) VALUES("Easy Nest", 13, 8);
INSERT INTO post(title, view, userId) VALUES("Complex Typescript", 8, 8);
INSERT INTO post(title, view, userId) VALUES("Important Flutter", 0, 9);
INSERT INTO post(title, view, userId) VALUES("Complex Kotlin", 3, 10);
```

```sql
INSERT INTO post(title, view, userId) VALUES("Python Hard", 10, 4);
INSERT INTO post(title, view, userId) VALUES("Javascript Easy", 10, 4);
INSERT INTO post(title, view, userId) VALUES("Dart Fun!!", 11, 6);
INSERT INTO post(title, view, userId) VALUES("What is Django", 13, 6);
INSERT INTO post(title, view, userId) VALUES("Hard Express", 9, 6);
INSERT INTO post(title, view, userId) VALUES("Easy Nest", 13, 8);
INSERT INTO post(title, view, userId) VALUES("Complex Typescript", 8, 8);
INSERT INTO post(title, view, userId) VALUES("Important Flutter", 0, 9);
INSERT INTO post(title, view, userId) VALUES("Complex Kotlin", 3, 10);
```

```sql
INSERT INTO book_users_user(userId, bookId) VALUES(4, 3);
INSERT INTO book_users_user(userId, bookId) VALUES(4, 4);
INSERT INTO book_users_user(userId, bookId) VALUES(4, 5);
INSERT INTO book_users_user(userId, bookId) VALUES(4, 6);
INSERT INTO book_users_user(userId, bookId) VALUES(5, 6);
INSERT INTO book_users_user(userId, bookId) VALUES(5, 4);
INSERT INTO book_users_user(userId, bookId) VALUES(5, 7);
INSERT INTO book_users_user(userId, bookId) VALUES(6, 10);
INSERT INTO book_users_user(userId, bookId) VALUES(6, 11);
```