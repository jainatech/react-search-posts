import { EDIT_POSTS, LIST_POSTS, GET_POSTS } from "../actions/actionTypes";

const initialState = {
  loading: true,
  posts_data: []
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        loading: true
      };
    }
    case EDIT_POSTS: {
      const { data } = action.payload;
      const elementsIndex = state.posts_data.findIndex(element => Number(element.id) === Number(data.id));
      let updated_data = [...state.posts_data];
      updated_data[elementsIndex] = { ...updated_data[elementsIndex], title: data.title, body: data.body }
      return {
        ...state,
        posts_data: updated_data
      };
    }
    case LIST_POSTS: {
      const { data } = action;
      return {
        ...state,
        posts_data: data,
        loading: false
      };
    }
    default:
      return state;
  }
};

export default postsReducer;