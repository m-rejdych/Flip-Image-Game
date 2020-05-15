import React, { Component } from 'react';

import styles from './Container.module.css';
import GameBoard from '../../components/GameBoard/GameBoard';
import LevelButtons from '../../components/Buttons/LevelButtons/LevelButtons';

class Container extends Component {
  state = {
    level: null,
    levelButtonsShown: true,
    numOfFields: 0,
  };

  setLevelHandler = (level) => {
    this.setState({ level, levelButtonsShown: !this.state.levelButtonsShown });
    level === 'easy'
      ? this.setState({ numOfFields: 25 })
      : level === 'medium'
      ? this.setState({ numOfFields: 100 })
      : this.setState({ numOfFields: 400 });
  };

  setNumOfFieldsHandler = (level) => {
    this.state.level === 'easy'
      ? this.setState({ numOfFields: 25 })
      : this.state.level === 'medium'
      ? this.setState({ numOfFields: 64 })
      : this.setState({ numOfFields: 100 });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div className={styles.Container}>
        <GameBoard
          level={this.state.level}
          numOfFields={this.state.numOfFields}
        />
        {this.state.levelButtonsShown ? (
          <LevelButtons click={this.setLevelHandler} />
        ) : null}
      </div>
    );
  }
}

export default Container;
