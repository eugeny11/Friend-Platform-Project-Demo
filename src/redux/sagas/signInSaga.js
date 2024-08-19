import { call, put, takeLatest } from "redux-saga/effects";
import { getSignInSuccess, getSignInFailure } from "../slices/signInSlice";
import { setPassword } from "../slices/registrationSlice";
import signInApi from "../../api/signInApi";

function* fetchSignIn(action) {
  try {
    const response = yield call(signInApi, action.payload);
    if (response.ok) {
      const respObj = yield response.json();
      localStorage.setItem("token", respObj.token);
      localStorage.setItem("expire", respObj.expire);
      // localStorage.setItem("phone", action.payload.phone);
      localStorage.setItem("email", action.payload.email);
      let payload = {
        expire: respObj.expire,
        token: respObj.token,
      };
      yield put(getSignInSuccess(payload));
      yield put(setPassword(""));
    } else {
      yield put(getSignInFailure(response.status));
    }
  } catch (e) {
    yield put(getSignInFailure(e));
  }
}

function* signInSaga() {
  yield takeLatest("signIn/getSignInFetch", fetchSignIn);
}

export default signInSaga;
