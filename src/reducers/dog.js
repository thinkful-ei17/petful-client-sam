import {
    FETCH_DOG_REQUEST,
    FETCH_DOG_SUCCESS,
    FETCH_DOG_ERROR,
    ADOPT_DOG_REQUEST,
    ADOPT_DOG_SUCCESS,
    ADOPT_DOG_ERROR,
} from '../actions/dog';

const initialState = {
    loading: false,
    error: null,
    data: null
}

export const reducer = (state = initialState, action) => {
    if (action.type === FETCH_DOG_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        })
    } else if (action.type === FETCH_DOG_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            data: action.data,
            error: null
        })
    } else if (action.type === FETCH_DOG_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        })
    } else if (action.type === ADOPT_DOG_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        })
    } else if (action.type === ADOPT_DOG_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            error: null
        })
    } else if (action.type === ADOPT_DOG_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        })
    } else {
        return state;
    }
}