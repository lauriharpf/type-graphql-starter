import { RESTDataSource } from "apollo-datasource-rest";
import { Post } from "./post-type";

export class PostDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://jsonplaceholder.typicode.com/posts";
  }

  async getPosts(): Promise<Post[]> {
    return this.get("/");
  }
}
