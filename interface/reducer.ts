import { Posts } from "./post";
import { User } from "./user";

export interface ActionProps {
  type: string;
  data: {};
  error: string;
}

export interface StateProps {
  user: User;
  post: Posts;
}
