import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Root, config } from 'Layout';
import Home from 'components/Home';
import NotFound from 'components/NotFound';
import Connect from 'components/Connect';

const App = () => (
  <Root config={config} style={{ minHeight: '100vh' }}>
    <CssBaseline />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/get" component={Home} />
        <Route path="/connect" component={Connect} />
        <Route path="/server/websites" component={Connect} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Root>
);

export default App;
