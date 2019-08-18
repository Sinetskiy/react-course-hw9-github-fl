import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';

// Обратите внимание на тесты, они помогут вам написать код редьюсера

const isLoading = handleActions(
    {
        [fetchRequest]: () => true,
        [fetchSuccess]: () => false,
        [fetchFailure]: () => false,
    },
    false,
);

const data = handleActions(
    {
        [fetchRequest]: (state, action) => null,
        [fetchSuccess]: (state, action) => action.payload,
    },
    null,
);

export default combineReducers({
    isLoading,
    data,
});