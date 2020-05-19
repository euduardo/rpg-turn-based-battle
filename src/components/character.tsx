import React from 'react'
import LifeBar from './life-bar'
import HabilityButton from './hability-button'
import Hability from '../domain/hability'

type Props = {
    name: string,
    habilities: Hability[],
    strength: number,
    life: number,
    maxLife: number,
    executeHability: (hability: Hability) => void,
}

export default class Character extends React.Component<Props> {
    executeHability = (hability: Hability) => {
        this.props.executeHability(hability)
    }

    render = () => {
        return (
            <div className="character">
                <span>{this.props.name}</span>
                <LifeBar life={this.props.life} maxLife={this.props.maxLife} />
                {this.props.habilities.map(hability => <HabilityButton key={hability.name} hability={hability} execute={this.executeHability} />)}
            </div>
        )
    }
}