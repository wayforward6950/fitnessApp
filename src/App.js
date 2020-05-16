import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
// import BasicDetailsContainer from 'containers/BasicDetailsContainer';
// import CheckerContainer from 'containers/CheckerContainer';
import FitnessContainer from 'containers/FitnessContainer';
import Navigation from 'components/Fitness/Navigation';

import { Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Fragment>
    <Helmet titleTemplate="Corona">
      <meta name="application-name" content="Corona" />
    </Helmet>
      <Switch>
      {
        /**
         * <Route exact path="/"  component={BasicDetailsContainer} />
        <Route exact path="/checker"  component={CheckerContainer} />
         */
      }
      <Route exact path="/"  component={FitnessContainer} />
        <Route exact path="/navigation"  component={Navigation} />
        <Route exact path="/fitness"  component={FitnessContainer} />
      </Switch>
    </Fragment>
  )
           
}

export default App;
