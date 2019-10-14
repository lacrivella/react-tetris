import React from 'react';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { createStage } from '../helpers/gameHelpers';

function Tetris() {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="score" />
            <Display text="rows" />
            <Display text="levels" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}

export default Tetris;
