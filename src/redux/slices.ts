import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Operator, OperatorAddon, State } from '../types/types';

const initialState: State = {
    operators: [],
    operatorAddons: [],
    loading: false,
    error: null,
};

const operatorSlice = createSlice({
    name: 'operators',
    initialState,
    reducers: {
        fetchOperators: (state: State) => {
            state.loading = true;
        },
        fetchOperatorsSuccess: (
            state: State,
            action: PayloadAction<Operator[]>,
        ) => {
            state.operators = action.payload;
            state.loading = false;
        },
        fetchAddonsSuccess: (
            state: State,
            action: PayloadAction<OperatorAddon[]>,
        ) => {
            state.operatorAddons = action.payload;
            state.loading = false;
        },
        fetchFailure: (state: State, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {
    fetchOperators,
    fetchOperatorsSuccess,
    fetchAddonsSuccess,
    fetchFailure,
} = operatorSlice.actions;
export default operatorSlice.reducer;
