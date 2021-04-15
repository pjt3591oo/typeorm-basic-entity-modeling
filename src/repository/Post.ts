import {EntityRepository, Repository} from "typeorm";
import {Post} from "../entity/Post";

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {

  findByTitle(title: string, view: number=0) {
    return this.createQueryBuilder("post")
        .where("post.title = :title", { title })
        .andWhere("post.view > :view", { view })
        .getMany();
  }

}