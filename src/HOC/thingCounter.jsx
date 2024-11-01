import React from 'react';
import withCounter from './withCounter';

class ThingCounter extends React.Component {
    constructor(props) {
        super(props)
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
    </div>
        )
    }
}

export default withCounter(ThingCounter);