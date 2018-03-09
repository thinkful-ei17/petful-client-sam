import { REACT_APP_API_BASE_URL } from '../config';

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
    type: FETCH_DOG_REQUEST
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = () => ({
    type: FETCH_DOG_ERROR,
    error
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSucess = dog => ({
    type: FETCH_DOG_SUCCESS,
    dog
});

export const fetchDog = dispatch => {
    dispatch(fetchDogRequest());
    return fetch(`${REACT_APP_API_BASE_URL}/dog`,
        {
            method: 'GET'
        }).then(res => {
            if (!res.ok) {
                return Promise.reject('Something has gone wrong!');
            }
            return res.json()
        }).then(dog =>
            dispatch(fetchDogSucess(dog))
        ).catch(err =>
            dispatch(fetchDogError(err))
        )
};

export const FETCH_ADOPT_DOG_REQUEST = 'FETCH_ADOPT_DOG_REQUEST';
export const fetchAdoptDogRequest = () => ({
    type: FETCH_ADOPT_DOG_REQUEST
});

export const FETCH_ADOPT_DOG_ERROR = 'FETCH_ADOPT_DOG_ERROR';
export const fetchAdoptDogError = () => ({
    type: FETCH_ADOPT_DOG_ERROR,
    error
});

export const FETCH_ADOPT_DOG_SUCCESS = 'FETCH_ADOPT_DOG_SUCCESS';
export const fetchAdoptDogSucess = () => ({
    type: FETCH_ADOPT_DOG_SUCCESS
});

export const fetchAdoptDog = dispatch => {
    dispatch(fetchAdoptDogRequest());
    return fetch(`${REACT_APP_API_BASE_URL}/dog`,
        {
            method: 'DELETE'
        }).then(res => {
            if (!res.ok) {
                return Promise.reject('Something has gone wrong!');
            }
            return res.status(204).end()
        }).then(() =>
            dispatch(fetchAdoptDogSucess())
        ).then(() => 
            dispatch(fetchDog())
        ).catch(err =>
            dispatch(fetchAdoptDogError(err))
        )
};