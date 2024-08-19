import React from "react";
import { useState } from "react";

function Cookie() {
  let cookieInit = sessionStorage.getItem("cookieClassName")
    ? sessionStorage.getItem("cookieClassName")
    : "cookie";

  const [cookieClassName, setCookieClassName] = useState(cookieInit);

  function handlerClick() {
    setCookieClassName("cookie cookie_accepted");
    sessionStorage.setItem("cookieClassName", "cookie cookie_accepted");
  }

  return (
    <div className={cookieClassName}>
      <div>
        <h5>Мы используем куки</h5>
        <p>
          Куки помогают сайту работать лучше, так же как психологи помогают
          повысить качество жизни. О том, какую информацию мы собираем, можно
          прочитать в нашей{" "}
          <a href="https://droog.exon.ws/" target={"_blank"}>
            политике конфиденциальности
          </a>
        </p>
      </div>
      <button
        className="button button_secondary button_m"
        onClick={handlerClick}
      >
        Хорошо
      </button>
    </div>
  );
}

export default Cookie;
