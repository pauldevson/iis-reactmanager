import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Root, Header, Nav, Content, Footer, config } from './Layout';
import Connect from './components/Connect';

const App = () => (
  <Root config={config} style={{ minHeight: '100vh' }}>
    <CssBaseline />
    <Header
      menuIcon={{
        inactive: <MenuIcon />,
        active: <ChevronLeftIcon />
      }}
    >
      <Typography variant="h6">IIS Manager</Typography>
    </Header>
    <Nav
      collapsedIcon={{
        inactive: <ChevronLeftIcon />,
        active: <ChevronRightIcon />
      }}
      header={
        // you can provide fixed header inside nav
        // change null to some react element
        ctx => null
      }
    >
      Nav
    </Nav>
    <Content>
      <Connect />
    </Content>
    <Footer>footer</Footer>
  </Root>
);

export default App;
