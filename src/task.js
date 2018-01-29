import React from 'react';

export default class Task extends React.Component {
  constructor(props){
    super(props);
     this.state = {
       id: this.props.index,
     }
  };
  deleteTasks(){
    console.log(this.state.id)
    this.props.onDelete(this.state.id)
  };
  render(){
    return(
      <div className ="task">
        <p >{this.props.children}</p>
        <button onClick={this.deleteTasks.bind(this)}>X</button>
      </div>
    )
  }
}