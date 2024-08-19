import React from "react";
import { Routes, Route } from "react-router-dom";

import Agora from "../agora/Agora";

import Chat from "../chat/Chat";
import ChatRoom from "../chat/ChatRoom";

import Account from "../components/Account";
import AccountLayout from "../components/AccountLayout";
import Notes from "../components/Notes";
import Faq from "../components/Faq";
import NotFoundPage from "../components/NotFoundPage";
import Setup from "../components/Setup";
import DevMode from "../components/DevMode";
import Questionnaire from "../components/QuestionnairePages/Questionnaire";
import QuestionnaireSecondPage from "../components/QuestionnairePages/QuestionnaireSecondPage";
import QuestionnaireThirdPage from "../components/QuestionnairePages/QuestionnaireThirdPage";
import QuestionnaireFourthPage from "../components/QuestionnairePages/QuestionnaireFourthPage";
import QuestionnaireFifthPage from "../components/QuestionnairePages/QuestionnaireFifthPage";
import QuestionnaireSixthPage from "../components/QuestionnairePages/QuestionnaireSixthPage";
import CoordinatorMainPage from "../components/CoordinatorMainPage";
import AccountClient from "../components/AccountClient";
import QuestionnaireRefill from "../components/QuestionnairePages/QuestionnaireRefill";
import QuestionnaireRefillSecondPage from "../components/QuestionnairePages/QuestionnaireRefillSecondPage";
import QuestionnairesList from "../components/QuestionnairePages/QuestionnairesList";
import DetailedQuestionnaire from "../components/QuestionnairePages/DetailedQuestionnaire";

function AccountRouter() {
  return (
    <Routes>
      <Route path="/" element={<AccountLayout />}>
        <Route index element={<Account />} />
        <Route path="coordinator_main_page" element={<CoordinatorMainPage />} />

        <Route path="questionnaire" element={<Questionnaire />} />
        <Route path="questionnaire_2" element={<QuestionnaireSecondPage />} />
        <Route path="questionnaire_3" element={<QuestionnaireThirdPage />} />
        <Route path="questionnaire_4" element={<QuestionnaireFourthPage />} />
        <Route path="questionnaire_5" element={<QuestionnaireFifthPage />} />
        <Route path="questionnaire_6" element={<QuestionnaireSixthPage />} />
        <Route path="questionnaire_refill" element={<QuestionnaireRefill />} />
        <Route
          path="questionnaire_refill_2"
          element={<QuestionnaireRefillSecondPage />}
        />
        <Route path="questionnaires_list" element={<QuestionnairesList />} />
        <Route path="request/:itemId" element={<DetailedQuestionnaire />} />
        <Route path="note" element={<Notes />} />
        <Route path="meeting" element={<Agora />} />
        <Route path="chat" element={<Chat />} />
        <Route path="faq" element={<Faq />} />
        <Route path="support" element={<Agora />} />
        <Route path="setup" element={<Setup />} />
        <Route path="chat/:roomId" element={<ChatRoom />} />
        <Route path="sign-up" element={<Agora to={"/"} replace />} />
        <Route path="sign-in" element={<Agora to={"/"} replace />} />
        <Route path="devmode" element={<DevMode />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AccountRouter;
