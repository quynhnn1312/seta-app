import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postApi from "../api/postApi";

export const apiPostList = createAsyncThunk(
  "posts/fetchPostStatus",
  async () => {
    try {
      const responsePostList = await postApi.getAll();
      return responsePostList;
    } catch (error) {
      console.log("Failed to fetch post list: ", error);
    }
  }
);

export const apiAddPost = createAsyncThunk(
  "posts/fetchAddPostStatus",
  async (requestPost) => {
    try {
      const responseAddPost = await postApi.post(requestPost);
      return responseAddPost;
    } catch (error) {
      console.log("Failed to fetch blog list: ", error);
    }
  }
);

const post = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: {
    [apiPostList.fulfilled]: (state, action) => {
      return action.payload;
    },
    post: (requestPost) => {
      const url = `/posts`;
      return axiosClient.post(url, requestPost);
    },
  },
});

const { reducer, actions } = post;
export const selectPost = (state) => state.posts;
export const { addPost } = actions;
export default reducer;
