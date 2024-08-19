import { backHost as host } from "../environment/env";

function tokenUpdateApi(token) {
  const link = "/api/user/refresh_token";

  let url = `${host}${link}`;

  let options = {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(`${url}`, options);
}

export default tokenUpdateApi;
