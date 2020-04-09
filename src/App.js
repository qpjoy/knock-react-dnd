import React from 'react';

import Board from './chess/board';
import { observe, knightPosition } from './chess/game';

export default class BoardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      knightPosition: knightPosition
    }
  }

  componentDidMount() {
    const callback = newPosition => this.setState({knightPosition: newPosition});
    observe(callback);
  }

  render() {    
    return (
      <div>        
        <Board knightPosition={this.state.knightPosition} />
      </div>
    );
  }
};
