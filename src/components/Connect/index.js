import React, { useState, useEffect } from 'react';
import { connect as connectStore } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Slide from '@material-ui/core/Slide';
import { connectServer, setConnecting } from 'redux/actions/connectionsActions';

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

const Connect = ({ history, connect, connections, setConnecting }) => {
  const { connected, connecting, error } = connections;
  if (connected) history.push('/server/websites');

  const [server, setServer] = useState({
    serverUrl: 'https://localhost:55539/',
    displayName: 'Local IIS',
    accessToken: '',
    remember: false
  });

  const isFormComplete = Object.values(server).some(
    x => x === null || x === ''
  );

  const handleSubmit = event => {
    event.preventDefault();
    setConnecting({ connecting: true, error: null });
  };

  useEffect(() => {
    if (connecting)
      connect({
        url: server.serverUrl,
        name: server.displayName,
        token: server.accessToken,
        remember: server.remember
      }); // setTimeout(() => history.push('/server/websites'), 1000);
  }, [connecting]);

  const classes = useStyles();

  return (
    <Slide in={true} direction="left" timeout={600}>
      <Container component="main" maxWidth="sm" className={classes.main}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h3">
            Connect
          </Typography>
          <br />
          <Typography component="p" variant="body1">
            Let's connect to IIS Administration API.
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Server URL"
              autoFocus
              value={server.serverUrl}
              onChange={e =>
                setServer({ ...server, serverUrl: e.target.value })
              }
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Display Name"
              type="text"
              value={server.displayName}
              onChange={e =>
                setServer({ ...server, displayName: e.target.value })
              }
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Access Token"
              type="text"
              value={server.accessToken}
              onChange={e =>
                setServer({ ...server, accessToken: e.target.value })
              }
            />
            <span style={{ float: 'right' }}>
              Don't have an access token?{' '}
              <Link href="#" variant="body2">
                {'Get Access Token'}
              </Link>
            </span>
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  checked={server.remember}
                  onChange={() =>
                    setServer({
                      ...server,
                      remember: !server.remember
                    })
                  }
                />
              }
              label="Keep me connected from now on"
            />
            {error && (
              <Typography variant="body1" color="error">
                {error.message}
              </Typography>
            )}
            <br />
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              type="submit"
              disabled={isFormComplete || connecting}
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
    </Slide>
  );
};

export default connectStore(({ connections }) => ({ connections }), {
  connect: connectServer,
  setConnecting
})(withRouter(Connect));
