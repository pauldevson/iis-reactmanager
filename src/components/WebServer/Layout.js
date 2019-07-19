import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Fade from '@material-ui/core/Fade';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { Header, Nav, Content, Footer } from 'Layout';
import NavList from './NavList';
import WebSites from './WebSites/';
import WebSiteDetails from './WebSites/WebSiteDetails';
import ToolBar from './ToolBar';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  footer: { textAlign: 'right' }
}));

const WebServerLayout = () => {
  const classes = useStyles();

  return (
    <>
      <Fade in={true} timeout={1000}>
        <Header
          menuIcon={{
            inactive: <MenuIcon />,
            active: <ChevronLeftIcon />
          }}
        >
          <ToolBar />
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
          <div className={classes.toolbar} />
          {/* <NavHeader /> */}
          <NavList selectedItem={0} />
        </Nav>
      </Fade>
      <Fade in={true} timeout={500}>
        <Content>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/server/websites" component={WebSites} />
            <Route path="/server/websites/:id" component={WebSiteDetails} />
            <Route
              path="/server/rootsite"
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
        <Footer className={classes.footer}>
          <Typography variant="caption">
            Made with{' '}
            <Typography variant="caption" color="error">
              &#10084;
            </Typography>{' '}
            in{' '}
            <Link
              href="https://github.com/paulsancer/iis-reactmanager"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </Link>
            .
          </Typography>
        </Footer>
      </Fade>
    </>
  );
};

export default WebServerLayout;
