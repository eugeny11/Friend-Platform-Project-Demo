import { call, put, takeLatest } from "redux-saga/effects";
import {
  setId,
  sendQuestDataSuccess,
  sendQuestDataFailure,
} from "../slices/questSlice";
import createQuestionnaireApi from "../../api/createQuestionnaireApi";

function* fetchSendQuestData(action) {
  try {
    const response = yield call(createQuestionnaireApi, action.payload);
    if (response.ok) {
      const respObj = yield response.json();
      const id = respObj.id;

      yield put(setId(id));
      yield put(sendQuestDataSuccess(respObj));
    } else {
      yield put(sendQuestDataFailure(`"Ошибка HTTP: " + ${response.status}`));
    }
  } catch (e) {
    yield put(sendQuestDataFailure(e));
  }
}

function* questionnaireSaga() {
  yield takeLatest("quest/sendQuestData", fetchSendQuestData);
}

export default questionnaireSaga;
