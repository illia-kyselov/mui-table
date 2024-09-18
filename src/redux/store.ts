import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import operatorReducer from './slices';
import { watchFetchOperators } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        operators: operatorReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchOperators);
