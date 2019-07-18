import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Icon, ListItemIcon } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const styles = ({ spacing, transitions, breakpoints, palette, shape }) => ({
  search: {
    position: 'relative',
    marginRight: 8,
    borderRadius: shape.borderRadius,
    background: palette.grey[200],
    '&:hover': {
      background: palette.grey[300]
    },
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

const servers = [
  'MTPWBPZ1.us.bosch.com',
  'MTPWBPZ2.us.bosch.com',
  'MTPWBPZ3.us.bosch.com',
  'MTPWBPZ4.us.bosch.com',
  'MTPWBPZ5.us.bosch.com',
  'MTPWBPZ6.us.bosch.com'
];

const ServerSelector = ({ classes }) => {
  const [serverName, setServerName] = useState(servers[2]);

  const handleServerChange = e => {
    setServerName(e.target.value);
  };
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <Icon>cast_connected</Icon>
      </div>
      <Select
        variant="outlined"
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
          servers.map(server => (
            <MenuItem value={server} key={server}>
              <ListItemIcon>
                {server === serverName ? (
                  <Icon>cast_connected</Icon>
                ) : (
                  <Icon>cast</Icon>
                )}
              </ListItemIcon>
              {server}
            </MenuItem>
          ))}

        <Divider />
        <MenuItem value={'nothing'}>
          <ListItemIcon>
            <Icon>settings</Icon>
          </ListItemIcon>
          Add or remove servers
        </MenuItem>
      </Select>
      {/* <InputBase
      placeholder="Server..."
      value="MTPWBPZ1"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput
      }}
    /> */}
    </div>
  );
};

export default withStyles(styles)(ServerSelector);
