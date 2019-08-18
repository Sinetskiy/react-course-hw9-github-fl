import {takeLatest, select, put, call, fork} from 'redux-saga/effects';
import {fetchFailure, fetchRequest, fetchSuccess} from "./actions";
import {getApiKey} from "../Auth";
import {getUserInfo} from "./api";


function* fetchUserWatcher() {
    yield takeLatest(fetchRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {

    const apiKey = yield select(getApiKey);
    const username = action.payload;

    try {
        const response = yield call(getUserInfo, apiKey, username);
        yield put(fetchSuccess(response));
    } catch (ex) {
        yield put(fetchFailure(ex));
    }

}

export default function* () {
    yield fork(fetchUserWatcher);
}
