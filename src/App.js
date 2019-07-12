import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import teal from '@material-ui/core/colors/teal';
import { Root, config } from 'Layout';
import Home from 'components/Home';
import NotFound from 'components/NotFound';
import Connect from 'components/Connect';
import WebServerLayout from 'components/WebServer/Layout';

const theme = createMuiTheme({
  palette: {
    primary: teal
  }
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Root config={config} style={{ minHeight: '100vh' }}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/get" component={Home} />
          <Route path="/connect" component={Connect} />
          <Route path="/server/websites" component={WebServerLayout} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Root>
  </ThemeProvider>
);

export default App;
