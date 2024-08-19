import { backHost as host } from "../environment/env";

function createQuestionnaireApi(payload) {
  const link = "/api/client";

  let url = `${host}${link}`;
  let body = JSON.stringify(payload.body);
  let token = payload.token;

  let options = {
    method: "POST",
    body: body,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(`${url}`, options);
}

export default createQuestionnaireApi;
