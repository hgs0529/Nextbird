import { Posts } from "./post";
import { User } from "./user";

export interface ActionProps {
  type: string;
  data: {};
}

export interface StateProps {
  user: User;
  post: Posts;
}
