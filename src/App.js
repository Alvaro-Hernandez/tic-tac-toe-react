import {useState} from 'react';
import "./App.css";

function Square({value, onSquareClick}) {
  return (
    <button className='square' onClick={onSquareClick}> {value} </button>
  );
}

function Board({xIsNext, squares, onPlay}) {
  function handleClick(i) {
    if (squares[i] || calculateWiner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }
}