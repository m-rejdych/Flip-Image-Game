import React, { Component } from 'react';

import styles from './Container.module.css';
import GameBoard from '../../components/GameBoard/GameBoard';
import LevelButtons from '../../components/Buttons/LevelButtons/LevelButtons';
import EndGameHeadline from '../../components/EndGameHeadline/EndGameHeadline';
import RestartButton from '../../components/Buttons/RestartButton/RestartButton';

class Container extends Component {
  state = {
    level: null,
    levelButtonsShown: true,
    numOfFields: 0,
    colors: [],
    fieldsActivated: [],
    endGame: false,
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
    const newState = { ...this.state };
    const { colors } = newState;
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

    const finalColors = [];

    for (let i = 0; i < count * 2; i++) {
      const random = Math.floor(Math.random() * (colors.length - 1));
      finalColors.push(colors[random]);
      colors.splice(random, 1);
    }

    this.setState({ colors: finalColors });
  };

  addFieldActivatedHandler = (color, id) => {
    const newState = { ...this.state };
    const { fieldsActivated } = newState;
    fieldsActivated.push([color, id]);
    this.setState({ fieldsActivated });
  };

  desactivateFieldsHandler = () => {
    const newState = { ...this.state };
    const { fieldsActivated } = newState;
    fieldsActivated.splice(-2);

    this.setState({ fieldsActivated });
  };

  endGameChecker = () => {
    if (
      this.state.fieldsActivated[this.state.fieldsActivated.length - 1][0] ===
      this.state.fieldsActivated[this.state.fieldsActivated.length - 2][0]
    )
      this.setState({ endGame: true });
  };

  restartGame = () => {
    this.setState({
      level: null,
      levelButtonsShown: true,
      numOfFields: 0,
      colors: [],
      fieldsActivated: [],
      endGame: false,
    });
  };

  render() {
    return (
      <div className={styles.Container}>
        {this.state.endGame ? <EndGameHeadline /> : null}
        <GameBoard
          level={this.state.level}
          numOfFields={this.state.numOfFields}
          colors={this.state.colors}
          activateField={this.addFieldActivatedHandler}
          fieldsActivated={this.state.fieldsActivated}
          desactivateFields={this.desactivateFieldsHandler}
          isEndGame={this.endGameChecker}
        />
        {this.state.levelButtonsShown ? (
          <LevelButtons click={this.setLevelHandler} />
        ) : null}
        {this.state.endGame ? (
          <RestartButton restart={this.restartGame} />
        ) : null}
      </div>
    );
  }
}

export default Container;
