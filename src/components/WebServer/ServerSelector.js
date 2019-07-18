import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { withStyles, useTheme } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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
    width: spacing(9),
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
    paddingLeft: spacing(10),
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
  'MTPWBPZ2',
  'MTPWBPZ3',
  'MTPWBPZ4',
  'MTPWBPZ5',
  'MTPWBPZ6'
];

const ServerSelector = ({ classes }) => {
  const [serverName, setServerName] = useState(servers[0]);

  const handleServerChange = e => {
    setServerName(e.target.value);
  };
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>IIS =></div>
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
      >
        {servers.map(server => (
          <MenuItem value={server} key={server}>
            {server}
          </MenuItem>
        ))}
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
