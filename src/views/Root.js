import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import store from 'store';
import Main from 'Templates/Main';
import Store from 'views/Store';
import Process from 'views/Process';
import Scale from 'views/Scale';
import Chill from 'views/Chill';
import DetailsPage from 'views/DetailsPage';
import { routes } from 'routes/index';
import { Provider } from 'react-redux';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Main>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to="/store" />} />
          <Route exact path={routes.store} component={Store} />
          <Route path={routes.storeItem} component={DetailsPage} />
          <Route exact path={routes.process} component={Process} />
          <Route path={routes.processItem} component={DetailsPage} />
          <Route exact path={routes.scale} component={Scale} />
          <Route path={routes.scaleItem} component={DetailsPage} />
          <Route exact path={routes.chill} component={Chill} />
          <Route path={routes.chillItem} component={DetailsPage} />
        </Switch>
      </Main>
    </BrowserRouter>
  </Provider>
);
export default Root;
