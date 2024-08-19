import Cookies from "js-cookie";

const getParseCooks = (cookname) => {
  return new Promise((resolve) => {
    const resp = Cookies.get(cookname);
    if (resp) {
      const respParse = JSON.parse(resp);
      resolve(respParse);
    }
    resolve(null);
  });
};

export default getParseCooks;
