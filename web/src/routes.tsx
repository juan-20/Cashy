
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Landing from './pages/Landing';
import Form from './pages/Form';
import Dashboard from './pages/Dashboard/Dashboard';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/app" component={Form} />
            <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;