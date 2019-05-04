import {
    put,
    takeEvery,
    all
} from 'redux-saga/effects';

function* fetchData() {
    const response = yield fetch('http://localhost:3000/getItems');
    const responseBody = yield response.json();

    yield put({
        type: "DATA_RECEIVED",
        json: responseBody
    });
}

function* actionWatcher() {
    yield takeEvery('FETCH_DATA', fetchData);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}