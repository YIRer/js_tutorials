import React, { Component } from 'react'

export class refEx extends Component {
    handleClick() {
        this.asdf.value = "";
        this.asdf.focus();
  } 
  
  render() {
    return (
          <div> 
                <input ref={ref=> this.asdf = ref}/>
              <button onClick={this.handleClick.bind(this)}>Click Me</button>
          </div>
      );        
}
}


export default refEx;
