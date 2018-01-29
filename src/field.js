import React from 'react';

import Task from './task.js';
export default class Field extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      tasks: []
    };
    this.addTask = this.addTask.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
    deleteTask(index){
      let arr = this.state.tasks;
      arr.splice(index,1);
      this.setState({tasks: arr});
    }
    inputChange(event){
      this.setState({value: event.target.value});
    };
    addTask () {
      this.setState({tasks: [...this.state.tasks,this.state.value]});
    };
    render() {
      return (
        <div id="addTaskBlock">
          <h1>To Do List</h1>
          <input type="text" id="typeTask" value={this.state.value} onChange={this.inputChange}/><button onClick={this.addTask}>ADD</button>
          <div className="list">
            {
              this.state.tasks.map ((item, i) =>  <Task index={i} key={i} onDelete={this.deleteTask}>{item}</Task>)
            }
          </div>
        </div>
      )
    }
};