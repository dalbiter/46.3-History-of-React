import React from 'react';

class Counter extends React.Component {
    static defaultProps = { color: "orange" }
    constructor(props){
        super(props)
        this.state = { 
            count: 0, 
            isHiding: false 
        };
        this.decrement = this.decrement.bind(this);
    }
    decrement() {
        this.setState({ count: this.state.count - 1 })    
    }
    componentDidMount(){
        console.log("Component mounted")
    }
    componentDidUpdate(){
        console.log("Updated")    
    }
    componentWillUnmount(){
        console.log("About to go bye-bye")
    }
    render() {
        console.log("Component rendering")
        const { color } = this.props;
        const { count } = this.state;
        return (
            <div>
                <h1 style={{color}}>I am Counter</h1>
                <h3>Count is: {count} </h3>
                <button onClick={() => this.setState({ count: count + 1 })}>Add 1</button>
                <button onClick={this.decrement}>Subtract 1</button>
            </div>
        );
    };
};

export default Counter;