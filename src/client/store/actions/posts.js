import { GET_POSTS, EDIT_POSTS  } from "./actionTypes";

export const editPost = data => ({
  type: EDIT_POSTS,
  payload: {
    data
  }
});

export const getPost = () => ({
  type: GET_POSTS
});