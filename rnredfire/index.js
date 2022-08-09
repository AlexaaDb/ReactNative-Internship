import { registerRootComponent } from 'expo';

import React from 'react';
import App from './App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './src/store/reducers';

const composeEnhancers= window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware=createStore(
    reducers,
    composeEnhancers(applyMiddleware(promiseMiddleware))
);

const reduxApp=()=>(
    <Provider store={createStoreWithMiddleware}>
        <App/>
    </Provider>
)

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(reduxApp);
