import React, { Component } from 'react';

import styles from './Field.module.css';

class Field extends Component {
  state = {};

  refference = React.createRef();

  activateFieldHandler = () => {
    if (
      this.props.fieldsActivated.some(
        (item) => item[1] === this.props.identificator
      )
    )
      return;

    if (
      this.props.fieldsActivated.length >= 2 &&
      this.props.fieldsActivated.length % 2 === 0 &&
      this.props.fieldsActivated[this.props.fieldsActivated.length - 1][0] !==
        this.props.fieldsActivated[this.props.fieldsActivated.length - 2][0]
    )
      return;

    if (this.props.fieldsActivated.length % 2 === 0) {
      this.props.activateField(this.props.color, this.props.identificator);
    } else {
      if (
        this.props.fieldsActivated[this.props.fieldsActivated.length - 1][0] ===
        this.props.color
      ) {
        this.props.activateField(this.props.color, this.props.identificator);
      } else {
        this.props.activateField(this.props.color, this.props.identificator);
        setTimeout(() => this.props.desactivateFields(), 1000);
      }
    }

    if (this.props.fieldsActivated.length === this.props.colors.length)
      this.props.isEndGame();
  };

  // changeClassHandler = () =>
  //   this.props.fieldsActivated.indexOf(this.props.color) === -1
  //     ? styles.Container
  //     : [styles.Container].join(' ');

  render() {
    const classesFront = [styles.FieldFront];
    const classesBack = [styles.FieldBack];
    let container;

    this.props.fieldsActivated.some(
      (item) =>
        item[0] === this.props.color && item[1] === this.props.identificator
    )
      ? (container = [styles.Container, styles.Activated])
      : (container = [styles.Container]);

    this.props.level === 'easy'
      ? container.push(styles.Easy)
      : this.props.level === 'medium'
      ? container.push(styles.Medium)
      : container.push(styles.Hard);

    return (
      <div
        ref={this.refference}
        onClick={this.activateFieldHandler}
        className={container.join(' ')}
      >
        <div className={classesFront.join(' ')}></div>
        <div
          className={classesBack.join(' ')}
          style={{ backgroundColor: this.props.color }}
        >
          {' '}
        </div>
      </div>
    );
  }
}

export default Field;
