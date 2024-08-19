import { backHost as host } from "../environment/env";
import getParseCooks from "../hooks/getParseCooks";

function getQuestionnaireApi(payload, user_id) {
  const link = "/api/client";
  const token = payload.token;
  let url = `${host}${link}/?user_id=${user_id}`;

  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };

  console.log("getQuestionnaireApi: ", options);

  return fetch(url, options);
}

export default getQuestionnaireApi;
