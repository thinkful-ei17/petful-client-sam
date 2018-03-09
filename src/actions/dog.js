import { REACT_APP_API_BASE_URL } from '../config';

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
    type: FETCH_DOG_REQUEST
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = error => ({
    type: FETCH_DOG_ERROR,
    error
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSucess = dog => ({
    type: FETCH_DOG_SUCCESS,
    data: dog
});

export const fetchDog = () => dispatch => {
    dispatch(fetchDogRequest());
    return fetch(`${REACT_APP_API_BASE_URL}/dog`,
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
        }).then(dog =>
            dispatch(fetchDogSucess(dog))
        ).catch(err =>
            dispatch(fetchDogError(err))
        )
};

export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST';
export const adoptDogRequest = () => ({
    type: ADOPT_DOG_REQUEST
});

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR';
export const adoptDogError = error => ({
    type: ADOPT_DOG_ERROR,
    error
});

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
export const adoptDogSucess = () => ({
    type: ADOPT_DOG_SUCCESS
});

export const adoptDog = () => dispatch => {
    dispatch(adoptDogRequest());
    return fetch(`${REACT_APP_API_BASE_URL}/dog`,
        {
            method: 'DELETE'
        }).then(res => {
            if (!res.ok) {
                return Promise.reject('Something has gone wrong!');
            }
            return res.status(204).end()
        }).then(() =>
            dispatch(adoptDogSucess())
        ).then(() => 
            dispatch(fetchDog())
        ).catch(err =>
            dispatch(adoptDogError(err))
        )
};