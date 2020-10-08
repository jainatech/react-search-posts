import postsReducer from './posts';
import { EDIT_POSTS, LIST_POSTS, GET_POSTS } from "../actions/actionTypes";

describe("posts.js reducer test cases", () => {
    it('should GET_POSTS in reducer', () => {

        let initialState = {
            loading: true,
            posts_data: []
          };

        let state = postsReducer(initialState, { type: GET_POSTS })
        expect(state).toEqual(initialState)
    });
    it('should LIST_POSTS in reducer', () => {

        let data = [{ "userId": 1, "id": 1, "title": "title1", "body": "body1" }, { "userId": 1, "id": 2, "title": "title2", "body": "body2" }]

        let initialState = {
            loading: false,
            posts_data: data,
        };

        let state = postsReducer(initialState, { type: LIST_POSTS , data })
        expect(state).toEqual(initialState)
    });
    it('should EDIT_POSTS in reducer', () => {

        let data = [{ "userId": 1, "id": 1, "title": "titleedited", "body": "bodyedited" }, { "userId": 1, "id": 2, "title": "title2", "body": "body2" }];
        let editdata = { "userId": 1, "id": 1, "title": "titleedited", "body": "bodyedited" };
        let initialState = {
            loading: false,
            posts_data: data,
        };

        let state = postsReducer(initialState, { type: EDIT_POSTS , payload : {data : editdata} })
        expect(state).toEqual(initialState)
    });
})