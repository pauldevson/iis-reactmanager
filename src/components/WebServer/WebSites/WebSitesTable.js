import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import SiteOptionsMenu from './SiteOptionsMenu';
import { connect } from 'react-redux';

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

const CollisionLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));

function WebSitesTable(props) {
  const classes = useStyles();
  const { sites } = props;

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
        {sites &&
          sites.map(site => (
            <TableRow key={site.name}>
              <TableCell component="th" scope="row">
                <Link
                  component={CollisionLink}
                  to={`/server/websites/${site.id}`}
                >
                  {site.name}
                </Link>
                <br />
                <Typography variant="caption">{site.physicalPath}</Typography>
              </TableCell>
              <TableCell>{site.status}</TableCell>
              <TableCell>
                <Link
                  component={CollisionLink}
                  to={`/server/application-pools/${site.poolName}`}
                >
                  {site.poolName}
                </Link>
              </TableCell>
              <TableCell>
                <Link href={site.binding} target="_blank" rel="noopener">
                  {site.binding}
                </Link>
              </TableCell>
              <TableCell align="right">
                <SiteOptionsMenu
                  site={{
                    id: site.id,
                    isRunning: site.status === 'Started',
                    browseUrl: site.binding
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
    // <Paper className={classes.root}>
    // </Paper>
  );
}

export default connect(({ websites }) => ({ sites: websites }))(WebSitesTable);
