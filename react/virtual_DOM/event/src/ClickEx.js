import React, { Component } from 'react'

export class ClickEx extends Component {
    constructor(props){
        super(props);
        this.state = {name : "tim"};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.setState((prevState, props)=>({
            name: prevState.name.toUpperCase()
        }));
    }
    render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <button type="button"
                onClick={this.handleClick}>
                TIM button
        </button>
      </div>
    )
  }
}

export default ClickEx;
