import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Root, Header, Nav, Content, Footer, config } from 'Layout';

export default class WebServerLayout extends Component {
  render() {
    return (
      <>
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
        <Content>Some content</Content>
        <Footer>
          Made with love in <a href="https://github.com/paulsancer">GitHub</a>
        </Footer>
      </>
    );
  }
}
