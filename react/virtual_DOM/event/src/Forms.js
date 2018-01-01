import React, { Component } from 'react'

const TodoItem = ({text})=>{
    return <li>{text}</li>
}
export class FormEx extends Component {
    constructor(props){
        super(props);
        this.state = {
            newTodoItem : '',
            todoList : []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            newTodoItem : e.target.value
        });
        console.log(this.state)
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.newTodoItem);
        this.setState((prevState,props)=>{
            return {
                newTodoItem: '',
                todoList:[...prevState.todoList,prevState.newTodoItem]
            }
        });
    }
  render() {
      const {newTodoItem} = this.state;
      const TodoItems = this.state.todoList.map((todo,i)=>{
          return <TodoItem key={i} text={todo} />
      })
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text"
            name="newTodoItem"
            autoComplete="off"
            placeholder="todo"
            value={newTodoItem}
            onChange={this.handleChange}
            />
        <button type="submit">
            save
        </button>
        </form>
        <div>
            <ul>
                {TodoItems}
            </ul>
        </div>
      </div>
    )
  }
}

export default FormEx;
