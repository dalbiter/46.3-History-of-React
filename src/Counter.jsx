import React from 'react';

class Counter extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render() {
        const { color } = this.props
        return (
            <div>
                <h1 style={{color}}>I am Counter</h1>
            </div>
        );
    };
};

export default Counter;