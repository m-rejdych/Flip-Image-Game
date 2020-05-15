import React from 'react';

import styles from './LevelButtons.module.css';

const levelButtons = (props) => (
  <div className={styles.Container}>
    <button
      onClick={() => props.click('easy')}
      className={[styles.LevelButton, styles.Easy].join(' ')}
    >
      Easy
    </button>
    <button
      onClick={() => props.click('medium')}
      className={[styles.LevelButton, styles.Medium].join(' ')}
    >
      Medium
    </button>
    <button
      onClick={() => props.click('hard')}
      className={[styles.LevelButton, styles.Hard].join(' ')}
    >
      Hard
    </button>
  </div>
);

export default levelButtons;
