import React from 'react';

import styles from './Field.module.css';

const field = (props) => {
  const classesFront = [styles.FieldFront];
  const classesBack = [styles.FieldBack];
  const container = [styles.Container];

  props.level === 'easy'
    ? container.push(styles.Easy)
    : props.level === 'medium'
    ? container.push(styles.Medium)
    : container.push(styles.Hard);

  return (
    <div tabIndex={0} className={container.join(' ')}>
      <div className={classesFront.join(' ')}></div>
      <div
        className={classesBack.join(' ')}
        style={{ backgroundColor: props.color }}
      >
        {' '}
      </div>
    </div>
  );
};

export default field;
