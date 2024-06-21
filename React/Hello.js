import React, { Component } from 'react';

/*
const Hello = (props) => {
    return (
        <h2>Hello {props.name}</h2>
    );
}
*/

class Hello extends Component {
    render() {
        return (<h2>Hello {this.props.name}</h2>)
    }
}

export default Hello;