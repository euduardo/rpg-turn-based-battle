import React from 'react'
import Hability from '../domain/hability'

type Props = {
    hability: Hability,
    execute: (hability: Hability) => void
}

export default class HabilityButton extends React.Component<Props> {

    componentDidMount = () => {
        this.setState({
            charged: this.props.hability.charged
        })
    }


    execute = () => {
        this.props.execute(this.props.hability);
    }

    render = () => {
        const { charged, needed, name } = this.props.hability;
        return (<button disabled={false} onClick={this.execute} >{name}</button>)
    }
}
