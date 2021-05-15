import { RESTDataSource } from "apollo-datasource-rest";
import { User } from "./user-type";

export class UserDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://jsonplaceholder.typicode.com/users";
  }

  async getUsers(): Promise<User[]> {
    return this.get("/");
  }

  async getUser(userId: number): Promise<User> {
    return this.get(`/${userId}`);
  }
}
