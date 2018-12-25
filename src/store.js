import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {amountReducer} from './reducers/reducer'

let reducers = combineReducers({
    amountReducer
})

export const store = createStore(reducers,applyMiddleware(
    thunkMiddleware
))