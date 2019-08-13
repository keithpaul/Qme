import { createStore, applyMiddleware } from 'redux';
import RootReducer from './app/reducers';
import ReduxThunk from 'redux-thunk';

export const store = createStore(RootReducer, applyMiddleware(ReduxThunk));