import React from 'react';
import Character from '../engine/character';

type Props = {
  playerName: string;
  enemyName: string;
};

type State = {
  events: string[];
  player: Character;
  enemy: Character;
};

export class Game extends React.Component<Props, State> {
  componentDidMount = () => {
    const { playerName, enemyName } = this.props;
    this.setState({
      events: [],
      player: new Character(playerName, 100, 2),
      enemy: new Character(enemyName, 150, 1.5),
    });
  };

  start = () => {
    const { player, enemy, events } = this.state;

    if (!events.length) {
      this.log(`${player.name} VS ${enemy.name}!`);
    }

    const isEnemyDead = this.executeTurn(player, enemy);

    if (!isEnemyDead) {
      setTimeout(() => {
        const isPlayerDead = this.executeTurn(enemy, player);

        if (!isPlayerDead) {
          setTimeout(() => this.start(), 1000);
        }
      }, 1000);
    }
  };

  private executeTurn = (
    character: Character,
    opponent: Character
  ): boolean => {
    const multiplier = Math.ceil(Math.random() * 10);

    const damage = character.attack(multiplier);

    this.log(
      `${character.name} atacou ${opponent.name} com ${damage} de dano!`
    );

    opponent.takeDamage(damage);

    if (opponent.isDead) {
      this.log(`${character.name} venceu o combate!`);
    }

    return opponent.isDead;
  };

  private log = (newEvent: string) => {
    const { events } = this.state;
    this.setState({ events: [...events, newEvent] });
  };

  render = () => {
    if (this.state) {
      const { events } = this.state;

      if (events.length) {
        return (
          <ul>
            {events.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        );
      }

      return <button onClick={this.start}>Iniciar o combate</button>;
    }

    return <p>Vai começar</p>;
  };
}
