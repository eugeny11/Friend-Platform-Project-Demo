import { call, put, takeLatest } from "redux-saga/effects";
import { getSignInSuccess, getSignInFailure } from "../slices/signInSlice";
import tokenUpdateApi from "../../api/tokenUpdateApi";

function* fetchTokenUpdate(action) {
  try {
    const response = yield call(tokenUpdateApi, action.payload);
    if (response.ok) {
      const respObj = yield response.json();
      localStorage.setItem("token", respObj.token);
      localStorage.setItem("expire", respObj.expire);
      let payload = {
        expire: respObj.expire,
        token: respObj.token,
      };
      yield put(getSignInSuccess(payload));
    } else {
      yield put(getSignInFailure(`Ошибка HTTP: ${response.status}`));
    }
  } catch (e) {
    yield put(getSignInFailure(e));
  }
}

function* tokenUpdateSaga() {
  yield takeLatest("signIn/updateToken", fetchTokenUpdate);
}

export default tokenUpdateSaga;
