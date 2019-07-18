import React from 'react';
import { Typography, Box, Paper, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WebSitesTable from './WebSitesTable';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(3)
  },
  tableContainer: {
    padding: theme.spacing(3),
    margin: theme.spacing(3, 0, 0)
  },
  title: {
    margin: theme.spacing(0, 2)
  }
}));

const sites = [
  {
    name: 'Default Web Site',
    status: 'Stopped',
    poolName: 'DefaultAppPool',
    binding: 'https://paul.dotnet.bosch.com'
  },
  {
    name: 'VisitorsQA',
    status: 'Started',
    poolName: 'VisitorsPool',
    binding: 'https://visitors.bosch.com'
  },
  {
    name: 'Jengalcoholic',
    status: 'Stopped',
    poolName: 'JengaPool',
    binding: 'https://paul.dotnet.bosch.com'
  }
];

const WebSites = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h5" className={classes.title}>
        Web Sites
      </Typography>
      <Paper elevation={1} className={classes.tableContainer}>
        <WebSitesTable sites={sites} />
      </Paper>
    </Container>
  );
};
export default WebSites;
