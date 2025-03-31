import { createStore, combineReducers } from 'redux';
import authReducer from './reducer/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;
