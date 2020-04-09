import React, { Component, PropTypes } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { black } = this.props;
    const fill = black ? 'black' : 'white';
    const color = black ? 'white' : 'black';
    const style = {
      backgroundColor: fill,
      color: color,
      width: '100%',
      height: '100px',
      fontSize: '100px',
    };

    return (
      <div style={ style }>{ this.props.children }</div>
    );
  }
}

Square.propTypes = {
  black: PropTypes.bool,
};

export default Square;
