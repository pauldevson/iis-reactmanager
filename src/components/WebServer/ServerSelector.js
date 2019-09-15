import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Icon, ListItemIcon } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { deleteServer } from 'redux/actions/connectionsActions';
import { SERVER_SETTINGS } from 'utils/routes';

const styles = ({ spacing, transitions, breakpoints, palette, shape }) => ({
  search: {
    position: 'relative',
    marginRight: 8,
    borderRadius: shape.borderRadius,
    background: palette.grey[800],
    // '&:hover': {
    //   background: palette.grey[700]
    // },
    marginLeft: 0,
    width: '100%',
    [breakpoints.up('sm')]: {
      marginLeft: spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    width: spacing(6),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    borderRadius: 4,
    paddingTop: spacing(1),
    paddingRight: spacing(3),
    paddingBottom: spacing(1),
    paddingLeft: spacing(6),
    transition: transitions.create('width'),
    width: '100%',
    [breakpoints.up('sm')]: {
      width: 120,
      minWidth: 120,
      '&:hover,&:focus': {
        width: 200
      }
    }
  }
});

const ServerSelector = props => {
  console.log(props);

  const { classes, connections, history } = props;
  const { servers } = connections;

  const currentServer = servers.find(s => s.connected);
  debugger;
  const [serverName, setServerName] = useState(
    currentServer && currentServer.name
  );

  let avoidRender = false;
  // if (currentServer === undefined) {
  //   avoidRender = true;
  //   history.push('/connect');
  // }

  const handleServerChange = e => {
    const { value } = e.target;
    // TODO remove this, only for testing redux dispatch
    if (value === 'settins') {
      history.push(SERVER_SETTINGS);
      // deleteServer(servers.find(s => s.name === serverName));
      // setServerName(servers[0].name);
    } else setServerName(e.target.value);
  };

  return avoidRender ? (
    <span>Redirecting...</span>
  ) : (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <Icon>cast_connected</Icon>
      </div>
      <Select
        value={serverName}
        onChange={handleServerChange}
        placeholder="Server..."
        disableUnderline
        classes={{
          root: classes.inputRoot,
          select: classes.inputInput
        }}
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left'
          },
          getContentAnchorEl: null
        }}
        renderValue={value => value}
      >
        {servers &&
          servers.map(({ id, name, connected }) => (
            <MenuItem value={name} key={id}>
              <ListItemIcon>
                {connected ? <Icon>cast_connected</Icon> : <Icon>cast</Icon>}
              </ListItemIcon>
              {name}
            </MenuItem>
          ))}

        <Divider />
        <MenuItem value={'settins'}>
          <ListItemIcon>
            <Icon>settings</Icon>
          </ListItemIcon>
          Add or remove servers
        </MenuItem>
      </Select>
    </div>
  );
};

export default withRouter(
  connect(
    ({ connections }) => ({ connections }),
    { deleteServer }
  )(withStyles(styles)(ServerSelector))
);
