import React from "react";
import TodoItem from "./components/TodoItem";
import Clock from "./Clock";

interface TodoAppProps {}
interface TodoAppState {
  todoItems: string[];
  newTodo: string;
}

class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
  constructor(props: TodoAppProps) {
    super(props);
    
    this.state = {
      todoItems: [],
      newTodo: "",
    };
  }

  handleNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo: e.target.value,
    });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const items = this.state.todoItems.concat(this.state.newTodo)

    this.setState({
      todoItems: items,
      newTodo: "",
    })
  }

  onDelete = (idx:number) => {
    this.state.todoItems.splice(idx, 1)
    this.setState({
      todoItems:this.state.todoItems
    })
  }

  render() {
    return (
      <div>
        
        <h1 className = "todo">TODO LIST</h1>

        <Clock></Clock>

       <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo" className = "todo-input">뭘 해야하나요?</label> <br />
            <input type="text" id="new-todo" placeholder = "할 일을 입력하세요" value={this.state.newTodo} onChange={this.handleNewTodo} />
            <button className = "button">{this.state.todoItems.length + 1} 번째 추가</button>
        </form>
      
        {
          this.state.todoItems.map((item, idx) => (
            <TodoItem name={item} key={idx} idx = {idx} onDelete={this.onDelete}/>
          ))
        }
        
      </div>
    )
  }
}

export default TodoApp;