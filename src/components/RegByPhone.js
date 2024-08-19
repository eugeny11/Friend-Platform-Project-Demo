import { useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { setPhone, setEmail } from "../redux/slices/registrationSlice";

function RegByPhone() {
  const phoneInput = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEmail(""));
  });

  return (
    <input
      className="input input_Registration"
      ref={phoneInput}
      onChange={() => dispatch(setPhone(phoneInput.current.value))}
      placeholder="+7 (_ _ _)  _ _ _ - _ _ - _ _"
    />
  );
}

export default RegByPhone;
