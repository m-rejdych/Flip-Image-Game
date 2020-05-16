import React, { Component } from 'react';

import styles from './Container.module.css';
import GameBoard from '../../components/GameBoard/GameBoard';
import LevelButtons from '../../components/Buttons/LevelButtons/LevelButtons';

class Container extends Component {
  state = {
    level: null,
    levelButtonsShown: true,
    numOfFields: 0,
    colors: [],
  };

  setLevelHandler = (level) => {
    this.setState({ level, levelButtonsShown: !this.state.levelButtonsShown });
    this.setNumOfFieldsHandler(level);
    this.addColorsHandler(level);
  };

  setNumOfFieldsHandler = (level) => {
    level === 'easy'
      ? this.setState({ numOfFields: 16 })
      : level === 'medium'
      ? this.setState({ numOfFields: 64 })
      : this.setState({ numOfFields: 100 });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  addColorsHandler = (level) => {
    const { colors } = this.state;
    let count;
    level === 'easy'
      ? (count = 8)
      : level === 'medium'
      ? (count = 32)
      : (count = 50);

    for (let i = 0; i < count; i++) {
      const color = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`;

      colors.push(color);
      colors.push(color);
    }

    this.setState({ colors });
  };

  render() {
    return (
      <div className={styles.Container}>
        <GameBoard
          level={this.state.level}
          numOfFields={this.state.numOfFields}
          colors={this.state.colors}
        />
        {this.state.levelButtonsShown ? (
          <LevelButtons click={this.setLevelHandler} />
        ) : null}
      </div>
    );
  }
}

export default Container;
