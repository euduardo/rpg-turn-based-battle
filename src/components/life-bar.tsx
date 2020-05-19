import React from 'react'

type Props = {
    life: number,
    maxLife: number
}

export default class LifeBar extends React.Component<Props> {

    get lifePointsPercent() {
        return `${(this.props.maxLife / 100) * this.props.life}%`;
    }

    render = () => {
        return (
            <div>
                {this.props.life} / {this.props.maxLife}
                <div className="life-bar">
                    <div className="life-point" style={{ width: this.lifePointsPercent }}>
                    </div>
                </div >
            </div>
        )
    }
}