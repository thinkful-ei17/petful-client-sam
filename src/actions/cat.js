import { REACT_APP_API_BASE_URL } from '../config';

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
    type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = error => ({
    type: FETCH_CAT_ERROR,
    error
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSucess = cat => ({
    type: FETCH_CAT_SUCCESS,
    data: cat
});

export const fetchCat = () => dispatch => {
    dispatch(fetchCatRequest());
    return fetch(`${REACT_APP_API_BASE_URL}/cat`,
        {
            method: 'GET',
            headers: {
                "Accept": "application/json"
            }
        }).then(res => {
            if (!res.ok) {
                return Promise.reject('Something has gone wrong!');
            }
            return res.json()
        }).then(cat =>
            dispatch(fetchCatSucess(cat))
        ).catch(err =>
            dispatch(fetchCatError(err))
        )
};

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const adoptCatRequest = () => ({
    type: ADOPT_CAT_REQUEST
});

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError = error => ({
    type: ADOPT_CAT_ERROR,
    error
});

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSucess = () => ({
    type: ADOPT_CAT_SUCCESS
});

export const adoptCat = () => dispatch => {
    dispatch(adoptCatRequest());
    return fetch(`${REACT_APP_API_BASE_URL}/cat`,
        {
            method: 'DELETE'
        }).then(res => {
            if (!res.ok) {
                return Promise.reject('Something has gone wrong!');
            }
            return res.status(204).end()
        }).then(() =>
            dispatch(adoptCatSucess())
        ).then(() => 
            dispatch(fetchCat())
        ).catch(err =>
            dispatch(adoptCatError(err))
        )
};