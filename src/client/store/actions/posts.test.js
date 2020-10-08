import { editPost, getPost } from './posts';
import { GET_POSTS, EDIT_POSTS } from "./actionTypes";

describe("posts.js reducer test cases", () => {
    it('should GET_POSTS in reducer', () => {

        let data = {
            loading: true,
            posts_data: []
          };

        let state = getPost(data, { type: GET_POSTS })
        expect(state).toEqual({ type: GET_POSTS })
    });
    it('should EDIT_POSTS in reducer', () => {

        let data = [{ "userId": 1, "id": 1, "title": "title1", "body": "body1" }, { "userId": 1, "id": 2, "title": "title2", "body": "body2" }]


        let state = editPost(data, { type: EDIT_POSTS, data })
        expect(state).toEqual({ type: EDIT_POSTS , payload : { data }})
    });
})
