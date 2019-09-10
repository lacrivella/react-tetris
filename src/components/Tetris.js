import React from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { createStage } from '../helpers/gameHelpers';

function Tetris() {
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text="score" />
          <Display text="rows" />
          <Display text="levels" />
        </div>
        <StartButton />
      </aside>
    </div>
  );
}

export default Tetris;
