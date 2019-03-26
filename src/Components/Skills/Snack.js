import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';

const styles = theme => ({
  root: {
    background: '#000',
    color: '#fff',
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'center'
  },
  close: {
    padding: theme.spacing.unit / 2
  }
});

class SimpleSnackbar extends React.Component {
  state = {
    open: false
  };

  componentDidMount() {
    this.showSnack();
  }

  showSnack() {
    this.timeOut = setTimeout(
      function() {
        this.setState({
          open: true
        });
      }.bind(this),
      2000
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
            classes: {
              root: classes.root
            }
          }}
          message={
            <span id="message-id">Developer By Day | Magician By Night</span>
          }
        />
      </div>
    );
  }
}

SimpleSnackbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSnackbar);
