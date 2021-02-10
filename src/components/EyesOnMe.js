// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {

    render() {
        return (
           <button onFocus={this.focusEvent} onBlur={this.blurEvent}></button>
        )
    }

    blurEvent = () => {
        console.log('Hey! Eyes on me!')
    }

    focusEvent = () => {
        console.log('Good!')
    }

}

export default EyesOnMe