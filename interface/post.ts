export interface Post {
  id: number;
  user: {
    id: number;
    nickname: string;
  };
  content: string;
  Images: [
    {
      src: string;
    },
    {
      src: string;
    },
    {
      src: string;
    }
  ];
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
