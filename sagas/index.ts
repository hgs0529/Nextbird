import { all, fork } from "redux-saga/effects";

import postSaga from "./post";
import userSaga from "./user";

// call 동기함수호출 fork 비동기 함수호출
export default function* rootSaga() {
  yield all([
    fork(postSaga), // call
    fork(userSaga),
  ]);
}
