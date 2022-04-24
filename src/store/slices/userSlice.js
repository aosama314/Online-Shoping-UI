import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const usersAPIUri = "http://localhost:5000/api/users";

export const signUpUser = createAsyncThunk(
  "users/signUpUsers.json",
  async ({ name, email, password, mobileNumber }, thunkAPI) => {
    try {
      const userData = { fullName: name, email, password, mobileNumber };
      const signUpRequest = await axios
        .post(usersAPIUri, userData)
        .then((response) => {
          let data = response.data;
          if (response.status === 200) {
            localStorage.setItem("token", data.name);
            return { ...data, username: name, email: email };
          } else {
            return thunkAPI.rejectWithValue(data);
          }
        });
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const signInUser = createAsyncThunk(
  "users/signUpUsers.json",
  async ({ email, password }, thunkAPI) => {
    try {
      const userData = { email, password };
      const signInUserRequest = await axios
        .post(`${usersAPIUri}/login`, userData)
        .then((response) => {
          let data = response.data;
          if (response.status === 200) {
            localStorage.setItem("token", data.name);
            return { ...data, email: email };
          } else {
            return thunkAPI.rejectWithValue(data);
          }
        });
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const initialState = {
  username: "",
  email: "",
  mobileNumber: "",
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearState: (state, action) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      state.errorMessage = "";
    },
  },
  extraReducers: {
    [signUpUser.fulfilled]: (state, { meta }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.email = meta.arg.email;
      state.username = meta.arg.name;
      state.mobileNumber = meta.arg.mobileNumber;
    },
    [signUpUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signUpUser.rejected]: (state, { error }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = error.message;
    },
    [signInUser.fulfilled]: (state, { meta }) => {
      state.email = meta.arg.email;
      state.username = meta.arg.name;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [signInUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    },
    [signInUser.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export const { clearState } = userSlice.actions;

export const userSelector = (state) => state.user;

export default userSlice.reducer;
