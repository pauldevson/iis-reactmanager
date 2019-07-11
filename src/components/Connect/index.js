import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    backgroundColor: '#ffffff'
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
  getIISAdmin: {
    margin: theme.spacing(3, 1, 2)
  },
  main: {
    marginTop: 'auto',
    marginBottom: 'auto'
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm" className={classes.main}>
      <div className={classes.paper}>
        <Typography component="h1" variant="h3">
          Connect
        </Typography>
        <br />
        <Typography component="p" variant="body1">
          Let's connect to IIS Administration API.
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Server URL"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Display Name"
            type="text"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Access Token"
            type="text"
          />
          <span style={{ float: 'right' }}>
            Don't have an access token?{' '}
            <Link href="#" variant="body2">
              {'Get Access Token'}
            </Link>
          </span>
          <br />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Keep me connected from now on"
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Connect
          </Button>
          <Button
            className={classes.getIISAdmin}
            href="https://go.microsoft.com/fwlink/?LinkId=829373"
            target="_blank"
            rel="noopener"
          >
            Get Microsoft IIS Administration
          </Button>
          <Typography component="p" variant="caption">
            IIS Web Manager v0.1
          </Typography>
        </form>
      </div>
    </Container>
  );
}
