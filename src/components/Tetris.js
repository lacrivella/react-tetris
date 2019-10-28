import React, { useState } from 'react';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { createStage, checkCollision } from '../helpers/gameHelpers';

function Tetris() {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log('re-render');

  const movePlayer = dir => {
    if(!checkCollision(player, stage, { x: dir, y: 0 })){
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    //reset everything
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
  }

  const drop = () => {
    if(!checkCollision(player, stage, { x: 0, y: 1 })){
      updatePlayerPos({ x: 0, y: 1, collided: false })
    } else {
      if(player.pos.y < 1) {
        console.log('GAME OVER!');
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0,  y: 0, collided: true});
    }
  };

  const dropPlayer = () => {
    drop();
  };

  const move = ({ keyCode }) => {
    if(!gameOver){
      if(keyCode === 37){
        movePlayer(-1);
      } else if(keyCode === 39){
        movePlayer(1);
      } else if(keyCode === 40){
        dropPlayer();
      }
    }
  };

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="score" />
              <Display text="rows" />
              <Display text="levels" />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}

export default Tetris;
