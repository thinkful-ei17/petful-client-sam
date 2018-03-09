import {
    FETCH_CAT_REQUEST,
    FETCH_CAT_SUCCESS,
    FETCH_CAT_ERROR,
    ADOPT_CAT_REQUEST,
    ADOPT_CAT_SUCCESS,
    ADOPT_CAT_ERROR,
} from '../actions/cat';

const initialState = {
    loading: false,
    error: null,
    data: null
};

export const reducer = (state = initialState, action) => {
    if (action.type === FETCH_CAT_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        })
    } else if (action.type === FETCH_CAT_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            data: action.data,
            error: null
        })
    } else if (action.type === FETCH_CAT_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        })
    } else if (action.type === ADOPT_CAT_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        })
    } else if (action.type === ADOPT_CAT_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            error: null
        })
    } else if (action.type === ADOPT_CAT_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        })
    } else {
        return state;
    }
};