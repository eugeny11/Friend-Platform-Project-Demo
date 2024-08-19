import { Component } from "react";
import { expire, token } from "./slices/signInSlice";

// Registration

let registration = {
  component: <Component />,
  email: "",
  phone: 0,
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

// Sign in

let signIn = {
  code: 200,
  expire: expire,
  token: token,
};

// Обновление токена

// Запрос данных о пользователе

let user = {
  id: 2,
  role: "client",
  phone: "xxxxxxxxxx",
  password: "",
  email: "",
  name: "",
  age: 0,
  sex: "",
  icon: [],
};

//Данные с анкеты

let quest = {
  converse: "",
  appeal: "",
  comfort_work: "",
  min_age: "",
  max_age: "",
  comfort_psycho: "",
  spec_experience: "",
  format: "",
  price: "",
  request: "",
};
