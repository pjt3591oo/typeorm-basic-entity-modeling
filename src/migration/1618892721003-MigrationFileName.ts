import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationFileName1618892721003 implements MigrationInterface {
    name = 'MigrationFileName1618892721003'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `post` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `view` int(11) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `age` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `borrow` (`id` int NOT NULL AUTO_INCREMENT, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `userId` int NULL, `bookId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `book` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `count` int(11) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `post` ADD CONSTRAINT `FK_5c1cf55c308037b5aca1038a131` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `borrow` ADD CONSTRAINT `FK_395ef8d1ea4a0ff8f1fa17f67ad` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `borrow` ADD CONSTRAINT `FK_f5c8ea379eee06ce1482f20d101` FOREIGN KEY (`bookId`) REFERENCES `book`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `borrow` DROP FOREIGN KEY `FK_f5c8ea379eee06ce1482f20d101`");
        await queryRunner.query("ALTER TABLE `borrow` DROP FOREIGN KEY `FK_395ef8d1ea4a0ff8f1fa17f67ad`");
        await queryRunner.query("ALTER TABLE `post` DROP FOREIGN KEY `FK_5c1cf55c308037b5aca1038a131`");
        await queryRunner.query("DROP TABLE `book`");
        await queryRunner.query("DROP TABLE `borrow`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `post`");
    }

}
