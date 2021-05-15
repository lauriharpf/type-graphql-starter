import { PostDataSource } from "./posts/post-data-source";
import { UserDataSource } from "./users/user-data-source";

export interface Context {
  dataSources: {
    postDataSource: PostDataSource;
    userDataSource: UserDataSource;
  };
}
