import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { withStyles, useTheme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { CloudDownload, Code } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Link from '@material-ui/core/Link';
import ServerSelector from './ServerSelector';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';

const styles = ({ spacing, transitions, breakpoints, palette, shape }) => ({
  header: {
    fontWeight: 900,
    minWidth: 0,
    fontSize: 18
  },
  grow: {
    flexGrow: 1
  }
});

const ServersLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/settings/servers" {...props} />
));

const ToolBar = ({ classes, screen }) => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only('xs'));
  const sm = useMediaQuery(theme.breakpoints.only('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Typography noWrap color={'textSecondary'} className={classes.header}>
        IIS Web Manager
      </Typography>
      <div className={classes.grow} />
      <ServerSelector />
      {xs && (
        <IconButton>
          <Icon>more_vert</Icon>
        </IconButton>
      )}
      {sm && (
        <>
          <IconButton>
            <Icon className="fa fa-server" />
          </IconButton>
          <IconButton>
            <Icon>more_vert</Icon>
          </IconButton>
        </>
      )}
      {md && (
        <>
          <Tooltip title="Server Connections">
            <ServersLink>
              <IconButton>
                <Icon className="fa fa-server" />
              </IconButton>
            </ServersLink>
          </Tooltip>
          <Tooltip title="Download IIS Administration API">
            <Link
              href="http://go.microsoft.com/fwlink/?LinkId=829373"
              target="_blank"
              rel="noopener"
            >
              <IconButton>
                <CloudDownload />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Developers">
            <Link
              href="https://github.com/microsoft/iis.administration"
              target="_blank"
              rel="noopener"
            >
              <IconButton>
                <Code />
              </IconButton>
            </Link>
          </Tooltip>
        </>
      )}
    </>
  );
};

ToolBar.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(ToolBar);
