import Cookies from "js-cookie";

const setStringifyCooks = (cookname, value) => {
  try {
    Cookies.set(cookname, JSON.stringify(value));
    console.log(`Установленные куки ${cookname}:`, Cookies.get(cookname));
    return Promise.resolve();
  } catch (error) {
    console.error(`Ошибка установки куков ${cookname}:`, error);
    return Promise.reject(error);
  }
};

export default setStringifyCooks;
