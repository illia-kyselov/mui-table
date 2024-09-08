import { put, takeEvery } from "redux-saga/effects";
import {
    fetchOperators,
    fetchOperatorsSuccess,
    fetchAddonsSuccess,
    fetchFailure,
} from "./slices";

const API_TOKEN = "66a7f07b53c13f22a3d17fb1";
const baseURL = `https://${API_TOKEN}.mockapi.io/api`;

function* fetchOperatorsSaga(): Generator<any, void, any> {
    try {
        const operatorResponse: Response = yield fetch(`${baseURL}/operator`);
        const operators: any = yield operatorResponse.json();
        yield put(fetchOperatorsSuccess(operators));

        const addonResponse: Response = yield fetch(`${baseURL}/operatorAddon`);
        const operatorAddons: any = yield addonResponse.json();
        yield put(fetchAddonsSuccess(operatorAddons));
    } catch (error: any) {
        yield put(fetchFailure(error.message));
    }
}

export function* watchFetchOperators() {
    yield takeEvery(fetchOperators.type, fetchOperatorsSaga);
}
