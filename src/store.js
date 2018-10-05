
// outsource dependencies
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// local dependencies
import reducers from "./reducers";
import sagas from './saga';

// configure
const sagaMiddleware = createSagaMiddleware();

export default createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(sagas);
