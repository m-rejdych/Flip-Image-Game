import React from 'react';

import styles from './Field.module.css';

const field = (props) => {
  const classes = [styles.Field];
  props.level === 'easy'
    ? classes.push(styles.Easy)
    : props.level === 'medium'
    ? classes.push(styles.Medium)
    : classes.push(styles.Hard);

  return <div className={classes.join(' ')}></div>;
};

export default field;
