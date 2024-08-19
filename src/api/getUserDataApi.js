import { backHost as host } from "../environment/env";

function getUserDataApi(payload) {
  const link = "/api/user";

  //   Параметр в адресной строке:
  //   email=... (или phone=...)
  //   role = "psy" ("client", "mod") (опционально)
  //   quantity = n (количество записей, если отсутствует - 1 запись) (опционально)

  let url = `${host}${link}?email=${payload.email}&role=${payload.role}&quantity=${payload.quantity}`;

  let options = {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      accept: "application/json",
      Authorization: `Bearer ${payload.token}`,
    },
  };

  return fetch(`${url}`, options);
}

export default getUserDataApi;
