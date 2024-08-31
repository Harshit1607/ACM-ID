import { legacy_createStore } from 'redux';
import reducer from './idReducer';

const store = legacy_createStore(reducer);

export default store;