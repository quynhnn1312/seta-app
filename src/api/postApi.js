import axiosClient from "./axiosClient";

const postApi = {
  getAll: () => {
    const url = `/posts`;
    return axiosClient.get(url);
  },
  post: (requestPost) => {
    const url = `/posts`;
    return axiosClient.post(url, requestPost);
  },
};

export default postApi;
