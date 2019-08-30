import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from '../context';

import Platform             from './pages/Platform';
import Design               from './pages/Design';
import UserRegistration     from './pages/UserRegistration';
import AdminFeatures        from './pages/AdminFeatures';
import ServiceIntegration   from './pages/ServiceIntegration';
import DatabaseManagement   from './pages/DatabaseManagement';
import Security             from './pages/Security';
import AppBilling           from './pages/AppBilling';
import ExclusiveFeatures    from './pages/ExclusiveFeatures';
import LetsBuildApp         from './pages/LetsBuildApp';

import '../static/scss/main.scss';

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <Switch>
                        <Route exact path="/" component={() => <Redirect to="/platform" />} />
                        <Route exact path="/platform"               component={Platform}  />
                        <Route exact path="/design"                 component={Design}       />
                        <Route exact path="/user-registration"      component={UserRegistration}   />
                        <Route exact path="/admin-features"         component={AdminFeatures}   />
                        <Route exact path="/service-integration"    component={ServiceIntegration}   />
                        <Route exact path="/database-management"    component={DatabaseManagement}   />
                        <Route exact path="/security"               component={Security}   />
                        <Route exact path="/app-billing"            component={AppBilling}    />
                        <Route exact path="/exclusive-features"     component={ExclusiveFeatures}    />
                        <Route exact path="/lets-build-your-app"    component={LetsBuildApp}    />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App
