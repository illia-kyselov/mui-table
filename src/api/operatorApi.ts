import { fetchOperators } from '../redux/slices';

export const getOperators = (dispatch: any) => {
    dispatch(fetchOperators());
};
