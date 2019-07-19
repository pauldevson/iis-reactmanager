import React from 'react';
import { Typography, Paper, Container } from '@material-ui/core';
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
    id: 'kg8knDzagn',
    name: 'Default Web Site',
    status: 'Stopped',
    poolName: 'DefaultAppPool',
    binding: 'https://paul.dotnet.bosch.com',
    physicalPath: 'C:\\inetpub\\wwwroot\\DefaultWebSite'
  },
  {
    id: '4IJzmNNgtg',
    name: 'VisitorsQA',
    status: 'Started',
    poolName: 'VisitorsPool',
    binding: 'https://visitors.bosch.com',
    physicalPath: 'C:\\inetpub\\wwwroot\\VisitorsQA'
  },
  {
    id: 'ghykAzrQbE',
    name: 'Jengalcoholic',
    status: 'Stopped',
    poolName: 'JengaPool',
    binding: 'https://jenga.bosch.com',
    physicalPath: 'C:\\inetpub\\wwwroot\\Jengalcoholic'
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
