import React from 'react';
import withCounter from './withCounter';

class ThingCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            thing: '🦊'
        }
    }
    render() {
        const { count, onDecrease, onIncrease } = this.props;
        return (
            <div>
        <div>Your Things: {"<3".repeat(count)}</div>
        <div>
            <button onClick={onDecrease}>-</button>
            <button onClick={onIncrease}>+</button>
        </div>
        <select value={this.state.thing} onChange={e => this.setState({ thing: e.target.value })}>
            <option value="😶‍🌫️">Cloud Face</option>
            <option value="✌️">Peace</option>
            <option value="🐔">Chicken</option>
        </select>
    </div>
        )
    }
}

export default withCounter(ThingCounter);