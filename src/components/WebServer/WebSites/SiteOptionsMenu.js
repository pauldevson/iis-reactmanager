import React, { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  siteMenu: {
    width: '170px'
  }
}));

const SiteOptionsMenu = ({ site }) => {
  const { siteId, isRunning } = site;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleSiteOptionsMenu = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <>
      <IconButton
        aria-label="Manage"
        onClick={handleSiteOptionsMenu}
        aria-controls={siteId}
        aria-haspopup="true"
      >
        <Icon>settings</Icon>
      </IconButton>
      <Menu
        id={siteId}
        anchorEl={anchorEl}
        // keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{ paper: classes.siteMenu }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Icon>edit</Icon>
          </ListItemIcon>
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Icon>exit_to_app</Icon>
          </ListItemIcon>
          Browse
        </MenuItem>
        <MenuItem onClick={handleClose} disabled={isRunning}>
          <ListItemIcon>
            <Icon>play_circle_filled</Icon>
          </ListItemIcon>
          Start
        </MenuItem>
        <MenuItem onClick={handleClose} disabled={!isRunning}>
          <ListItemIcon>
            <Icon>stop</Icon>
          </ListItemIcon>
          Stop
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Icon>delete</Icon>
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};

export default SiteOptionsMenu;
