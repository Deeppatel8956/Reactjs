import React, { Component } from 'react';

class State extends Component {
constructor(){
    super();
    this.state={Moviename:"Tigar",Author:"bhakti"}
}
Btnclick=()=>{
    this.setState({Moviename:"hero",Author:"deep"})
}
    render() {
        return (
            <div>
                <h1>hello</h1>
                <h2>Movie name:{this.state.Moviename}</h2>
                <h3>Author name:{this.state.Author}</h3>
                <button onClick={this.Btnclick}>clickme</button>
            </div>
        );
    }
}

export default State;