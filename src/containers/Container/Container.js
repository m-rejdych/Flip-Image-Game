import React from 'react';

import styles from './Container.module.css';
import GameBoard from '../../components/GameBoard/GameBoard';

const container = (props) => (
  <div className={styles.Container}>
    <GameBoard />
  </div>
);

export default container;
