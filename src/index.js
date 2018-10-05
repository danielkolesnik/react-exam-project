
// outsource dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

// local dependencies
import './style';
import store from './store';
import Layout from './pages';

ReactDOM.render(
    (
        <Provider store={store}>
            <Layout/>
        </Provider>
    ),
    document.getElementById('root')
);

registerServiceWorker();
