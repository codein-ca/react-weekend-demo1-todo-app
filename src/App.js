import React from "react";
import "./App.css";
import Task from "./Task";

const Tasks = props => {
  // console.log("TASKS props updated", props);
  // TODO: note the inconsistency between states
  // The parent/container was not informed of child's actions
  // So 'completion' updates the child's UI but not the parent state.
  return props.in.map((e, i) => <Task in={e} key={i} />);
};

function api() {
  const result = fetch("http://localhost:8000/wp-json/wp/v2/posts")
    .then(x => x.json())
    .then(x =>
      x.map(e => {
        const title = e["title"]["rendered"];
        console.log(title);
        return title;
      })
    );
  result.then(x => x);
}

try {
  // api();
  const result = api();
  console.log("result", result);
} catch (error) {
  console.log(error);
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTaskTitle: "",
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

    this.updateCurrentTask = this.updateCurrentTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  updateCurrentTask(event) {
    this.setState({ currentTaskTitle: event.target.value });
  }

  addTask() {
    // console.info("A task will only be added if not empty");
    if (this.state.currentTaskTitle !== "") {
      const local = this.state.taskList;
      local.push({
        title: this.state.currentTaskTitle,
        complete: false
      });
      this.setState({ taskList: local });
      this.setState({ currentTaskTitle: "" });
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <input
            type="text"
            placeholder="What is the task?"
            value={this.currentTaskTitle}
            onChange={this.updateCurrentTask}
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
