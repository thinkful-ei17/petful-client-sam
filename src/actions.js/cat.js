export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
    type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = () => ({
    type: FETCH_CAT_ERROR,
    error
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSucess = () => ({
    type: FETCH_CAT_SUCCESS,
    cat
});

export const fetchCat = (dispatch, getState) => {
    dispatch(fetchCatRequest());
    return fetch('http://localhost:8080/api/cat',
        {
            method: 'GET'
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
}

