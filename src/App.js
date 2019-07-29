import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import teal from '@material-ui/core/colors/teal';
import { Root, config } from 'layout';
import Home from 'components/Home';
import NotFound from 'components/NotFound';
import Connect from 'components/Connect';
import WebServerLayout from 'components/WebServer/Layout';
import configureStore from 'redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';

const store = configureStore();

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: teal
  }
});

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <Root config={config} style={{ minHeight: '100vh' }}>
        <CssBaseline />
        <BrowserRouter basename="/iis-reactmanager">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/get" component={Home} />
            <Route path="/connect" component={Connect} />
            <Route path="/server" component={WebServerLayout} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Root>
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
