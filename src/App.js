import React from "react";
import "./App.css";
import Task from "./Task";

const Tasks = props => {
  console.log("TASKS props", props);
  return props.in.map((e, i) => <Task in={e} key={i} />);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTask: "",
      taskList: [
        {
          title: "Buy more diapers",
          complete: false
        },
        {
          title: "Commit small and often",
          complete: true
        },
        {
          title: "Feed Barbara",
          complete: false
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <header>
          <input
            type="text"
            placeholder="What is the task?"
            value={this.task}
          />
          <input type="button" value="Save" onClick={this.addTask} />
        </header>
        <ul>
          <Tasks in={this.state.taskList} />
        </ul>
      </div>
    );
  }
}

export default App;
