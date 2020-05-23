import React from 'react';

import styles from './RestartButton.module.css';

const restartButton = (props) => (
  <button className={styles.RestartButton} onClick={props.restart}>
    Restart
  </button>
);

export default restartButton;
