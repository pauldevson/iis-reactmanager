import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  },
  siteMenu: {
    width: '170px'
  }
}));

export default function WebSitesTable(props) {
  const classes = useStyles();
  const { sites } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSiteOptionsMenu = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Application Pool</TableCell>
          <TableCell>Bindings</TableCell>
          <TableCell>&nbsp;</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sites.map(site => (
          <TableRow key={site.name}>
            <TableCell component="th" scope="row">
              {site.name}
              <br />
              <Typography variant="caption">
                C:\inetpub\wwwroot\my.site.com
              </Typography>
            </TableCell>
            <TableCell>{site.status}</TableCell>
            <TableCell>{site.poolName}</TableCell>
            <TableCell>{site.binding}</TableCell>
            <TableCell align="right">
              <IconButton
                className={classes.button}
                aria-label="Manage"
                onClick={handleSiteOptionsMenu}
                aria-controls={`${site.name}-menu`}
                aria-haspopup="true"
              >
                <Icon>settings</Icon>
              </IconButton>
              <Menu
                id={`${site.name}-menu`}
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
                <MenuItem
                  onClick={handleClose}
                  disabled={site.status === 'Started'}
                >
                  <ListItemIcon>
                    <Icon>play_circle_filled</Icon>
                  </ListItemIcon>
                  Start
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  disabled={site.status === 'Stopped'}
                >
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
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    // <Paper className={classes.root}>
    // </Paper>
  );
}
