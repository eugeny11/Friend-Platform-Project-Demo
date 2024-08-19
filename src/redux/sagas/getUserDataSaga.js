import { call, put, takeLatest, takeEvery, delay } from "redux-saga/effects";
import {
  getRegistrationFailure,
  getUserDataSuccess,
} from "../slices/registrationSlice";
import getUserDataApi from "../../api/getUserDataApi";
import setStringifyCooks from "../../hooks/setStringifyCooks";

function* fetchGetUserData(action) {
  try {
    const response = yield call(getUserDataApi, action.payload);
    if (response.ok) {
      const respObj = yield response.json();
      console.log(respObj);
      yield call(() => setStringifyCooks("id", respObj.id));
      yield delay(1000);

      yield put(getUserDataSuccess(respObj));
    } else {
      yield put(getRegistrationFailure(`Ошибка HTTP: ${response.status}`));
    }
  } catch (e) {
    yield put(getRegistrationFailure(e));
  }
}

function* getUserDataSaga() {
  yield takeEvery("registration/getUserData", fetchGetUserData);
}

export default getUserDataSaga;
