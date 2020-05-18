import React, { RefObject } from 'react';
import logo from './logo.svg';
import './App.css';
import { Game } from './components/game';

type Props = {};

class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render = () => {
    return (
      <div className='App'>
        <Game
          playerName='Carlos, the Brave Knight'
          enemyName='Jurandir, the Small Dragon'
        />
      </div>
    );
  };
}

export default App;
