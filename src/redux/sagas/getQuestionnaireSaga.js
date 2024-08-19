import { call, put, takeLatest } from "redux-saga/effects";
import { getQuestDataSuccess, getQuestDataFailure } from "../slices/questSlice";
import getQuestionnaireApi from "../../api/getQuestionnaireApi";
import { setQuest } from "../slices/questSlice";

function* getFetchQuestData(action) {
  try {
    const response = yield call(
      getQuestionnaireApi,
      action.payload,
      action.payload.user_id
    );
    if (response.ok) {
      const respObj = yield response.json();
      yield put(getQuestDataSuccess(respObj));
      yield put(setQuest(respObj));
    } else {
      yield put(getQuestDataFailure(`"Ошибка HTTP: " + ${response.status}`));
    }
  } catch (e) {
    yield put(getQuestDataFailure(e));
  }
}

function* getQuestionnaireSaga() {
  yield takeLatest("quest/getQuestData", getFetchQuestData);
}

export default getQuestionnaireSaga;
