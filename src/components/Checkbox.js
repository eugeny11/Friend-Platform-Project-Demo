import React from "react";
import { memo } from "react";

const Checkbox = (props) => {
  const { problem, category, handleChange, checked } = props;
  const name = problem.name;
  const categoryId = category.id;

  return (
    <div className="item-desc-options-string">
      <input
        type="checkbox"
        id={problem.id}
        name={categoryId}
        value={name}
        className="points_checkbox"
        onChange={() => handleChange(categoryId, name)}
      />
      <label htmlFor={problem.id}>{name}</label>
    </div>
  );
};

export default memo(Checkbox);
