import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../helpers/tetrominos';

function Cell({ type }) {
  return (
    <StyledCell type={'L'} color={TETROMINOS[type].color}>
      cell
    </StyledCell>
  );
}

export default Cell;
