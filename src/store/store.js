import { createStore , applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import ReducersCollection from './Reducers/ReducersCollection';

const store = createStore(ReducersCollection , composeWithDevTools(applyMiddleware(thunk)));

export default store;
