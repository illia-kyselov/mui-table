import { call, put, takeEvery } from 'redux-saga/effects';
import {
    fetchOperators,
    fetchOperatorsSuccess,
    fetchAddonsSuccess,
    fetchFailure,
} from './slices';
import { fetchOperatorsApi, fetchOperatorAddonsApi } from '../api/operatorApi';

function* fetchOperatorsSaga(): Generator<any, void, any> {
    try {
        const operators = yield call(fetchOperatorsApi);
        yield put(fetchOperatorsSuccess(operators));

        const operatorAddons = yield call(fetchOperatorAddonsApi);
        yield put(fetchAddonsSuccess(operatorAddons));
    } catch (error: any) {
        yield put(fetchFailure(error.message));
    }
}

export function* watchFetchOperators() {
    yield takeEvery(fetchOperators.type, fetchOperatorsSaga);
}
