import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, useTheme } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const styles = ({ spacing, transitions, breakpoints, palette, shape }) => ({
  header: {
    fontWeight: 900,
    minWidth: 0,
    fontSize: 18
  },
  grow: {
    flexGrow: 1
  },
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
    paddingRight: spacing(1),
    paddingBottom: spacing(1),
    paddingLeft: spacing(10),
    transition: transitions.create('width'),
    width: '100%',
    [breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  }
});

const ToolBar = ({ classes, screen }) => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only('xs'));
  const sm = useMediaQuery(theme.breakpoints.only('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  // const lg = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <>
      <Typography noWrap color={'textSecondary'} className={classes.header}>
        IIS Manager
      </Typography>
      <div className={classes.grow} />
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <Icon>search</Icon>
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
        />
      </div>
      {xs && (
        <IconButton>
          <Icon>more_vert</Icon>
        </IconButton>
      )}
      {sm && (
        <>
          <IconButton>
            <Icon>favorite</Icon>
          </IconButton>
          <IconButton>
            <Icon>more_vert</Icon>
          </IconButton>
        </>
      )}
      {md && (
        <>
          <IconButton>
            <Icon>favorite</Icon>
          </IconButton>
          <IconButton>
            <Icon>phone</Icon>
          </IconButton>
          <IconButton>
            <Icon>camera</Icon>
          </IconButton>
        </>
      )}
    </>
  );
};

ToolBar.propTypes = {
  screen: PropTypes.string.isRequired,
  classes: PropTypes.shape({}).isRequired
};
ToolBar.defaultProps = {
  screen: null
};

export default withStyles(styles)(ToolBar);
