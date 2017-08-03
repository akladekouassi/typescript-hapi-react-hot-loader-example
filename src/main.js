import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/styles.css';

import ProviderWrapper from './views/ProviderWrapper';
import ProviderService from './services/ProviderService';

const rootEl = document.getElementById('root');
const initialState = window['__STATE__'];
const store = ProviderService.createProviderStore(initialState);

delete window['__STATE__'];

const render = (Component) =>
    ReactDOM.render(
        <AppContainer>
            <Component store={store} />
        </AppContainer>,
        rootEl
    );

render(ProviderWrapper);

if (module.hot) {
    module.hot.accept('./views/ProviderWrapper', () => render(ProviderWrapper));
}
