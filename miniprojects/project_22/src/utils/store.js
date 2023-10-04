import { createStore, combineReducers } from 'redux';
import reducer from './carReducer';

export default createStore(combineReducers({
    cars: reducer,
}));