import React from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

function Tetris() {
  return (
    <div>
      <Stage />
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
