import React from 'react';

import styles from './Container.module.css';
import GameBoard from '../../components/GameBoard/GameBoard';
import LevelButtons from '../../components/Buttons/LevelButtons/LevelButtons';

const container = () => (
  <div className={styles.Container}>
    <GameBoard />
    <LevelButtons />
  </div>
);

export default container;
