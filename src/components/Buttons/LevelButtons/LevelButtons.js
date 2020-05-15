import React from 'react';

import styles from './LevelButtons.module.css';

const levelButtons = () => (
  <div className={styles.Container}>
    <button className={[styles.LevelButton, styles.Easy].join(' ')}>
      Easy
    </button>
    <button className={[styles.LevelButton, styles.Medium].join(' ')}>
      Medium
    </button>
    <button className={[styles.LevelButton, styles.Hard].join(' ')}>
      Hard
    </button>
  </div>
);

export default levelButtons;
