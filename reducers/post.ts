import { ActionProps } from "./../interface/reducer";

const initialState = {
  mainPosts: [
    {
      id: 1,
      user: {
        id: 1,
        nickname: "eden",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "data:image/jpeg;base64,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",
        },
        {
          src: "data:image/jpeg;base64,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",
        },
        {
          src: "data:image/jpeg;base64,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",
        },
      ],
      Comments: [
        {
          user: {
            nickname: "hui",
          },
          content: "와 고양이 기욥네요",
        },
        {
          user: {
            nickname: "reo",
          },
          content: "냐아~",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

// 상수를 변수로 정하면 오타를 줄일수 있고 재활용도 가능
const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다뀽",
  User: {
    id: 1,
    nickname: "eden",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
