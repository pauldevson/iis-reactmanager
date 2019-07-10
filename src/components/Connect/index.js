import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const styles = {
  container: {
    padding: '1em'
  }
};
export default class Connect extends Component {
  render() {
    return (
      <Container maxWidth="xl" style={styles.container}>
        <Paper style={styles.container}>some text</Paper>
      </Container>
    );
  }
}
