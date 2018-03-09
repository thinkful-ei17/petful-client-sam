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
export const fetchCatSucess = cat => ({
    type: FETCH_CAT_SUCCESS,
    cat
});

export const fetchCat = dispatch => {
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
};

export const FETCH_ADOPT_CAT_REQUEST = 'FETCH_ADOPT_CAT_REQUEST';
export const fetchAdoptCatRequest = () => ({
    type: FETCH_ADOPT_CAT_REQUEST
});

export const FETCH_ADOPT_CAT_ERROR = 'FETCH_ADOPT_CAT_ERROR';
export const fetchAdoptCatError = () => ({
    type: FETCH_ADOPT_CAT_ERROR,
    error
});

export const FETCH_ADOPT_CAT_SUCCESS = 'FETCH_ADOPT_CAT_SUCCESS';
export const fetchAdoptCatSucess = () => ({
    type: FETCH_ADOPT_CAT_SUCCESS
});

export const fetchAdoptCat = dispatch => {
    dispatch(fetchAdoptCatRequest());
    return fetch('http://localhost:8080/api/cat',
        {
            method: 'DELETE'
        }).then(res => {
            if (!res.ok) {
                return Promise.reject('Something has gone wrong!');
            }
            return res.status(204).end()
        }).then(() =>
            dispatch(fetchAdoptCatSucess())
        ).then(() => 
            dispatch(fetchCat())
        ).catch(err =>
            dispatch(fetchAdoptCatError(err))
        )
};