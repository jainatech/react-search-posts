import { put, takeLatest, all } from 'redux-saga/effects';
import { LIST_POSTS, GET_POSTS } from "../actions/actionTypes"
import ENUMS from '../../utils/ENUMS';

function* fetchPosts() {
    const list = yield fetch(`${ENUMS.ENDPOINT.URL}${ENUMS.ENDPOINT.POSTS}`)
        .then(response => response.json());
    yield put({ type: LIST_POSTS, data: list.result });
}

function* actionWatcher() {
    yield takeLatest(GET_POSTS, fetchPosts)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}