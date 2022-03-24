import axios from "axios";
import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from "reducers/post";
import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import { ActionProps } from "interface/reducer";

const addPostAPI = (data) => {
  return axios.post("/api/post", data);
};

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(1000);
    yield put({
      type: ADD_POST_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.data,
    });
  }
}

function* watchAddPost() {
  // take를 쓰면 한번만 작동하고 사라짐 takeEvery는 반복문을 쓴거랑 같은효과 takeLatest는 자동으로 연속실행(클릭 여러번)을 막고 마지막 입력만 실행
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

const addCommentAPI = (data) => {
  return axios.post(`/api/post/${data.postId}/comment`, data);
};

function* addComment(action: ActionProps) {
  try {
    // const result = yield call(addCommentAPI, action.data);
    yield delay(1000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.data,
    });
  }
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchAddComment)]);
}
