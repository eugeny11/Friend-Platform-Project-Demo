import { compose, configureStore } from "@reduxjs/toolkit";

import registrationReducer from "./slices/registrationSlice";
import signInReducer from "./slices/signInSlice";
import questReduser from "./slices/questSlice";

import createSagaMiddleware from "redux-saga";

import registrationSaga from "./sagas/registrationSaga";
import signInSaga from "./sagas/signInSaga";
import tokenUpdateSaga from "./sagas/tokenUpdateSaga";
import getUserDataSaga from "./sagas/getUserDataSaga";
import questionnaireSaga from "./sagas/createQuestionnaireSaga";
import getQuestionnaireSaga from "./sagas/getQuestionnaireSaga";

const saga = createSagaMiddleware();

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    signIn: signInReducer,
    quest: questReduser,
  },
  middleware: [saga],
  composeEnhancers,
});

saga.run(registrationSaga);
saga.run(signInSaga);
saga.run(tokenUpdateSaga);
saga.run(getUserDataSaga);
saga.run(questionnaireSaga);
saga.run(getQuestionnaireSaga);
