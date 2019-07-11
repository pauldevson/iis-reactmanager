import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    width: 100,
    height: 100,
    color: theme.palette.grey[500]
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  main: {
    marginTop: 'auto',
    marginBottom: 'auto'
  }
}));

const ConnectLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/connect" {...props} />
));

export default function Home() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm" className={classes.main}>
      <div className={classes.paper}>
        <CloudDownloadIcon fontSize="large" className={classes.avatar} />
        <Typography component="h1" variant="h3">
          Hi there!
        </Typography>
        <br />
        <Typography component="p" variant="body1">
          Start managing your Microsoft IIS Server right here.
        </Typography>
        <Typography component="p" variant="body1">
          <Link
            href="https://blogs.iis.net/adminapi"
            variant="body2"
            target="_blank"
            rel="noopener"
          >
            {'Learn More'}
          </Link>
        </Typography>
        <Fab
          type="button"
          fullWidth
          variant="extended"
          color="primary"
          className={classes.submit}
          href="http://go.microsoft.com/fwlink/?LinkId=829373"
          target="_blank"
          rel="noopener"
        >
          {'Download Microsoft IIS Administration'}
        </Fab>
        <Typography component="p" variant="body2">
          Version 2.2.0
        </Typography>
        <Typography component="p" variant="body2">
          For Windows and Windows Server (64-bit)
        </Typography>
        <Box mt={5}>
          <Button component={ConnectLink}>Skip this</Button>
        </Box>
      </div>
    </Container>
  );
}
