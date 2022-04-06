import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signUpUser = createAsyncThunk(
  "users/signUpUsers.json",
  async ({ name, email, password }, thunkAPI) => {
    try {
      console.log(name, email, password);
      const userData = { name, email, password };
      const signUpRequest = await axios
        .post(
          "https://online-shopping-2be1c-default-rtdb.firebaseio.com/users/signUpUsers.json",
          userData
        )
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
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const signInUser = createAsyncThunk(
  "users/signUpUsers.json",
  async ({ email, password }, thunkAPI) => {
    try {
      console.log(email, password);
      const userData = { email, password };
      const signInUserRequest = await axios
        .get(
          "https://online-shopping-2be1c-default-rtdb.firebaseio.com/users/signUpUsers.json",
          userData
        )
        .then((response) => {
          let data = response.data;
          console.log(response);
          if (response.status === 200) {
            localStorage.setItem("token", data.name);

            return { ...data, email: email };
          } else {
            return thunkAPI.rejectWithValue(data);
          }
        });
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const initialState = {
  username: "",
  email: "",
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
      state = initialState;
    },
  },
  extraReducers: {
    [signUpUser.fulfilled]: (state, { meta }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.email = meta.arg.email;
      state.username = meta.arg.name;
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
      console.log(meta);
      state.email = meta.arg.email;
      state.username = meta.arg.name;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [signInUser.rejected]: (state, { error }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = error.message;
    },
    [signInUser.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export const { clearState } = userSlice.actions;

export const userSelector = (state) => state.user;

export default userSlice.reducer;
