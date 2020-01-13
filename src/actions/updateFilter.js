import {
    UPDATE_FILTER_VALUE,
    RESET_FILTER_VALUE,
} from './types';

export const updateFilter = (filterValue) => {
    return (dispatch) => {
       dispatch({
           type: UPDATE_FILTER_VALUE,
           payload: filterValue
       });
    }
}
export const resetFilter = () => dispatch => {
    dispatch({
        type: RESET_FILTER_VALUE,
        payload: {}
    });
}