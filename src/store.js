import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as catReducer } from './reducers/cat';
import { reducer as dogReducer } from './reducers/dog';

const store = createStore(
    combineReducers({
        cat: catReducer,
        dog: dogReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

export default store;