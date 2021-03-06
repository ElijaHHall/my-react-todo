import React, { Component } from 'react';
import TodoModel from '../models/Todo'
import Todos from '../components/Todos'
import CreateTodoForm from '../components/CreateTodoForm';


class TodosContainer extends Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }  
    this.createTodo = this.createTodo.bind(this);

  }
  createTodo(todo) {
    let newTodo = {
      body: todo,
      completed: false
    }
    TodoModel.create(newTodo).then((res) => {
      let todos = this.state.todos
      let newTodos = todos.push(res.data)
      this.setState({newTodos})
    })
  }
  
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    TodoModel.all().then( (res) =>{
      this.setState ({
        todos: res.data.todos,
        todo: ''
      })
    })
  }
  render() {
    return (
       <div className='todosComponent'>
        <Todos
         todos={this.state.todos}/>
         <CreateTodoForm
            createTodo={ this.createTodo }
              />
       </div>       
     
    );
  }
}


export default TodosContainer;