# Awesome Project Build with TypeORM

[Relation](https://blog.naver.com/pjt3591oo/222310744958)
[Active Record](https://blog.naver.com/pjt3591oo/222309864102)

## 더미 데이터

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

## 테이블 삭제

```sql
> DROP TABLE book;
> DROP TABLE borrow;
> DROP TABLE post;
> DROP TABLE user;
```

## 마이그레이션

`타임스탬프-[-n 옵션].ts` 마이그레이션 파일 생성

* 마이그레이션 생성(generate)

```sh
$ ts-node ./node_modules/typeorm/cli.js migration:generate -n MigrationFileName
```

스키마(entity) 변동이 없다면 마이그레이션 생성하지 않음. 다음과 같이 경고문 출력

```
No changes in database schema were found - cannot generate a migration. To create a new empty migration use "typeorm migration:create" command
```

* 마이그레이션 생성(create)

```sh
$ ts-node ./node_modules/typeorm/cli.js migration:create -n MigrationFileName
```

스키마(entity) 변동이 없어도 마이그레이션 생성

* 실행(run)

```sh
$ ts-node ./node_modules/typeorm/cli.js migration:run
```

* 되돌리기(revert)

```sh
$ ts-node ./node_modules/typeorm/cli.js migration:revert
```


