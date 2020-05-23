import React from 'react';

import styles from './GameBoard.module.css';
import Fields from './Fields/Fields';

const gameBoard = (props) => (
  <div className={styles.GameBoard}>
    <Fields
      activateField={props.activateField}
      colors={props.colors}
      level={props.level}
      num={props.numOfFields}
      fieldsActivated={props.fieldsActivated}
      desactivateFields={props.desactivateFields}
      isEndGame={props.isEndGame}
    />
  </div>
);

export default gameBoard;
