import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from 'Templates/Main';
import Store from 'views/Store';
import Process from 'views/Process';
import Scale from 'views/Scale';
import Chill from 'views/Chill';

const Root = () => (
  <BrowserRouter>
    <Main>
      <Switch>
        <Route exact path="/" component={Store} />
        <Route exact path="/store" component={Store} />
        <Route path="/Process" component={Process} />
        <Route path="/Scale" component={Scale} />
        <Route path="/Chill" component={Chill} />
      </Switch>
    </Main>
  </BrowserRouter>
);
export default Root;
