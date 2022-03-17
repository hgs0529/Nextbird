export interface ImageSrc {
  src: string;
}

export interface Comment {
  User: {
    nickname: string;
  };
  content: string;
}

export interface Post {
  id: number;
  User: {
    id: string;
    nickname: string;
  };
  content: string;
  Images: ImageSrc[];
  Comments: Comment[];
}

export interface Posts {
  mainPosts: Post[];
  imagePaths: [];
  postAdded: boolean;
}
