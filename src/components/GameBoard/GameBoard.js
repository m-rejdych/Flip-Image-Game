import React from 'react';

import styles from './GameBoard.module.css';
import Fields from './Fields/Fields';

const gameBoard = (props) => (
  <div className={styles.GameBoard}>
    <Fields colors={props.colors} level={props.level} num={props.numOfFields} />
  </div>
);

export default gameBoard;
