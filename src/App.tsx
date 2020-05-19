import React from 'react';
import './App.css';
import Character from './components/character'
import heroes from './mock/heroes'
import monsters from './mock/monsters'
import { Character as Char } from './domain/character';
import Hability from './domain/hability'
import { HeapProfiler } from 'inspector';

type Props = {};

type State = {
  hero: Char,
  monster: Char,
  battleLog: string[]
}

class App extends React.Component<Props, State> {
  componentDidMount = () => {
    this.setState({ hero: heroes[0], monster: monsters[0], battleLog: [] })
  }

  executeHeroHability = ({ name, type, dice }: Hability) => {
    const { hero, monster } = this.state

    console.log(dice)
    const roll = Math.ceil(Math.random() * dice) * hero.strength;

    let heroLife = hero.life
    let monsterLife = monster.life

    if (type === 'heal') {
      heroLife = Math.min(hero.maxLife, hero.life + roll)
      this.log(`${hero.name} curou-se em ${roll}`)
    } else if (type === 'attack') {
      monsterLife = Math.max(0, monster.life - roll);
      this.log(`${hero.name} atacou ${monster.name} com ${roll} de dano!`)
    }

    this.setState({
      hero: {
        ...hero,
        life: heroLife,
        habilities: hero.habilities.map(hability =>
          ({
            ...hability,
            charged: hability.name === hability.name
              ? 0
              : hability.charged
          })
        )
      },
      monster: {
        ...monster,
        life: monsterLife
      }
    })
  }

  executeMonsterHability = ({ name, type, dice }: Hability) => {
    const { hero, monster } = this.state;

    let heroLife = hero.life
    let monsterLife = monster.life

    const roll = Math.ceil(Math.random() * dice) * monster.strength;

    if (type === 'heal') {
      monsterLife = Math.min(monster.maxLife, roll)
      this.log(`${monster.name} curou-se em ${roll}`)
    } else if (type === 'attack') {
      heroLife = Math.max(0, hero.life - roll);
      this.log(`${monster.name} atacou ${hero.name} com ${roll} de dano!`)
    }

    this.setState({
      monster: {
        ...monster,
        life: monsterLife,
        habilities: monster.habilities.map(hability =>
          ({
            ...hability,
            charged: hability.name === hability.name
              ? 0
              : hability.charged
          })
        )
      },
      hero: {
        ...hero,
        life: heroLife
      }
    })
  }

  log = (event: string) => this.setState({ battleLog: [...this.state.battleLog, event] })

  render = () => {
    if (!this.state) {
      return null
    }

    return (
      <div className='App'>
        <div className="chars">
          <div className="heroes">
            <Character {...this.state.hero} executeHability={this.executeHeroHability} />
          </div>
          <div className="monsters">
            <Character {...this.state.monster} executeHability={this.executeMonsterHability} />
          </div>
        </div>
        <ul>
          {this.state.battleLog.map((log, index) => <li key={index}> {log} </li>)}
        </ul>
      </div>
    );
  };
}

export default App;
