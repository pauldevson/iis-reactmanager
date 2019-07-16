import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Fade from '@material-ui/core/Fade';
import { Header, Nav, Content, Footer } from 'Layout';
import NavList from './NavList';
import NavHeader from './NavHeader';

export default class WebServerLayout extends Component {
  render() {
    return (
      <>
        <Fade in={true} timeout={1000}>
          <Header
            menuIcon={{
              inactive: <MenuIcon />,
              active: <ChevronLeftIcon />
            }}
          >
            <Typography variant="h6">IIS Manager</Typography>
          </Header>
        </Fade>
        <Fade in={true} timeout={1500}>
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
            <NavHeader />
            <NavList />
          </Nav>
        </Fade>
        <Fade in={true} timeout={500}>
          <Content>
            <Switch>
              <Route
                path="/server/web-sites"
                component={() => <span>WEB SITES TABLE</span>}
              />
              <Route
                path="/server/root-site"
                component={() => <span>SITE SETTINGS FOR ROOT</span>}
              />
              <Route
                path="/server/files"
                component={() => <span>FILE MANAGER</span>}
              />
              <Route
                path="/server/monitoring"
                component={() => <span>MONITORING CHARTS</span>}
              />
              <Route component={() => <span>NOT FOUND</span>} />
            </Switch>
          </Content>
        </Fade>
        <Fade in={true} timeout={2000}>
          <Footer>
            Made with love in{' '}
            <a href="https://github.com/paulsancer/iis-reactmanager">GitHub</a>
          </Footer>
        </Fade>
      </>
    );
  }
}
