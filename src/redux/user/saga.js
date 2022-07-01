import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { getUserReposRequest } from "requests/getUserReposRequest";
import { getUserRequest } from "requests/getUserRequest";
import { getUserNameSelector } from "./selectors";
import { userActions } from "./slice";

export function* getUser() {
  const userName = yield select(getUserNameSelector);

  try {
    yield put(userActions.setLoading(true));

    const data = yield call(() => getUserRequest(userName));
    const dataRepos = yield call(() => getUserReposRequest(userName));

    yield put(userActions.setUserData(data));
    yield put(userActions.setUserRepos(dataRepos));
    yield put(userActions.setLoading(false));
  } catch (e) {
    yield put(userActions.setError(e.response.status));
    yield put(userActions.setLoading(false));
  }
}

export default function* userSaga() {
  yield all([takeLatest(userActions.getUserData, getUser)]);
}
