import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from '../context';

import SelectPlatform from './pages/SelectPlatform';
import AppDesign from './pages/AppDesign';
import ProjectStatus from './pages/ProjectStatus';
import RegisterLogin from './pages/RegisterLogin';
import MultiLanguage from './pages/MultiLanguage';
import InAppPayments from './pages/InAppPayments';
import AppAdminPanel from './pages/AppAdminPanel';
import LetsBuildApp from './pages/LetsBuildApp';

import './App.scss';

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <Switch>
                        <Route exact path="/" component={() => <Redirect to="/select-platform" />} />
                        <Route exact path="/select-platform" component={SelectPlatform} />
                        <Route exact path="/app-design" component={AppDesign} />
                        <Route exact path="/project-status" component={ProjectStatus} />
                        <Route exact path="/register-login" component={RegisterLogin} />
                        <Route exact path="/multi-language" component={MultiLanguage} />
                        <Route exact path="/inapp-payments" component={InAppPayments} />
                        <Route exact path="/app-adminpanel" component={AppAdminPanel} />
                        <Route exact path="/lets-build-your-app" component={LetsBuildApp} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App
