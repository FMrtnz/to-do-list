import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>MY TO-DO LIST</h1>
      <Board />
    </div>
  );

}

export default App;

function Task(props){
  return (
    <div>
      <input type="checkbox" id={props.value} name={props.value} />
      <label htmlFor={props.value} style={{"textTransform": "capitalize"}}>{props.value}</label>
    </div>
  )
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      new: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitTask = this.submitTask.bind(this);
  }

  handleChange(event) {
    const word = event.target.value;
    this.setState({new: word});
  }

  submitTask(event) {
    const word = this.state.new;
    const tasks = this.state.tasks;
    if((word.length < 0) || (tasks.indexOf(word) > -1)){
      alert("Please add a new and valide task.")
    }else{
      tasks.push(word);
      this.setState({tasks: tasks});
    }
    this.setState({new: ""});
    event.preventDefault();
  }

  renderTask(i){
    return <Task value={this.state.tasks[i]} key={i} />;
  }

  render(){
    const tasks = this.state.tasks;
    return (
      <div>
        <div className="to-do">
          {tasks.length > 0 ? tasks.map((item, i) => this.renderTask(i)) : <p>Please enter a new task</p>}
        </div>
        <div className="print">
          {tasks.length > 0 && <button onClick={() => window.print()}>PRINT THE LIST</button>}
        </div>
        <form onSubmit={this.submitTask}>
          <input type="text" value={this.state.new} onChange={this.handleChange} />
          <input type="submit" value="ADD" />
        </form>
      </div>
    )
  }

}
