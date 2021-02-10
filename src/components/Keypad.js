// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

    render() {
        return (
           <input onKeyUp={this.keyUpEvent} type="password" ></input>
        )
    }

    keyUpEvent = () => {
        console.log('Entering password...')
    }

}

export default Keypad