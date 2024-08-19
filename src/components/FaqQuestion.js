import React from "react";
import { useState } from "react";

function FaqQuestion(props) {
  const [isExpanded, setState] = useState(false);

  let questiont = props.q;
  let answer = props.a;

  function switchStyle() {
    setState(!isExpanded);
  }

  let style = isExpanded
    ? {
        f: "faq-page__frame expanded",
        a: "faq-page__answer expanded",
        q: "faq-page__question expanded",
      }
    : {
        f: "faq-page__frame",
        a: "faq-page__answer",
        q: "faq-page__question",
      };

  return (
    <div className={style.f}>
      <button onClick={switchStyle} className={style.q}>
        <h6>{questiont}</h6>
      </button>
      <div dangerouslySetInnerHTML={answer} className={style.a}></div>
    </div>
  );
}

export default FaqQuestion;
