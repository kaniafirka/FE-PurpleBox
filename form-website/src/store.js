// store.js
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import formReducer from './reducers';

const store = createStore(formReducer);

export default store;
