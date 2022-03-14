export interface ImageSrc {
  src: string;
}

export interface Post {
  id: number;
  User: {
    id: string;
    nickname: string;
  };
  content: string;
  Images: ImageSrc[];
  Comments: [
    {
      user: {
        nickname: string;
      };
      content: string;
    },
    {
      user: {
        nickname: string;
      };
      content: string;
    }
  ];
}

export interface Posts {
  mainPosts: Post[];
  imagePaths: [];
  postAdded: boolean;
}
