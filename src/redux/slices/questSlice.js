import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  converse: "",
  appeal: "",
  comfort_work: "",
  min_age: "",
  max_age: "",
  comfort_psycho: "",
  spec_experience: "",
  format: "",
  price: "",
  comment: "",
  problems: [],
  requests: [],
  id: 0,
  quest: null,
  isLoading: false,
};

export const questSlice = createSlice({
  name: "quest",
  initialState,
  reducers: {
    getQuestData: (state, action) => {
      state.isLoading = true;
    },
    getQuestDataSuccess: (state, action) => {
      state.isLoading = false;
      state.converse = action.payload.converse;
      state.appeal = action.payload.appeal;
      state.comfort_work = action.payload.comfort_work;
      state.min_age = action.payload.min_age;
      state.max_age = action.payload.max_age;
      state.comfort_psycho = action.payload.comfort_psycho;
      state.spec_experience = action.payload.spec_experience;
      state.format = action.payload.format;
      state.price = action.payload.price;
      state.comment = action.payload.comment;
      state.requests = action.payload.requests;
      state.quest = action.payload;
    },
    getQuestDataFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setConverse: (state, action) => {
      state.converse = action.payload;
    },
    setAppeal: (state, action) => {
      state.appeal = action.payload;
    },
    setComfortWork: (state, action) => {
      state.comfort_work = action.payload;
    },
    setMinAge: (state, action) => {
      state.min_age = action.payload;
    },
    setMaxAge: (state, action) => {
      state.max_age = action.payload;
    },
    setComfortPsycho: (state, action) => {
      state.comfort_psycho = action.payload;
    },
    setSpecExperience: (state, action) => {
      state.spec_experience = action.payload;
    },
    setFormat: (state, action) => {
      state.format = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setComment: (state, action) => {
      state.comment = action.payload;
    },
    setRequests: (state, action) => {
      state.requests = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    sendQuestData: (state, action) => {
      state.isLoading = true;
    },
    sendQuestDataSuccess: (state, action) => {
      state.isLoading = false;
      state = action.payload;
    },
    sendQuestDataFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setQuest: (state, action) => {
      state.quest = action.payload;
    },
  },
});

export const {
  setAppeal,
  setComfortPsycho,
  setComfortWork,
  setConverse,
  setFormat,
  setMaxAge,
  setMinAge,
  setSpecExperience,
  setComment,
  setRequests,
  setPrice,
  setId,
  setQuest,
  sendQuestData,
  sendQuestDataSuccess,
  sendQuestDataFailure,
  getQuestData,
  getQuestDataSuccess,
  getQuestDataFailure,
} = questSlice.actions;

export default questSlice.reducer;
