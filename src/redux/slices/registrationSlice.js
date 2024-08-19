import { createSlice } from "@reduxjs/toolkit";
import CreateAccount from "../../components/CreateAccount";
// import EnterCode from "../../components/EnterCode";
// import Greeting from "../../components/Greeting";

let email =
  localStorage.getItem("email") !== "undefined"
    ? localStorage.getItem("email")
    : "";
let phone =
  localStorage.getItem("phone") !== "undefined"
    ? localStorage.getItem("phone")
    : 0;

const initialState = {
  component: <CreateAccount />,
  email: email,
  phone: phone,
  message: "",
  smsCode: "",
  login: "",
  password: "",
  passConformation: "",
  role: "",
  id: 0,
  isLoading: false,
  error: {},
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    getUserData: (state) => {
      state.isLoading = true;
    },
    getUserDataSuccess: (state, action) => {
      state.isLoading = false;
      state.id = action.payload.id;
      state.role = action.payload.role;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.age = action.payload.age;
      state.birthday = action.payload.birthday;
      state.sex = action.payload.sex;
      state.icon = action.payload.icon;
    },
    setComponent: (state, action) => {
      state.component = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setSmsCode: (state, action) => {
      state.smsCode = action.payload;
    },
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setPassConformation: (state, action) => {
      state.passConformation = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    getRegistrationFetch: (state) => {
      state.isLoading = true;
    },
    getRegistrationSuccess: (state, action) => {
      state.message = action.payload.message;
      state.isLoading = false;
      state.component = action.payload.component;
    },
    getRegistrationFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getUserData,
  getUserDataSuccess,
  setComponent,
  setEmail,
  setPhone,
  setSmsCode,
  setLogin,
  setPassword,
  setPassConformation,
  setRole,
  setId,
  getRegistrationFetch,
  getRegistrationSuccess,
  getRegistrationFailure,
} = registrationSlice.actions;
export default registrationSlice.reducer;
