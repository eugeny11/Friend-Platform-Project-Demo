import { call, put, takeLatest } from "redux-saga/effects";
import {
  setId,
  getRegistrationSuccess,
  getRegistrationFailure,
} from "../slices/registrationSlice";
import registrationApi from "../../api/registrationApi";

function setValue(obj) {
  if ("id" in obj) setId(obj.id);
  console.log("id", obj.id);
}

function* fetchRegistration(action) {
  try {
    const response = yield call(registrationApi, action.payload.body);
    if (response.ok) {
      const respObj = yield response.json();
      const message = yield respObj.message;
      let payload = {
        message: message,
        component: action.payload.nextComponent,
      };
      yield setValue(respObj);
      yield put(getRegistrationSuccess(payload));
    } else {
      yield put(getRegistrationFailure(`"Ошибка HTTP: " + ${response.status}`));
    }
  } catch (e) {
    yield put(getRegistrationFailure(e));
  }
}

function* registrationSaga() {
  yield takeLatest("registration/getRegistrationFetch", fetchRegistration);
}

export default registrationSaga;
