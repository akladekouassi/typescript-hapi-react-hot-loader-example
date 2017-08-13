import * as React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {StaticRouter} from 'react-router';
import About from './views/About';
import Home from './views/Home';
import Contact from './views/Contact';
import Footer from './views/landmarks/Footer';
import Header from './views/landmarks/Header';
import IStore from './interfaces/IStore';
import ISagaStore from './interfaces/ISagaStore';

interface IProviderWrapperProps {
    store: ISagaStore<IStore>;
    isServerSide: boolean;
    location?: string;
    context?: any;
}

const RouterWrapper: React.StatelessComponent<IStore> = (props: IProviderWrapperProps): JSX.Element  => {
    const Router = props.isServerSide ? StaticRouter : BrowserRouter;

    return (
        <Provider store={props.store}>
            <Router
                context={props.context}
                location={props.location}
            >
                <div className="container">
                    <Header />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={Home}
                        />
                        <Route
                            path="/about"
                            component={About}
                        />
                        <Route
                            path="/contact"
                            component={Contact}
                        />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
};

export default RouterWrapper;