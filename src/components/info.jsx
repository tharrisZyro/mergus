import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  navbar: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: theme.colorPrimary,
    margin: 0,
    padding: 0,
  },
  text: {
    color: theme.textPrimary,
    margin: 0,
    padding: 10,
  },
})

const Info = ({ classes }) => (
  <nav className={classes.navbar}>
    <h1 className={classes.text}>Mergus</h1>
  </nav>
)

export default injectSheet(styles)(Info);