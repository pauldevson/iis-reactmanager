import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import { withStyles, withTheme } from '@material-ui/core/styles';

const styles = () => ({
  serverName: { display: 'flex', alignItems: 'center' }
});

const NavHeader = ({ classes }) => (
  <>
    <Box m={2}>
      <Typography variant={'h6'} noWrap className={classes.serverName}>
        <Icon>language</Icon>
        MTPWBPZ1
      </Typography>
      <Typography color={'textSecondary'} variant="caption" noWrap gutterBottom>
        https://mtpwbpz1.rbdmz01.com:55539
      </Typography>
    </Box>
    <Divider />
  </>
);

export default withTheme(withStyles(styles)(NavHeader));
