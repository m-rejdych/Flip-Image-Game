import React, { Component } from 'react';

import styles from './GameBoard.module.css';

class GameBoard extends Component {
  state = {
    fields: [],
  };

  render() {
    return <div className={styles.GameBoard}></div>;
  }
}

export default GameBoard;
