import React, { Component, PropTypes } from 'react';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        console.log("constructor called");
        this.state = { counter: 0 }

    }

    //     componentWillMount() {
    // console.log("componentWillMount")
    //     }

    componentDidMount() {
        console.log(" componentDidMount")
    }

    //     componentWillReceiveProps(nextProps) {
    // console.log("componentWillReceiveProps")
    //     }

    shouldComponentUpdate(nextProps, nextState) {

        console.log('shouldComponentUpdate')
        console.log("nextState", nextState)
        return true;
    }

    //     componentWillUpdate(nextProps, nextState) {
    // console.log("compo update")
    //     }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate")
        console.log("prevstate", prevState);
    }

    componentWillUnmount() {
        console.log(" componentWillUnmount")
    }
    Btnclick = () => {
        console.log("click");
        this.setState({ counter: this.state.counter + 1 })
    }
    Btnder=()=>{
        console.log("me")
        this.setState({counter:this.state.counter-1})
    }

    render() {
        console.log("render called")
        return (
            <>
                <h1>{this.state.counter}</h1>
                <button onClick={this.Btnclick}>Increment</button>
                <button onClick={this.Btnder}>deriment</button>
            </>

        );
    }
}

// componentName.propTypes = {

// };

export default Lifecycle;