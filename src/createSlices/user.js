import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../api/userApi";

export const apiUserList = createAsyncThunk(
  "users/fetchUserStatus",
  async () => {
    try {
      const responseUserList = await userApi.getAll();
      return responseUserList;
    } catch (error) {
      console.log("Failed to fetch user list: ", error);
    }
  }
);

const user = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: {
    [apiUserList.fulfilled]: (state, action) => {
      return action.payload;
    },
    user: (requestUser) => {
      const url = `/users`;
      return axiosClient.post(url, requestUser);
    },
  },
});

const { reducer } = user;
export const selectUser = (state) => state.users;
export default reducer;
