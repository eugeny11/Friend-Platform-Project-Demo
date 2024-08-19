import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { useDispatch } from "react-redux";
import { setMinAge, setMaxAge } from "../redux/slices/questSlice";

function MultiRange() {
  const dispatch = useDispatch();
  const minValue = 0;
  const maxValue = 100;
  const handleInput = (e) => {
    dispatch(setMinAge(e.minValue));
    dispatch(setMaxAge(e.maxValue));
  };

  return (
    <div>
      <div className="range">
        <MultiRangeSlider
          min={0}
          max={100}
          step={5}
          minValue={minValue}
          maxValue={maxValue}
          barInnerColor="rgb(19, 209, 187)"
          onInput={(e) => {
            handleInput(e);
          }}
        />
      </div>
    </div>
  );
}

export default MultiRange;
